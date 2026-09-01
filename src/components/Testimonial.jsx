import image from "../assets/assets/image.png";

const testimonialdata = [
  {
    id: 1,
    name: "Samuel",
    text: "lorem ipsum dolor sit amet consectetur adipiscing elit, Eaque reicidents inventore ex alias quis magni at optio",
    image: "avatar",
  },
  {
    id: 2,
    name: "John Doe",
    text: "lorem ipsum dolor sit amet consectetur adipiscing elit, Eaque reicidents inventore ex alias quis magni at optio",
    image: "avatar",
  },
  {
    id: 3,
    name: "Smith",
    text: "lorem ipsum dolor sit amet consectetur adipiscing elit, Eaque reicidents inventore ex alias quis magni at optio",
    image: "avatar",
  },
];

const Testimonial = () => {
  return (
    <div id="testimonial" className="w-full py-16">
      <div className=" max-w-7xl w-full mx-auto px-4 md:px-70" >
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <h6 className=" text-sm bg-clip-text text-transparent bg-amber-400">Testimonial</h6>
          <h3 className=" text-3xl font-bold">Testimonial</h3>
          <p className=" text-xs text-gray-400">
            orem ipsum dolor sit amet consectutur, adipiscing elit, ullam, ab
            explicabo. Numquam blandittis totam officills nemo nihil maxime
            voluptates prasentatium accusamus architecto incident, cumque
            delectus enim reiciendis, placeat omnis ipsa
          </p>
        </div>
        <div className="flex-col md:flex-row items-center justify-between">
          {testimonialdata.map(({ id, name, text, img }) => {
            return (
              <div key={id} className="my-6">
                <div className="flex flex-col justify-center items-center shadow-lg p-4 rounded-xl bg-gray-200 relative">
                  <img
                    src={image}
                    alt=""
                    className="w-10 h-10 object-cover rounded-full block mx-auto"
                  />
                  <p className=" text-gray-500 text-sm"> {text}</p>
                  <h1 className=" text-xl font-bold"> {name}</h1>
                  <p className=" text-black/20  text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
