import React from 'react';
import CategoriesDetail from '../CategoriesDetail/CategoriesDetail';

const Categories = (props) => {
    const {count} = props
    return (
        <div>
            <h2>Categories:{count}</h2>
            <CategoriesDetail count= {count}></CategoriesDetail>
        </div>
    );
};

export default Categories;