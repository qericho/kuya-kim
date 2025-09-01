import { WiDayCloudy, WiDaySunny, WiCloudy, WiRain } from "react-icons/wi";

const forecast = [
  {
    day: "Wed 16",
    temp: 22,
    wind: "1-5 km/h",
    icon: <WiDayCloudy size={30} />,
  },
  { day: "Thu 17", temp: 25, wind: "1-5 km/h", icon: <WiDaySunny size={30} /> },
  { day: "Fri 18", temp: 23, wind: "5-10 km/h", icon: <WiCloudy size={30} /> },
  { day: "Sat 19", temp: 25, wind: "1-5 km/h", icon: <WiRain size={30} /> },
];

export default function WeatherForecast() {
  return (
    <div className="flex justify-center items-center gap-2 p-4 mt-20 md:mt-5 bg-white/20 rounded-2xl shadow-lg">
      {forecast.map((day, idx) => (
        <div
          key={idx}
          className="w-28 text-center text-white bg-black/40 rounded-2xl p-3 flex flex-col items-center gap-2"
        >
          <p className="text-xs font-medium">{day.day}</p>
          {day.icon}
          <p className="text-lg font-bold">{day.temp}°</p>
          <p className="text-xs text-gray-300">{day.wind}</p>
        </div>
      ))}
    </div>
  );
}
