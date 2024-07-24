"use client"
import Image from 'next/image';

import React from 'react'
import Link from 'next/link'
import './product.css'
import { useDispatch } from "react-redux";
import { addToCart } from '../Redux/Action/actions';

const dummyProduct = {
  id: '1',
  name: 'Product 1',
  description: 'This is a detailed description of Product 1.',
  price: 100,
  image: '/images/product1.jpg',
};

export default function ProductDetail() {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const payload = {
      id: dummyProduct.id,
      name: dummyProduct.name,
      price: dummyProduct.price,
    };
    dispatch(addToCart(payload));
  };

  return (
    <div className="card-wrapper HEaddd bodyDetail">
      <div className="card">
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
            <div className="img-showcase">
    <div className="relative w-full h-[510px]">
      <Image
        src="https://www.ottoman-bed.co.uk/cdn/shop/files/Elegant-5000-Pocket-Spring-mattress-p3-750x510_46b2c5bb-256b-4732-a26c-70104e7cdb8a.jpg?v=1694702713&width=800"
        alt="product image"
        layout="fill"
        objectFit="contain"
        className="imgsss"
      />
    </div>
    <div className="relative w-full h-[510px]">
      <Image
        src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
        alt="product image"
        layout="fill"
        objectFit="contain"
        className="imgsss"
      />
    </div>
    <div className="relative w-full h-[510px]">
      <Image
        src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
        alt="product image"
        layout="fill"
        objectFit="contain"
        className="imgsss"
      />
    </div>
    <div className="relative w-full h-[510px]">
      <Image
        src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
        alt="product image"
        layout="fill"
        objectFit="contain"
        className="imgsss"
      />
    </div>
  </div>
  </div>

          </div>
          <div className="img-select">
            <div className="img-item">
              <a href="#" data-id="1"></a>
            </div>
            <div className="img-item"></div>
            <div className="img-item">
              <a href="#" data-id="3"></a>
            </div>
            <div className="img-item">
              <a href="#" data-id="4"></a>
            </div>
          </div>
        </div>
        <div className="product-content">
          <h2 className="product-title">Cool Gel 4000 Pocket Sprung Mattress</h2>
          <a href="#" className="product-link">Size: Small Single 2ft6</a>
          <div className="product-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span>4.7(21)</span>
          </div>
          <div className="product-price">
            <p className="new-price"><span>$249.00</span></p>
          </div>
          <div className="purchase-info">
            <input type="number" min="0" value="1"/>
            <button type="button" className="btn" onClick={handleAddToCart}>
              Add to Cart <i className="fas fa-shopping-cart"></i>
            </button>
            <button type="button" className="btn">Compare</button>
          </div>
          <div className="product-detail">
            <h2>About this item:</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
            <ul>
              <li>Color: <span>Black</span></li>
              <li>Available: <span>in stock</span></li>
              <li>Category: <span>Shoes</span></li>
              <li>Shipping Area: <span>All over the world</span></li>
              <li>Shipping Fee: <span>Free</span></li>
            </ul>
          </div>
          <div className="social-links">
            <p>Share At: </p>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}
