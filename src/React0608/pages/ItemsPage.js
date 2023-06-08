import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../Components/Categories';

import ItemList from '../ItemList';

const ItemsPage = () => {
    const params = useParams();
    const category = params.category || "food";
    const language = params.language || "KR";
    return (
        <>
            <Categories/>
            <ItemList category={category} language={language}/>
        </>
    );
};

export default ItemsPage;