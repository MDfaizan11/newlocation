import React, { useState } from "react";
import ThreeSixty from "react-360-view";
import img1 from "../assets/images/Screenshot_9-8-2024_173316_.jpeg";
import img2 from "../assets/images/WhatsApp Image 2024-02-23 at 11.41.06 AM.jpeg";
import img3 from "../assets/images/WhatsApp_Image_2024-02-23_at_11.41.06_AM-removebg-preview.png";

function Two() {
  const imageUrls = [img1, img2, img3];
  const [country, setcountry] = useState("");
  const [error, seterror] = useState("");

  if (country === "^(+91[-s]?)?[0]?(91)?[6-9]d{9}$") {
    alert("Please enter a country");
  } else {
    seterror("wrong number");
  }
  return (
    <>
      <p id="khan">Two</p>
      <article></article>

      <ThreeSixty
        amount={imageUrls.length} // Number of images
        images={imageUrls} // Directly pass the images array
        width={500}
        height={500}
        play={true} // Auto-play the rotation
        loop={true} // Loop the rotation
        reverse={false} // Reverse the rotation
      />
    </>
  );
}

export default Two;
