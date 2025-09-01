import { useState, useEffect } from "react";

const Today: React.FC = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000); // update every second

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div className="text-white text-center mt-10">
      <h1 className="text-xl font-bold">
        {now.toLocaleDateString(undefined, options)}
      </h1>
      <p className="text-xs">Updated as of {now.toLocaleTimeString()}</p>
    </div>
  );
};

export default Today;
