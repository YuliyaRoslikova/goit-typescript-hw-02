import { useEffect, useState } from 'react';
import { getImages } from '../../api/images-api';
import ImageGallery from '../image-gallery/ImageGallery';
import SearchBar from '../search-bar/SearchBar';
import LoadMoreBtn from '../load-more-btn/LoadMoreBtn';
import ErrorMessage from '../error-message/ErrorMessage';
import Loader from '../loader/Loader';
import ImageModal from '../image-modal/ImageModal';
import css from './App.module.css';
import { Card } from '../image-gallery/image-card/ImageCard';

const App: () => JSX.Element = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [openedCard, setOpenedCard] = useState<Card | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!query) return;

      setLoading(true);
      setIsError(false);

      try {
        const res = await getImages(page, query);
        if (page === 1) {
          setCards(res);
        } else {
          setCards(prev => [...prev, ...res]);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [page, query]);

  const onSearch = (query: string): void => {
    setCards([]);
    setPage(1);
    setQuery(query);
  };

  return (
    <div className={css.container}>
      <SearchBar onSearchChange={onSearch} />
      {cards.length > 0 && <ImageGallery items={cards} setOpenedCard={setOpenedCard} />}
      {loading && <Loader />}
      {isError && <ErrorMessage message="Something went wrong. Try again later." />}
      {cards.length > 0 && !loading && !isError && <LoadMoreBtn onLoadMoreBtn={setPage} />}
      {openedCard !== null && <ImageModal img={openedCard} setOpenedCard={setOpenedCard} />}
    </div>
  );
};

export default App;
