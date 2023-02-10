import React from "react";

export default function SectionsHeadins(props) {
  return <h1 className={`section-header ${props.className}`}>{props.title}</h1>;
}
