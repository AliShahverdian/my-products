import React, { useState } from "react";

function home() {
  function handleClick() {
    console.log("Button clicked!");
    setNumber(Number + 1);
  }
  const [Number, setNumber] = useState(0);
  //   const item = {
  //     id: 1,
  //     title: "Calculator",
  //     description: "this is a brand new calculator",
  //   };
  const products = [
    {
      id: 1,
      title: "Calculator",
      description: "this is a brand new calculator",
    },
    {
      id: 2,
      title: "Pencil",
      description: "this is a brand new pencil",
    },
    {
      id: 3,
      title: "Pen",
      description: "this is a brand new pen",
    },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
          fontSize: "30px",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        this is home page
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
          color: "white",
        }}
      >
        <button onClick={handleClick}>press</button>
      </div>
      <div style={{ textAlign: "center" }}>{Number}</div>
      {Number == 4 && <div>show number</div>}
    </div>
  );
}
export default home;
