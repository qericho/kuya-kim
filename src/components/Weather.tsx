import { MdOutlineWaterDrop } from "react-icons/md";
import { FiWind } from "react-icons/fi";
import { FaTemperatureEmpty } from "react-icons/fa6";

const Weather: React.FC = () => {
  return (
    <div className="text-white w-full">
      <div className="w-full text-center my-5 space-y-2">
        <h4 className="text-4xl font-bold">Windy</h4>
        <h1 className="text-5xl font-bold">27. C F</h1>
      </div>
      <div className="w-full flex items-center justify-between gap-10 md:mt-0 mt-10 px-10 md:px-5">
        <div className="flex items-center flex-col">
          <span className="text-2xl">
            <MdOutlineWaterDrop />
          </span>
          <p>Humidity</p>
          <p>52%</p>
        </div>
        <div className="flex items-center flex-col">
          <span className="text-2xl">
            <FiWind />
          </span>
          <p>Wind</p>
          <p>18km/h</p>
        </div>
        <div className="flex items-center flex-col">
          <span className="text-2xl">
            <FaTemperatureEmpty />
          </span>
          <p>Feels like</p>
          <p>24</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
