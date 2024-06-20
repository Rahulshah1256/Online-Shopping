// import { useState, useEffect } from "react";
// import axios from "axios";

// const AddProductForm = () => {
//   const [categories, setCategories] = useState([]);

//   const retrieveAllCategories = async () => {
//     const response = await axios.get("http://localhost:8080/api/category/all");
//     return response.data;
//   };

//   useEffect(() => {
//     const getAllCategories = async () => {
//       const allCategories = await retrieveAllCategories();
//       if (allCategories) {
//         setCategories(allCategories);
//       }
//     };

//     getAllCategories();
//   }, []);

//   const [selectedPhoto, setSelectedPhoto] = useState(null);
//   const [product, setProduct] = useState({
//     title: "",
//     description: "",
//     price: "",
//     quantity: "",
//     categoryId: "",
//   });

//   const handleInput = (e) => {
//     setProduct({ ...product, [e.target.name]: e.target.value });
//   };

//   const saveProduct = () => {
//     const formData = new FormData();
//     formData.append("image", selectedPhoto);
//     formData.append("title", product.title);
//     formData.append("description", product.description);
//     formData.append("price", product.price);
//     formData.append("quantity", product.quantity);
//     formData.append("categoryId", product.categoryId);

//     axios
//       .post("http://localhost:8080/api/product/add", formData)
//       .then((resp) => {
//         let result = resp.data.data;
//         alert("Product saved successfully");
//       })
//       .catch((error) => {
//         console.log("Error", error);
//         alert("Error saving product");
//       });
//   };

//   return (
//     <div>
//       <div class="mt-2 d-flex aligns-items-center justify-content-center">
//         <div
//           class="card form-card border-color custom-bg"
//           style={{ width: "25rem" }}
//         >
//           <div className="card-header bg-color custom-bg-text text-center">
//             <h5 class="card-title">Add Product</h5>
//           </div>
//           <div class="card-body text-color">
//             <form>
//               <div class="mb-3">
//                 <label for="title" class="form-label">
//                   <b>Product Title</b>
//                 </label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="title"
//                   name="title"
//                   onChange={handleInput}
//                   value={product.title}
//                 />
//               </div>
//               <div class="mb-3">
//                 <label for="description" class="form-label">
//                   <b>Product Description</b>
//                 </label>
//                 <textarea
//                   class="form-control"
//                   id="description"
//                   name="description"
//                   rows="3"
//                   onChange={handleInput}
//                   value={product.description}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">
//                   <b>Category</b>
//                 </label>

//                 <select
//                   name="categoryId"
//                   onChange={handleInput}
//                   className="form-control"
//                 >
//                   <option value="">Select Category</option>

//                   {categories.map((category) => {
//                     return (
//                       <option value={category.id}> {category.title} </option>
//                     );
//                   })}
//                 </select>
//               </div>

//               <div class="mb-3 mt-1">
//                 <label for="quantity" class="form-label">
//                   <b>Product Quantity</b>
//                 </label>
//                 <input
//                   type="number"
//                   class="form-control"
//                   id="quantity"
//                   name="quantity"
//                   onChange={handleInput}
//                   value={product.quantity}
//                 />
//               </div>

//               <div class="mb-3">
//                 <label for="price" class="form-label">
//                   <b>Product Price</b>
//                 </label>
//                 <input
//                   type="number"
//                   class="form-control"
//                   id="price"
//                   name="price"
//                   onChange={handleInput}
//                   value={product.price}
//                 />
//               </div>

//               <div class="mb-3">
//                 <label for="formFile" class="form-label">
//                   <b> Select Product Image</b>
//                 </label>
//                 <input
//                   class="form-control"
//                   type="file"
//                   id="formFile"
//                   name="photo"
//                   value={product.photo}
//                   onChange={(e) => setSelectedPhoto(e.target.files[0])}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 class="btn bg-color custom-bg-text"
//                 onClick={saveProduct}
//               >
//                 Add Product
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProductForm;



import { useState, useEffect } from "react";
import axios from "axios";

const AddProductForm = () => {
  const [categories, setCategories] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    quantity: "",
    categoryId: "",
  });

  useEffect(() => {
    const getAllCategories = async () => {
      const allCategories = await retrieveAllCategories();
      if (allCategories) {
        setCategories(allCategories);
      }
    };

    getAllCategories();
  }, []);

  const retrieveAllCategories = async () => {
    const response = await axios.get("http://localhost:8080/api/category/all");
    return response.data;
  };

  const handleInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    setSelectedPhoto(e.target.files[0]);
  };

  const saveProduct = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    const formData = new FormData();
    formData.append("image", selectedPhoto);
    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("quantity", product.quantity);
    formData.append("categoryId", product.categoryId);

    try {
      const resp = await axios.post("http://localhost:8080/api/product/add", formData);
      alert("Product saved successfully");
    } catch (error) {
      console.log("Error", error);
      alert("Error saving product");
    }
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div className="card form-card border-color custom-bg" style={{ width: "25rem" }}>
          <div className="card-header bg-color custom-bg-text text-center">
            <h5 className="card-title">Add Product</h5>
          </div>
          <div className="card-body text-color">
            <form onSubmit={saveProduct}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  <b>Product Title</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  onChange={handleInput}
                  value={product.title}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  <b>Product Description</b>
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="3"
                  onChange={handleInput}
                  value={product.description}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  <b>Category</b>
                </label>
                <select
                  name="categoryId"
                  onChange={handleInput}
                  className="form-control"
                  value={product.categoryId}
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3 mt-1">
                <label htmlFor="quantity" className="form-label">
                  <b>Product Quantity</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  name="quantity"
                  onChange={handleInput}
                  value={product.quantity}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  <b>Product Price</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  onChange={handleInput}
                  value={product.price}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  <b>Select Product Image</b>
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  name="photo"
                  onChange={handlePhotoChange}
                />
                {selectedPhoto && (
                  <div className="mt-3">
                    <img
                      src={URL.createObjectURL(selectedPhoto)}
                      alt="Product Preview"
                      className="img-thumbnail"
                      style={{ maxHeight: "200px" }}
                    />
                  </div>
                )}
              </div>

              <button type="submit" className="btn bg-color custom-bg-text">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;

