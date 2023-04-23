import React from "react";
import { useState } from "react";
import Card from "./Card";

function Cards() {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/IMG/img1.png", stat: "" },
      { id: 1, img: "/IMG/img1.png", stat: "" },
      { id: 2, img: "/IMG/img2.png", stat: "" },
      { id: 2, img: "/IMG/img2.png", stat: "" },
      { id: 3, img: "/IMG/img3.png", stat: "" },
      { id: 3, img: "/IMG/img3.png", stat: "" },
      { id: 4, img: "/IMG/img4.png", stat: "" },
      { id: 4, img: "/IMG/img4.png", stat: "" },
      { id: 5, img: "/IMG/img5.png", stat: "" },
      { id: 5, img: "/IMG/img5.png", stat: "" },
      { id: 6, img: "/IMG/img6.jpg", stat: "" },
      { id: 6, img: "/IMG/img6.jpg", stat: "" },
      { id: 7, img: "/IMG/img7.png", stat: "" },
      { id: 7, img: "/IMG/img7.png", stat: "" },
      { id: 8, img: "/IMG/img8.png", stat: "" },
      { id: 8, img: "/IMG/img8.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  function check(curr) {
    if (items[curr].id === items[prev].id) {
      items[curr].stat = "correct";
      items[prev].stat = "correct";
      setCount(count + 1);
      setScore(score + 100);
      setItems([...items]);
      setPrev(-1);
    } else {
      setCount(count + 1);
      items[curr].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[curr].stat = "";
        items[prev].stat = "";
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
    items[id].stat = "active";
    setItems([...items]);
  }

  return (
    <div className="container">
      {items.map((items, index) => (
        <Card key={index} item={items} id={index} handleClick={handleClick} />
      ))}
      <div>Count :{count}</div>
      <div>Score :{score}</div>
      <div>Accuracy:{((10 / count) * 100).toFixed(1)}</div>
    </div>
  );
}

export default Cards;
