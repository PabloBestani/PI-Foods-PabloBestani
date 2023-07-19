import { useSelector } from 'react-redux';


export default function Pagination(props) {
    const page = useSelector((state) => state.currPage);
    const { previousPage, nextPage, maxPages } = props;


    return (
        <div>
            <button name="previous" onClick={previousPage}>Previous</button>
            <span>{page}/{maxPages}</span>
            <button name="next" onClick={nextPage}>Next</button>
        </div>
    );
};