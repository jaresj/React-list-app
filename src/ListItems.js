import React from "react";
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <button
              type="deleteBtn"
              className="deleteBtn"
              onClick={() => props.deleteItem(item.key)}
            >
              Remove
            </button>
            <br />
            <button
              type="leftBtn"
              className="leftBtn"
              onClick={() => props.moveLeft(item.key)}
            >
              &#10140;
            </button>
            <button
              type="rightBtn"
              className="rightBtn"
              onClick={() => props.moveRight(item.key)}
            >
              &#10140;
            </button>
          </span>
        </p>
      </div>
    );
  });
  return <div>{listItems}</div>;
}

export default ListItems;
