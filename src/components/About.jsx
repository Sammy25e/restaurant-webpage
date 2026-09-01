import food1 from "../assets/assets/biryani2.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const About = () => {
  return (
    <div id="about" className=" w-full py-16 -mt-50">
      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <img src={food1} alt="" className="w-100  h-auto object-cover" />
        <div className="max-w-[600px] w-full space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Lorem ipsum dolor</h2>
          <p className="text-xs md:text-sm text-gray-500 tracking-wide leading-5">
            Lorem ipsum dolor sit, amet consectetur
          </p>
          <p className="text-xs md:text-sm text-gray-500 tracking-wide leading-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ab
            sed,expercitation minima aliquid eliquid eliquid distiction? fugit
            repudiandgae Numquam hic quo rescusandae.Execepturi totam ad nam
            velit quaisi quidem aspernatur
          </p>
          <div className="flex gap-6">
            <div>
              <GrSecure className="text-4xl h-20  w-20 shadow-sm p-5  rounded-full bg-violet-100" />
            </div>
            <div>
              <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100" />
            </div>
            <div>
              <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100" />
            </div>
          </div>
          <button className="px-4 py-2.5 text-white bg-amber-400 rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
