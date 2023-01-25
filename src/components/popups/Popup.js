import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function Popup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div> hi </div>
    </>
  );
}
