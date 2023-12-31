import React from "react";
import { useEffect } from "react";

export default function Error404({ navbar }) {
  useEffect(() => {
    const navBar = navbar.current;
    const childElement1 = document.body.children[1].children[1];
    window.addEventListener("scroll", () => {
      if (childElement1.getBoundingClientRect().bottom <= navBar.clientHeight) {
        navBar.style.backdropFilter = "blur(10px)";
        // navBar.style.backdropFilter = "";
      } else {
        navBar.style.backdropFilter = "";
      }
    });
  });
  return (
    <>
      <div className="show">
        <img
          src={process.env.PUBLIC_URL + "/images/error404BG.jpg"}
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
          alt=""
        />
        <img
          src={process.env.PUBLIC_URL + "/images/error404Character.png"}
          className="error404Character"
          alt=""
        />
        <img
          src={process.env.PUBLIC_URL + "/images/error404Text2.png"}
          className="error404Character"
          alt=""
        />
        <img
          src={process.env.PUBLIC_URL + "/images/error404Text1.png"}
          className="error404Text"
          alt=""
        />
        <img
          src={process.env.PUBLIC_URL + "/images/error404Text1Shadow.png"}
          className="error404TextShadow"
          alt=""
        />
      </div>
      <div className="hideDiv">
        <div className="mobErrorPageDiv">
          <img
            src="https://cdn.dribbble.com/users/310457/screenshots/3477970/media/a41364ee87ac8d2579133a9bb2c0f9ac.gif"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
