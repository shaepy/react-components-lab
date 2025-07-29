import "./WeatherForecast.css";

const WeatherForecast = (forecast) => {
  return (
    <div className="weather">
      <WeatherData {...forecast} />
    </div>
  );
};

const WeatherIcon = ({ img, imgAlt }) => {
  return <img src={img} alt={imgAlt} />;
};

const WeatherData = ({ day, conditions, time, img, imgAlt }) => {
  return (
    <>
      <h2>{day}</h2>
      <WeatherIcon img={img} imgAlt={imgAlt} />
      <p>
        <span>conditions: </span>
        {conditions}
      </p>
      <p>
        <span>time: </span>
        {time}
      </p>
    </>
  );
};

export default WeatherForecast;
