import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGeolocated } from "react-geolocated";
import axios from "axios";

const GOOGLE_MAPS_API_KEY = "AIzaSyBnFQ8cp6ORh2WWQHYpCPNl6ejdlFWxslE"; // Replace with your Google Maps API Key

function One() {
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState("");

  const { coords, isGeolocationAvailable, isGeolocationEnabled, error } =
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
        try {
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`
          );

          if (response.data.results && response.data.results.length > 0) {
            setAddress(response.data.results[0].formatted_address); // Get the most accurate address
          } else {
            setAddress("Address not found");
          }
        } catch (error) {
          console.error("Error fetching address:", error);
          setAddress("Error fetching address");
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
        {error && <p>Error: {error.message}</p>} {/* Display error message */}
      </div>
    </>
  );
}

export default One;
