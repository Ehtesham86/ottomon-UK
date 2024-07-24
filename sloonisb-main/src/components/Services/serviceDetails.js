import { useNavigate } from "react-router-dom";
import "./Services.css"
import { useAuth } from "../auth";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import { Link, useParams } from "react-router-dom";
import { addToCart,Removecart } from "./../../Redux/Action/actions";
import { useDispatch, useSelector } from "react-redux";
const ServiceDetails = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loadData, setLoadData] = useState(false);
  const [isLoad, setIsLoad] = useState(true);

  //  product.productData.find(Data => Data._id === productId)
  const [Service, setService] = useState([]);
  const [thisProduct, setthisProduct] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/service")
      .then((res) => setService(res.data.serviceData))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const filter = Service && Service.find((s) => s._id == id);
    console.log("llll.>", filter,Service);
    setthisProduct(filter)
  }, [Service]);

  return (
    <>


<div className="container">
    <div className="card">
        <div className="container-fliud">
            <div className="wrapper row">
                <div className="preview col-md-6">
                    
                    <div className="preview-pic tab-content">
                      <div className="tab-pane active" id="pic-1"><img src={thisProduct?.imageUrl}/></div>
                      <div className="tab-pane" id="pic-2"><img src={thisProduct?.imageUrl} /></div>
                    
                    </div>
                    <ul className="preview-thumbnail nav nav-tabs">
                      <li><a data-target="#pic-5" data-toggle="tab"><img src={thisProduct?.imageUrl} /></a></li>
                    </ul>
                    
                </div>
                <div className="details col-md-6">
                    <h3 className="product-title">{thisProduct?.name}</h3>
                    <div className="rating">
                        <div className="stars">
                        <span className="bog animated fadeInDown">EXCLUSIVE</span>
                          
                        </div>
                      
                    </div>
                    <p className="product-description">{thisProduct?.description}</p>
                    <h4 className="price">current price: <span className="text-capitalize">Rs.{thisProduct?.price}</span></h4>
                    <p className="vote"><strong>91%</strong> of buyers enjoyed our products! <strong>(87 votes)</strong></p>
                    <h5 className="sizes">Now:
                        <span className="size" data-toggle="tooltip" title="small">B</span>
                        <span className="size" data-toggle="tooltip" title="medium">U</span>
                        <span className="size" data-toggle="tooltip" title="large">Y</span>
                        <span className="size" data-toggle="tooltip" title="xtra large">IT</span>
                    </h5>
                    <h5 className="colors">Islamabad:
                 
                        {/* <span className="color green"></span>
                        <span className="color blue"></span> */}
                    </h5>
                    <div className="action">
                        <button className="add-to-cart btn btn-default" 
                         onClick={() => {
                            dispatch(addToCart(thisProduct));
                          }} 
                          type="button">add to cart</button>
                        <button className="like btn btn-default" type="button">    
       
          <Link className="cart-btn az" to="/proceed"><i className="cart-icon ion-bag"></i>Proceed to Checkout</Link>
        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>












       {/* <div className="rapper">
    <div className="uter">
      <div className="cntent animated fadeInLeft">
        <span className="bog animated fadeInDown">EXCLUSIVE</span>
        <h1 className="head1">{thisProduct?.name}<br/> For Your beauty </h1>
        <p className="pa">{thisProduct?.description}</p>
        
        <div className="buton">
          <Link to="#">Price:Rs{thisProduct?.price}</Link><Link className="cart-btn az" to="/serviceForm"><i className="cart-icon ion-bag"></i>Proceed to Checkout</Link>
        </div>
        
      </div>
      <img src={thisProduct?.imageUrl} alt="aa" width="300px" className="im animated fadeInRight"/>
    </div>
    <p className="footer pa">Based on FastLanSalon  - Products Market</p>
  </div> */}
    </>
  );
};


export { ServiceDetails };


