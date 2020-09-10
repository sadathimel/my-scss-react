import React, { useContext, useState, useEffect } from 'react';
import CategoriesDetail from '../CategoriesDetail/CategoriesDetail';
import { CategoryContext } from '../../App';


const allProducts = [
  { name: "Lenovo", category: "laptop" },
  { name: "Asus", category: "laptop" },
  { name: "Dell", category: "laptop" },
  { name: "Samsung", category: "mobile" },
  { name: "Nokia", category: "mobile" },
  { name: "Apple", category: "mobile" },
  { name: "Canon", category: "camera" },
  { name: "Nikkon", category: "camera" },
  { name: "Sony", category: "camera" },
];
const Categories = () => {
    const [category] = useContext(CategoryContext)
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const matchProducts = allProducts.filter(pd => pd.category.toLowerCase() ===  category.toLowerCase());
        setProducts(matchProducts)
    },[category])
    
    return (
      <div>
        <h2>Select Your Categories:{category}</h2>
        {products.map((pd) => (
          <CategoriesDetail product={pd}></CategoriesDetail>
        ))}
      </div>
    );
};

export default Categories;