import Bg_Img from "../assets/img/bg-image.jpg";
import WeatherForecast from "./Forecast";
import Location from "./Location";
import Status from "./Status";
import Today from "./Today";
import Weather from "./Weather";

const Container: React.FC = () => {
  return (
    <div
      className="w-full md:w-80 h-screen px-1 md:h-150 mx-auto my-0 md:my-20 object-cover bg-center bg-no-repeat relative z-1"
      style={{ backgroundImage: `url(${Bg_Img})` }}
    >
      {/* Overlay */}
      <div className="bg-black/60 absolute inset-0 z-[-1]"></div>
      {/* Container */}
      <div>
        {/* Status */}
        <Status />
        <Location />
        <Today />
        <Weather />
        <WeatherForecast />
      </div>
    </div>
  );
};

export default Container;
