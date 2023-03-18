import React from "react";
import { BsGithub, BsEnvelopeFill, BsSpotify } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export default function Icon(props) {
  const icons = {
    github: {
      bsIcon: <BsGithub />,
      color: "#6e5494",
      name: "GitHub",
      site: "https://github.com/ezmartini",
    },
    linkedin: {
      bsIcon: <FaLinkedinIn />,
      color: "#0072b1",
      name: "LinkedIn",
      site: "https://www.linkedin.com/in/eduardazm/",
    },

    email: {
      bsIcon: <BsEnvelopeFill />,
      color: "#67B7D1",
      name: "Email",
      site: "mailto: eduardazmartini@gmail.com",
    },

    spotify: {
      bsIcon: <BsSpotify />,
      color: "#1DB954",
      name: "Spotify",
      site: "https://open.spotify.com/playlist/2Pcv5qlPqXt55DcPC4g3nU",
    },
  };
  return (
    <>
      <div className="text-white col-3">
        <div className="connectDiv">
          <a class="iconLink" href={icons[props.name].site}>
            <div
              className="rounded text-center"
              style={{
                backgroundColor: icons[props.name].color,
                fontSize: "30px",
                height: "50px",
                width: "49px",
              }}
            >
              {icons[props.name].bsIcon}
            </div>
            <p className="text-black text-center" style={{ fontSize: "10px" }}>
              {" "}
              {icons[props.name].name}{" "}
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
