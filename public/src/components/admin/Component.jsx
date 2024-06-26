// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import apiURL from '../../../api';
// import Filter from '../sort-filter/Filter';
// import Sort from '../sort-filter/Sort';
// import { Link } from 'react-router-dom';

// export default function AllProducts() {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 9;
//   const [categories, setCategories] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const paginate = (products, currentPage, pageSize) => {
//     const startIndex = (currentPage - 1) * pageSize;
//     return products.slice(startIndex, startIndex + pageSize);
//   };

//   const paginatedProducts = paginate(products, currentPage, pageSize);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(`${apiURL}/categories`);
//         console.log('Fetched categories:', response.data);
//         setCategories(response.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const searchQuery = new URLSearchParams(location.search).get('name');
//         const response = await axios.get(`${apiURL}/items`, {
//           params: {
//             name: searchQuery,
//           },
//         });
//         console.log('Fetched products:', response.data);
//         const fetchedProducts = response.data;
//         setProducts(fetchedProducts);
//         setFilteredProducts(fetchedProducts);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, [location.search]);

//   const applyFilter = (categoryId) => {
//     if (categoryId) {
//       const filtered = products.filter(
//         (product) => product.categoryId === categoryId
//       );
//       setFilteredProducts(filtered);
//       setCurrentPage(1); // Reset pagination when applying filter
//     } else {
//       setFilteredProducts(products); // Reset to all products when no filter is selected
//       setCurrentPage(1); // Reset pagination when removing filter
//     }
//   };
//   // console.log({ products });

//   return (
//     <section className='pt-20 font-encode -z-1'>
//       <section className='w-full banner-container flex flex-col justify-center items-center px-4 '>
//         <img
//           src='https://images.pexels.com/photos/7500307/pexels-photo-7500307.jpeg'
//           className='w-full object-cover h-80 rounded-b-xl'
//         />
//         <div className='relative text-white -z-1'>
//           <h1 className='uppercase text-[7rem] absolute -translate-x-[45%] -translate-y-[140%] bg-transparent text-nowrap'>
//             all products
//           </h1>
//         </div>
//       </section>
//       <section className='container mx-auto flex flex-col'>
//         <div>
//           <h1 className=' mt-10 uppercase font-medium text-lg text-center '>
//             Products {`(${products.length})`}
//           </h1>
//           <Filter
//             products={products}
//             setProducts={setProducts}
//             applyFilter={applyFilter}
//             categories={categories}
//           />
//           <Sort products={products} setProducts={setProducts} />
//         </div>
//         <div className='grid grid-cols-3 gap-12 gap-y-12 mt-10 self-center'>
//           {Array.isArray(products) && products.length ? (
//             paginatedProducts.map((product) => (
//               <Link to={`/products/${product.id}`} key={product.id}>
//                 <div
//                   key={product.id}
//                   className='max-w-[350px] flex flex-col items-center text-center'
//                 >
//                   <img
//                     className='w-full h-auto'
//                     src={product.imageUrl}
//                     alt={product.name}
//                   />
//                   <h2 className='uppercase font-regular pt-1'>
//                     {product.name}
//                   </h2>
//                   <p className='font-thin'>${product.price}</p>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <p>No products available</p>
//           )}
//         </div>
//         {filteredProducts.length > pageSize && (
//           <div className='text-center my-12'>
//             <button
//               disabled={currentPage === 1}
//               onClick={() => setCurrentPage(currentPage - 1)}
//             >
//               &lt;
//             </button>
//             {currentPage}
//             <button
//               disabled={paginatedProducts.length < pageSize}
//               onClick={() => setCurrentPage(currentPage + 1)}
//             >
//               &gt;
//             </button>
//           </div>
//         )}
//       </section>
//     </section>
//   );
// }



// export default function Filter({ applyFilter, categories }) {
//   return (
//     <>
//       <div className='text-end tracking-wide flex gap-4 justify-end'>
//         Filter By:
//         <select onChange={(e) => applyFilter(e.target.value)}>
//           <option value=''></option>
//           {categories.map((category) => (
//             <option value={category.id} key={category.id}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </div>
//     </>
//   );
// }