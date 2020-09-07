import React, { useContext } from 'react';
import CategoriesDetail from '../CategoriesDetail/CategoriesDetail';
import { CategoryContext } from '../../App';

const Categories = () => {
    const category = useContext(CategoryContext)
    
    return (
        <div>
            <h2>Categories:{category}</h2>
            <CategoriesDetail ></CategoriesDetail>
        </div>
    );
};

export default Categories;