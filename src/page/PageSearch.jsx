import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "data.json";


import Search from "main/Search/Search";
import Catalog from "main/Catalog/Catalog";

const PageSearch = () => {
    const [filmList, setFilmList] = useState(data.filmList);
    const [search, setSearch] = useState('')

    const fiterSearch = (search = '') => {
        const next = filmList.filterSearch(item => search ?
            item.name.toLowerCase().includes(search.toLowerCase())
            || item.year.toLowerCase().includes(search.toLowerCase())
            || item.categoryName.toLowerCase().includes(search.toLowerCase())
            || item.discription.toLowerCase().includes(search.toLowerCase())
            : true
        )

        return next
    }

    const searchChange = (search) => {
        const nextSearch = search
        const nextFilmList = fiterSearch( nextSearch)

        setSearch(nextSearch)
        setFilmList(nextFilmList)
    }

    return
    <>
        <Search />
        {/* <Catalog
            items={filmList.filter()}
            type={ROLL_TYPE.HORIZONTAL}
            title='Новинки'
        /> */}
    </>;
};

export default PageSearch;
