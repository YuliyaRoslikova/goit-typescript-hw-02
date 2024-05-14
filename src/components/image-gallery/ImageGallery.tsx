import ImageCard, { Card } from './image-card/ImageCard';
import css from './ImageGallery.module.css';

interface ImageGalleryProps {
  items: Card[];
  setOpenedCard: React.Dispatch<React.SetStateAction<Card | null>>;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, setOpenedCard }) => {
  return (
    <ul className={css.imageGallery}>
      {items.map(item => {
        return (
          <li key={item.id}>
            <ImageCard cardData={item} setOpenedCard={setOpenedCard} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
