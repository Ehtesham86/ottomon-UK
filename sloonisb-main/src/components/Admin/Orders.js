// import React,{useState,useEffect} from 'react'
// import axios from "axios";
// const Orders = () => {
//   const [checkoutData, setcheckout] = useState("");
//   const [data, setdata] = useState("");
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/checkout")
//       .then((res) => setcheckout(res.data))
//       .catch((err) => console.log(err));
//   }, []);
//   return (








//     <div>
//       {/* <h5>AddProduct</h5> */}

//       {/* <div className="col-md-7 col-lg-8"> */}
//         <h4 className="mb-3">Billing address</h4>
//         <form onSubmit={handleSubmit} className="needs-validation" novalidate>
//           {/* <MultiImages/><input type='file'   onChange={handleChange}
//               // onChange={(e) => setFile(e.target.files[0])}
//               /><img src={file} /> */}
//           <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//           <div className="row g-3">
//             <div className="col-sm-6">
//               <label for="name" className="form-label">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 placeholder=""
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//               <div className="invalid-feedback">Valid first name is required.</div>
//             </div>


// <div className="col-sm-6">
//               <label for="price" className="form-label">
//               Description
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//               />
//               <div className="invalid-feedback">Valid description is required.</div>
//             </div>



//             <div className="col-sm-6">
//               <label for="price" className="form-label">
//                 Price
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="price"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 required
//               />
//               <div className="invalid-feedback">Valid last name is required.</div>
//             </div>

//             <div className="col-12">
//               <label for="Phone" className="form-label">
//                 countInStock
//               </label>
//               <div className="input-group has-validation">
//                 <span className="input-group-text"></span>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="countInStock"
//                   value={countInStock}
//                   onChange={(e) => setCountInStock(e.target.value)}
//                   required
//                 />
//                 <div className="invalid-feedback">Your Phone is required.</div>
//               </div>
//             </div>

//             <div className="col-12">
//               <label for="email" className="form-label">
//                 type
//               </label>
//               <input
//                 type="type"
//                 className="form-control"
//                 value={type}
//                 onChange={(e) => setType(e.target.value)}
//               />
//               <div className="invalid-feedback">Type</div>
//             </div>

           
//           </div>

//           <hr className="my-4" />

//           <button className="w-100 btn btn-dark btn-lg" type="submit">
//             Continue to checkout
//           </button>
//         </form>
//       </div>
// </div>






//     <div>Orderpage
//      {/* {console.log(">>>>>>>checkout",checkoutData.checkoutData)} */}
//    {/* {checkoutData.checkoutData.map((data) => {
//             return (
//       <div>{data.firstName}</div>)
//  })}  */}
//     </div>
//   )
// }

// export default Orders