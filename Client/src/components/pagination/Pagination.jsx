import { useSelector } from 'react-redux';


export default function Pagination(props) {
    const page = useSelector((state) => state.currPage);
    const { previousPage, nextPage, maxPages } = props;


    return (
        <div>
            <p><b>Page {page}/{maxPages}</b></p>
            <button name="previous" onClick={previousPage}>Previous</button>
            <button name="next" onClick={nextPage}>Next</button>
        </div>
    );
};