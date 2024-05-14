import { Bars } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader: () => JSX.Element = () => {
  return (
    <div className={css.loader}>
      <Bars
        height="30"
        width="30"
        color="#4114d4"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
