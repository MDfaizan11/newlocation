import React, { useEffect, useState } from "react";
import "../component/slider.css";
import img1 from "../assets/images/WhatsApp Image 2024-02-23 at 11.41.06 AM.jpeg";
import img2 from "../assets/images/WhatsApp Image 2024-02-23 at 11.41.06 AM.jpeg";
import img3 from "../assets/images/WhatsApp_Image_2024-02-23_at_11.41.06_AM-removebg-preview.png";
import img4 from "../assets/images/Screenshot_9-8-2024_173316_.jpeg";
function Three() {
  const [country, setcountry] = useState("");
  console.log(country);
  const [city, setcity] = useState([]);
  useEffect(() => {
    if (country === "nagpur") {
      setcity(["pardi", "kharbi", "tajbag"]);
    } else if (country === "pakistan") {
      setcity(["karachi", "kashmir", "nagaland"]);
    } else {
      setcity([]);
    }
  }, [country]);

  const images = [img1, img2, img3, img4];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <>
      Three
      <select value={country} onChange={(e) => setcountry(e.target.value)}>
        <option value=""> select</option>
        <option value="nagpur"> nagpur</option>
        <option value="pakistan"> pakistan</option>
        <option value="nepal"> nepal</option>
      </select>
      <select name="" id="">
        {city.map((cityname) => {
          return <option value="">{cityname}</option>;
        })}
      </select>
      <div className="slider">
        <div
          className="slider-content"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="slider-image" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Three;
