import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListItems from "./ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }
  setUpdate(text, key) {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  }

  moveLeft(key) {
    let items = this.state.items;
    let newListItems = [...items];
    let selectedItem = newListItems.filter((item) => item.key === key)[0];
    let indexOfSelectedItem = newListItems.indexOf(selectedItem);
    let cardsAfter = newListItems.splice(indexOfSelectedItem + 1);
    let cardBefore = newListItems.splice(indexOfSelectedItem - 1, 1);
    newListItems.push(...cardBefore);
    newListItems.push(...cardsAfter);
    this.setState({
      items: newListItems,
    });
  }

  moveRight(key) {
    let items = this.state.items;
    let newListItems = [...items];
    let selectedItem = newListItems.filter((item) => item.key === key)[0];
    let indexOfSelectedItem = newListItems.indexOf(selectedItem);
    let cardAfter = newListItems.splice(indexOfSelectedItem + 1, 1);
    let cardsAfter = newListItems.splice(indexOfSelectedItem + 1);
    let selectedCard = newListItems.splice(indexOfSelectedItem, 1);
    console.log(cardsAfter);

    newListItems.push(...cardAfter);
    newListItems.push(...selectedCard);
    newListItems.push(...cardsAfter);
    this.setState({
      items: newListItems,
    });
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="list-app" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Hire Justice"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />

            <button type="submit">Add Card</button>
          </form>
        </header>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
          moveLeft={this.moveLeft}
          moveRight={this.moveRight}
        />
      </div>
    );
  }
}

export default App;
