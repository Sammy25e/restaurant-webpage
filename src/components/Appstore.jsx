import bike from "../assets/assets/mobile_bike.gif";
import applestore from "../assets/assets/app_store.png";
import playstore from "../assets/assets/play_store.png";

const Appstore = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl w-full mx-auto px-15 md:px-10 flex flex-col md:flex-row items-start justify-between">
        <div>
          <h2 className="text-2xl text-center sm:text-2xl font-semibold text-gray-700">
            Food is Available for Andriod And lOS
          </h2>
          <div className=" flex flex-wrap justify-center sm:justify-start items-center">
            <a href="">
              <img
                src={playstore}
                alt="playstore"
                className=" max-w-[150px] sm: max-w-[120px] md:max-w-[200px] "
              />
            </a>
            <a href="">
              <img
                src={applestore}
                alt="applestore"
                className=" max-w-[150px] sm: max-w-[120px] md:max-w-[200px]"
              />
            </a>
          </div>
        </div>
        <div className=" w-[400px]  h-[220px]">
          <img src={bike} alt="" className=" w-full  h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Appstore;
