import background from "../assets/assets/vector3.png";
import sideimg from "../assets/assets/biryani.png";

const Herosection = () => {
  return (
    <div className="  relative bg-gray-100 w-full min-h-[520px]">
      <div className=" w-full absolute inset-0">
        <img src={background} w alt="" className="w-full h-full object-cover" />
      </div>

      <div className=" relative max-w-300 h-full mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-4 md:py-8">
        <div className=" max-w-lg text-center md:text-left">
          <h2 className="text-[35px] md:text-[40px] mt-25 leading-13 font-bold mb-20">
            Welcome to the <br /> Foodie zone
          </h2>
          <p className=" text-xs md:text-sm mb-4 -mt-15">
            lorem ipsum dolor sit amet consectetur adipiscing elit.vitae itaque
            deserrunt nihill, conpididate dolore hicl temporibus explicabo,
            quis, minima tempora,nisi omnis labourioam provident eveniet
            dignisgms sit eum quaisi incidunt
          </p>
          <button className="px-4 py-1.5 text-white bg-amber-400 rounded-full">
            order now
          </button>
        </div>
        <div className="min-w-[200px] md:max-w-3 h-auto mr-60 mt-10">
          <img src={sideimg} alt="" className="w-full object-cover h-full" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
