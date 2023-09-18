import React from "react";
import './FeatureCategory.css'
import './Category.css'
import VastraCat from '../images/VastraCatagorySmall.jpg'
import VastraCat2 from '../images/VastraCategory2Small.png'
import VastraCat3 from '../images/ShangarSmallCategory.png'
import VastraCat4 from '../images/ShringarSmallCategory.jpg'
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Shri Mastak",
    image: VastraCat,
    itemCount: 29,
    color: "#fff ",
    

  },
  {
    name: "Shri Karna",
    image: VastraCat4,
    itemCount: 29,
    color: "#fff ",
  },
  {
    name: "Shishful",
    image: VastraCat3,
    itemCount: 29,
    color: "#fff ",
    
  },
  {
    name: "Vastra",
    image: VastraCat2,
    itemCount: 29,
    color: "#fff ",
  },
  {
    name: "Shringar",
    image: VastraCat4,
    itemCount: 29,
    color: "#fff ",
  },
  {
    name: "Shangar",
    image: VastraCat3,
    itemCount: 29,
    color: "#fff ",
  },
  {
    name: "Mukhravind",
    image: VastraCat,
    itemCount: 29,
    color: "#fff ",
    

  },
  // {
  //   name: "Shringar",
  //   image: VastraCat4,
  //   itemCount: 29,
  //   color: "#F2FCE4 ",
  // },
  // {
  //   name: "Shangar",
  //   image: VastraCat3,
  //   itemCount: 29,
  //   color: "#ECFFEC ",
    
  // },
  // {
  //   name: "Shangar",
  //   image: VastraCat3,
  //   itemCount: 29,
  //   color: "#ECFFEC ",
    
  // },
  // {
  //   name: "Shangar",
  //   image: VastraCat3,
  //   itemCount: 29,
  //   color: "#ECFFEC ",
    
  // },
  // {
  //   name: "Shangar",
  //   image: VastraCat3,
  //   itemCount: 29,
  //   color: "#ECFFEC ",
    
  // },
  
  // Add more categories here...
];

const CategoryCard = ({ name, image, itemCount,color, }) => (
  <div className="col-12  col-md-6 col-lg-3  category col-lg-1-5">
    <Link to='/product-list'>
    <div className="card" style={{ backgroundColor:color }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <p className="card-text mt-2 d-block">
          <span className="fw-bold "><Link to='/product-list'>{name}</Link></span>
          <div className="mt-1">  {itemCount} Items</div>
        </p>
      </div>
    </div>
    </Link>
   
  </div>
);

const Category = ({background}) => {
  const inlineStyle = {
    padding: '20px',
    paddingTop:'1px',
    marginTop:'-50px',
    background: background || '#f2fce4', // Use the prop value if provided, or red as a default
  };
  return (
    <div style={inlineStyle}>
      <div className="container">
            <h1 className="fs-1 mt-5 mb-4 fw-bold text-start">Our Category</h1>
        <div className="row">
          
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              name={category.name}
              image={category.image}
              itemCount={category.itemCount}
              color={category.color}
         
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
