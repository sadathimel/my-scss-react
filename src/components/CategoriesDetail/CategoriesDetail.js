import React, { useContext } from 'react';
import { CategoryContext } from "../../App";

const CategoriesDetail = (props) => {
    const {name} = props.product
    
    return (
        <div>
            <h4>Categories Detail</h4>
            <h6>Selected Product: {name} </h6>
        </div>
    );
};

export default CategoriesDetail;