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
            <button type="btn" onClick={() => props.deleteItem(item.key)}>
              Remove
            </button>
            <button type="btn" onClick={() => props.moveLeft(item.key)}>
              Left
            </button>
            <button type="btn" onClick={() => props.moveRight(item.key)}>
              Right
            </button>
          </span>
        </p>
      </div>
    );
  });
  return <div>{listItems}</div>;
}

export default ListItems;
