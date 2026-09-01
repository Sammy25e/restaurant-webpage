import Playstoreimg from "../assets/assets/Play_store.png";
import Appstoreimg from "../assets/assets/app_store.png";
import bike from "../assets/assets/mobile_bike.gif";
const Appstore = () => {
  return (
    <div className="w-full bg-gray-200 py-16">
      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 flex flex-col md:flex-row items-start justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-gray-700">Foodly is Available for Andriod And IOS</h2>
          <div>
            <a href="">
              <img
                src={Playstoreimg}
                alt="playstore"
                className=" max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </a>
            <a href="">
              <img
                src={Appstoreimg}
                alt="appstoreimg"
                className=" max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </a>
          </div>
        </div>
        <div className="w-[400px] h-[250px]">
            <img src={bike}  alt="" className="w-full h-full object-cover"     />
        </div>
      </div>
    </div>
  );
};

export default Appstore;
