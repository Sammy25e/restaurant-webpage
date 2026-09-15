import { useEffect, useState } from "react";
import image from "../assets/assets/biryani.png";

// const data = [
//   { title: "iphone", description: "this is product description", image: image },
//   { title: "iphone", description: "this is product description", image: image },
//   { title: "iphone", description: "this is product description", image: image },
//   { title: "iphone", description: "this is product description", image: image },
//   { title: "iphone", description: "this is product description", image: image },
// ];

const Product = () => {
    const[products, setproducts] = useState([]);
const [loading, setloading] = useState (true);

useEffect(() => {

    try {
        const getproduct = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setproducts(data);
        };
        getproduct();
    } catch (error) {
        console.log(error);
    } finally {
        setloading(false);
    

    }
},[]);


  return (
    <div className=" flex items-center flex-col justify-center max-w-7xl mx-auto p-4">
      <h1 className="mb-10 text-2xl font-bold">All Product</h1>
      <div className="grid grid-cols-4 items-center gap-10">
        {products.slice(0, ).map((item, idx) => (
          <div
            key={idx}
            className=" w-[300px] h-[400px] bg-yellow-300 shadow-md rounded-md scale-105"
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-[200px] object-contain"
            />
            <div className="mt-auto py-3">
              <h1 className=" text-xl font-bold">{item.title} </h1>
              <p className=" text-sm line-climp-3">{item.description}  </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
