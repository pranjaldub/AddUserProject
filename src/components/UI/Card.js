import React from "react";
import "./Card.css";
export default function SimpleCard(props) {
  return <div className="card">{props.children}</div>;
}
