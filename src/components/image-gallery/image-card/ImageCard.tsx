import css from './ImageCard.module.css';

interface ImageCardProps {
  cardData: Card;
  setOpenedCard: React.Dispatch<React.SetStateAction<Card | null>>;
}

export interface Card {
  id: number;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

const ImageCard: React.FC<ImageCardProps> = ({ cardData, setOpenedCard }) => {
  return (
    <div className={css.imgCard}>
      <img
        className={css.image}
        onClick={() => setOpenedCard(cardData)}
        src={cardData.urls.small}
        alt={cardData.alt_description}
      />
    </div>
  );
};

export default ImageCard;
