import React, { useEffect, useState } from "react";
import { Input, Button, Resultdiv } from "./components";
import "./App.css";

function App() {
  let [likes, setlikes] = useState([
    {
      id: 1,
      title: "books",
      isUpdate: false,
    },
  ]);
  let [title, settitle] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();

    const data = {
      id: new Date().getTime(),
      title: title,
      isUpdate: false,
    };
    const newlike = [...likes, data];
    setlikes(newlike);

    saveToLocal(newlike);
    settitle("");
  };
  useEffect(() => {
    getFromStorage();
    console.log(likes);
  }, []);

  const onDelete = (itemId) => {
    console.log("itemId", itemId);
    const filteredArray = likes.filter((l) => l.id !== itemId);
    console.log(filteredArray);
    setlikes(filteredArray);
    console.log(likes);
    saveToLocal(filteredArray);
  };

  const onUpdate = (itemId, updatedTitle) => {
    const findIndextoUpdate = likes.findIndex((obj) => obj.id === itemId);
    const updatedItems = [...likes];
    updatedItems[findIndextoUpdate] = {
      ...updatedItems[findIndextoUpdate],
      title: updatedTitle,
    };
    setlikes(updatedItems);
    saveToLocal(updatedItems);
  };

  function saveToLocal(newTitles) {
    localStorage.setItem("my-likes", JSON.stringify(newTitles));
  }

  function getFromStorage() {
    const storedTitles = JSON.parse(localStorage.getItem("my-likes"));
    if (storedTitles) {
      console.log("hi");
      setlikes(storedTitles);
    }
  }

  return (
    <>
      <form className="form" onSubmit={onsubmit}>
        <Input
          key="input"
          label="Likes:"
          name="likes"
          type="text"
          placeholder="Enter yout liked item"
          onChange={(e) => settitle(e.target.value)}
          value={title}
        ></Input>
        <Button key="button" type="submit" name="Submit"></Button>
      </form>
      <div className="result">
      {likes.map((val) => {
        return (
          <div key={val.id} className="result-wrap">
            <Resultdiv
              title={val.title}
              onDelete={() => onDelete(val.id)}
              onUpdate={(updatedTitle) => onUpdate(val.id, updatedTitle)}
            ></Resultdiv>
          </div>
        );
      })}
      </div>
    </>
  );
}

export default App;
