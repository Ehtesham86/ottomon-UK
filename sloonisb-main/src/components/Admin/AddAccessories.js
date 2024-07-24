import React, { useState } from "react";
import MultiImages from "../MultiImages/MultiImages";
const AddAccessories = () => {
  
  const [name, setName] = useState('')
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [Shopby, setShopby] = useState("");
  const [type, settype] = useState("");
  const [Discount, setDiscount] = useState("");
  const [actualPrice, setactualPrice] = useState("");
  
  const [photo, setPhoto] = useState("");
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {

      var formdata = new FormData();
      formdata.append("name", "Headboards");
      formdata.append("price", '7');
      formdata.append("description", "This is the ing `Headboards` mattresses description");
      formdata.append("countInStock", '83');
      formdata.append("Shopby", "");
      formdata.append("type","Headboards");
      formdata.append("Discount",'20');
      formdata.append("actualPrice", '10');
      formdata.append("photo", file);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("http://localhost:5000/accessories", requestOptions)
        .then((response) => {
          response.text()
          window.alert("Accrssories add successfully")
        })
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } catch (error) { }
  };
  return (<>


    <h2 className="text-center">Add Accessories Form</h2>

    <div className="container ">
      <form onSubmit={handleSubmit} className="needs-validation" novalidate>
      <div className="row">
          <div className="col-25">
            <label for="fname">Name</label>
          </div>
          <div className="col-75">
            <input type="text" value={name}
              onChange={(e) => setName(e.target.value)}
              required name="name" placeholder="Product Name.." />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="fname">Discount</label>
          </div>
          <div className="col-75">
            <input type="text" value={Discount}
              onChange={(e) => setDiscount(e.target.value)}
              required name="name" placeholder="Product Discount.." />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="lname">CountInStock</label>
          </div>
          <div className="col-75">
            <input type="number" id="countInStock"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
              required placeholder="countInStock.." />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="lname">Shopby</label>
          </div>
          <div className="col-75">
            <input type="text" id="Shopby"
              value={Shopby}
              onChange={(e) => setShopby(e.target.value)}
              required placeholder="Shopby.." />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="lname">Typeby</label>
          </div>
          <div className="col-75">
            <input type="text" id="type"
              value={type}
              onChange={(e) => settype(e.target.value)}
              required placeholder="Shopby.." />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="lname">Price</label>
          </div>
          <div className="col-75">
            <input type="number" id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required placeholder="Price.." />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="lname">actualPrice</label>
          </div>
          <div className="col-75">
            <input type="number" id="actualPrice"
              value={actualPrice}
              onChange={(e) => setactualPrice(e.target.value)}
              required placeholder="Price.." />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="subject">Description</label>
          </div>
          <div className="col-75">
            <textarea id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-25">
            <label for="country">Image</label>
          </div>
          <div className="col-75">
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>








  </>);
};

export default AddAccessories;
