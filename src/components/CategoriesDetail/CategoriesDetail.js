import React, { useContext } from 'react';
import { CategoryContext } from "../../App";

const CategoriesDetail = () => {
    const category = useContext(CategoryContext);
    
    return (
        <div>
            <h4>CategoriesDetail</h4>
            <h6>Selected category: {category} </h6>
        </div>
    );
};

export default CategoriesDetail;