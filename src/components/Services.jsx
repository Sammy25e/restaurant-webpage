import { PencilSparklesIcon } from "lucide-react";
import food1 from "../assets/assets/biryani2.png";
import food2 from "../assets/assets/biryani2.png";
import food3 from "../assets/assets/biryani2.png";
const data = [
  {
    image: food1,
    title: "biryani",
    description:
      "lorem ipsum dolor sit amet ipsum dolor sit amettipsum dolor sit amet ipsum dolor sit ",
  },
  {
    image: food2,
    title: "chicken kari",
    description:
      "lorem ipsum dolor sit amet ipsum dolor sit amettipsum dolor sit amet ipsum dolor sit ",
  },
  {
    image: food3,
    title: "cold Cofee",
    description:
      "lorem ipsum dolor sit amet ipsum dolor sit amettipsum dolor sit amet ipsum dolor sit ",
  },
];

const Services = () => {
  return (
    <div id="services" className="w full py-16">
      <div className="max-w-7xl w-full px-4 md:px-6 mx-auto">
        <div className=" text-center mb-20 max-w-[400px] mx-auto">
          <h6 className="text-sm bg-clip-text text-transparent bg-amber-300">
            Our Services
          </h6>
          <h3 className=" text-3xl font-bold">Services</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            adipiscicing elit, ullam, ab explicabo. Numquam blandittis totam
            officials nemo nihil maxxime voluptates praesenttium accusamus
            architecto incident. cumque delectus enim reiciendis, placeat omnis
            ipsa
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-0 items-center justify-between py-15"> 
          {data.map((items, index) => (
            <div key={index} className=" group w-80 p-6 bg-white ">
              <img src={items.image} alt="" className="w-60 sm:gap-5-mt-25" />
              <h2 className=" text-xl sm:gap-5 font-bold">{items.title} </h2>
              <p className=" text-gray-500   text-sm group-hover:text-amber-400">
                {items.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
