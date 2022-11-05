import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const { products, totalProductsCount } = useLoaderData();
  // States
  const [cart, setCart] = useState([]);
  const [showPageSize, setShowPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = Math.ceil(totalProductsCount / showPageSize);
  // Get data from local storage
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    // Looping through id from products and updating quantity from localStorage  to cart object
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  // event Handlers
  const addToCardHandler = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct._id);
  };
  return (
    <div className="shop-container container">
      <div>
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              addToCardHandler={addToCardHandler}
            />
          ))}
        </div>

        <nav
          aria-label="Page navigation example"
          className="bg-transparent text-center my-10"
        >
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            {[...Array(pages).keys()].map((elem) => {
              return (
                <li>
                  <Link
                    to="/"
                    onClick={() => setCurrentPage(elem + 1)}
                    className={`${
                      elem + 1 === currentPage && "bg-blue-400 text-white"
                    } py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                  >
                    {elem + 1}
                  </Link>
                </li>
              );
            })}

            <li>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            <li>
              <select onChange={(event) => setShowPageSize(event.target.value)}>
                <option value="5">5</option>
                <option value="10" selected>
                  10
                </option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>

      <div className="cart-container">
        <Cart cart={cart} setCart={setCart}>
          <div className="btn-group">
            {/* <button className="clear-btn" onClick={clearCart}>
              Clear Cart
              <FontAwesomeIcon
                icon={faTrash}
                shake
                style={{ color: "white", marginLeft: "5px" }}
              />
            </button> */}
            <Link to="/orders" className="review-btn">
              Review Order
              <FontAwesomeIcon
                icon={faArrowRight}
                beatFade
                style={{ color: "white", marginLeft: "5px" }}
              />
            </Link>
          </div>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
