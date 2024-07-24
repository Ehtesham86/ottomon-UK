import React, { useState } from "react";
import MultiImages from "../MultiImages/MultiImages";
const AddService = () => {
  const [name, setName] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [photo, setPhoto] = useState("");
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var formdata = new FormData();
      formdata.append("photo", file);
      formdata.append("name", name);
      formdata.append("discountPercent", discountPercent);
      formdata.append("price", price);
      formdata.append("countInStock", countInStock);
      formdata.append("description", description);
      formdata.append("type", type);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("http://localhost:5000/service", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } catch (error) {}
  };
  return (<>


<h2 className="text-center">Add Service Form</h2>

<div className="container ">
  <form onSubmit={handleSubmit}  className="needs-validation" novalidate>
  <div className="row">
    <div className="col-25">
      <label for="fname">Name</label>
    </div>
    <div className="col-75">
      <input type="text" value={name}
                onChange={(e) => setName(e.target.value)}
                required  name="name" placeholder="Product name.."/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="lname">CountInStock</label>
    </div>
    <div className="col-75">
      <input type="number"  id="countInStock"
                  value={countInStock}
                  onChange={(e) => setCountInStock(e.target.value)}
                  required placeholder="countInStock.."/>
    </div>
  </div>

  <div className="row">
    <div className="col-25">
      <label for="lname">Price</label>
    </div>
    <div className="col-75">
      <input type="number"  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required placeholder="Price.."/>
    </div>
  </div>


  <div className="row">
    <div className="col-25">
      <label for="discountPercent">discountPercent</label>
    </div>
    <div className="col-75">
      <input type="number"  id="discountPercent"
                  value={discountPercent}
                  onChange={(e) => setDiscountPercent(e.target.value)}
                  required placeholder="discountPercent.."/>
    </div>
  </div>


  <div className="row">
    <div className="col-25">
      <label for="lname">Type</label>
    </div>
    <div className="col-75">
      <input  type="type"
                className="form-control"
                value={type}
                onChange={(e) => setType(e.target.value)} placeholder="Type is product"/>
    </div>
  </div>

  <div className="row">
    <div className="col-25">
      <label for="country">Image</label>
    </div>
    <div className="col-75">
    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="subject">Description</label>
    </div>
    <div className="col-75">
      <textarea  id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
    </div>
  </div>
  <br/>
  <div className="row">
    <input type="submit" value="Submit"/>
  </div>
  </form>
</div>








 </> );
};

export default AddService;
