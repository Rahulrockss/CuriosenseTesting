import React from "react";
import ProductCard from "../Components/ProductCard";
import './Product.css'
import Product1 from "../Images/Products/Product1.jpeg";
import Product2 from "../Images/Products/Product2.jpeg";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Product = () => {
  return (
    <>
    <NavBar/>
    <div className="product-sec">
      <div className="title">Our Products</div>
      <div className="productSec">
        <ProductCard
          name="CurioBook"
          bio="Unlock the world of kindergarten basics with our patented device designed for enjoyable learning experiences. Assess learning milestones and identify potential neurological disorders seamlessly."
          price="₹ 1999/-"
          imageUrl={Product1}
          buttonSec="Buy Now"
        />
        <ProductCard
          name="CurioFit"
          bio="CurioFit develops physical games for children, designed collaboratively by child psychologists, developmental pediatricians, and nursery teachers. These activities aim for the holistic development of children, fostering physical, cognitive, and social growth"
          imageUrl={Product2}
          buttonSec="GAME CREATOR'S ACCOUNT"
        />
      </div>
    </div>
    <Footer/>
    
    </>
  );
};

export default Product;
