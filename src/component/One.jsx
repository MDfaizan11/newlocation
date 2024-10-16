import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGeolocated } from "react-geolocated"; // Importing the hook
import axios from "axios";

function One() {
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState("");

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    });

  const handleshow = (answer) => {
    setShow(show === answer ? false : answer);
  };

  // Get address from geolocation
  useEffect(() => {
    if (coords) {
      const fetchAddress = async () => {
        const { latitude, longitude } = coords;
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`
        );

        console.log(response);
        if (response.data) {
          setAddress(response.data.display_name);
        }
      };
      fetchAddress();
    }
  }, [coords]);

  return (
    <>
      <p onClick={() => handleshow("html")}>What is HTML?</p>
      {show === "html" && <p>Hypertext Markup Language</p>}

      <p onClick={() => handleshow("css")}>What is CSS?</p>
      {show === "css" && <p>Cascading Style Sheets</p>}

      <DatePicker inline minDate={new Date()} />

      <div>
        {isGeolocationAvailable ? (
          isGeolocationEnabled ? (
            coords ? (
              <p>Address: {address}</p>
            ) : (
              <p>Getting the location data&hellip;</p>
            )
          ) : (
            <p>Geolocation is not enabled</p>
          )
        ) : (
          <p>Geolocation is not available</p>
        )}
      </div>
    </>
  );
}

export default One;
