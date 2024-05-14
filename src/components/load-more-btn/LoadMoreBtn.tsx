import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onLoadMoreBtn: React.Dispatch<React.SetStateAction<number>>;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMoreBtn }) => {
  return (
    <button className={css.moreBtn} onClick={() => onLoadMoreBtn(prev => prev + 1)}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
