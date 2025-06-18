import css from './LoadMoreBtn.module.css'


type Props = {
    onClick: () => void;
}

 const LoadMoreBtn: React.FC<Props> = ({onClick})  => {

    return (
        <>
            <button type="button" onClick={onClick} className={css.button}>Load More</button>
        </>
    );
};


export default LoadMoreBtn;

