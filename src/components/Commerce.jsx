import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import img10 from "../assets/assets/img10.avif";
import { CiMenuBurger } from "react-icons/ci";
import { useEffect, useState } from "react";

[
  {
    id: 1,
    name: "Nike Shoes",
    price: 50000,
    image1: "/shoes.jpg",
  },
  {
    id: 2,
    name: "T-Shirt",
    price: 20000,
    image2: "/shirt.jpg",
  },
  {
    id: 3,
    name: "Watch",
    price: 30000,
    image3: "/watch.jpg",
  },
];

const Commerce = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className=" w-full py-16">
      <div>
        <div className=" flex gap-5 justify-between mx-auto px-20">
          <h2 className=" font-bold"> E-Commerce</h2>
          <ul className=" hidden md:flex gap-5">
            <li>Home</li>
            <li>Shop</li>
            <li>Categories</li>
            <li>Deals</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
          <div className="hidden md:flex  gap-3">
            <CiSearch />
            <IoPersonOutline />
            <CiHeart />
            <SlBasket />
          </div>
          <CiMenuBurger className="flex md:hidden" />
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 bg-gray-200 mt-10">
          <div className="p-8  ">
            <h1 className="  font-bold mt-10">Summer Collection</h1>
            <h3 className="text-4xl font-bold mt-4">Discover The Latest</h3>
            <h2 className="text-4xl font-bold">Trends 2026</h2>
            <p className=" w-100 mt-3">
              Explore Our New arrival pf summer collection with amazing of
              detail and discounts{" "}
            </p>
            <button className=" bg-black text-white rounded-full px-10 text-sm mt-3">
              Shop Now{" "}
            </button>
          </div>
          <div className="flex-col md:flex">
            <img src={img10} alt="" className="  " />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10 mt-10">
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>₦{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commerce;
