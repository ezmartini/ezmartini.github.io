import React from "react";
import { Container } from "react-bootstrap";
import brazilianFood from "../jpgs/bFood.jpeg";
import board from "../jpgs/board.jpeg";
import boston from "../jpgs/boston.jpeg";
import bubbaMia from "../jpgs/bubbaMia.jpeg";
import fiona from "../jpgs/fiona.jpeg";
import jeep from "../jpgs/jeep.jpeg";
import legos from "../jpgs/legos.jpeg";
import me from "../jpgs/me.jpeg";
import mia from "../jpgs/mia.jpeg";
import moonwalker from "../jpgs/moonwalker.jpeg";
import sohoArt from "../jpgs/sohoArt.jpeg";
import sunset from "../jpgs/sunset.jpeg";

export default function PhotoGrid() {
  return (
    <>
      <Container className="p-0 photoGrid" fluid>
        <img
          alt="Plate of Brazilian food in Astoria"
          src={brazilianFood}
          className="col-lg-2 col-3"
        />
        <img alt="Charcuterie board" src={board} className="col-lg-2 col-3" />
        <img alt="Boston" src={boston} className="col-lg-2 col-3" />
        <img
          alt="Two dogs hanging out, with one sitting on another"
          src={bubbaMia}
          className="col-lg-2  col-3"
        />
        <img
          alt="An American shorthair cat"
          src={fiona}
          className="col-lg-2  col-3"
        />
        <img
          alt="A Jeep with a Christmas tree on top"
          src={jeep}
          className="col-lg-2  col-3"
        />
        <img
          alt="Instructions for elgos"
          src={legos}
          className="col-lg-2  col-3"
        />
        <img
          alt="Me as a kid, hanging out with a dog"
          src={me}
          className="col-lg-2  col-3"
        />
        <img
          alt="An English lab with headphones on "
          src={mia}
          className="col-lg-2  col-3"
        />
        <img
          alt="Michael Jackson arcade game"
          src={moonwalker}
          className="col-lg-2  col-3"
        />
        <img
          alt="An art installation in SoHo"
          src={sohoArt}
          className="col-lg-2  col-3"
        />
        <img
          alt="A sunset, on Cape Cod"
          src={sunset}
          className="col-lg-2  col-3"
        />
      </Container>
    </>
  );
}
