import { useEffect, useState } from "react";
import { Input, Button, Resultdiv } from "./components";
import "./App.css";

function App() {
  let [likes, setlikes] = useState([
    {
      id: 1,
      title: "books",
    },
  ]);
  let [title, settitle] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    setlikes(() => {
      const data = {
        id: new Date().getTime(),
        title: title,
      };
      return [...likes, data];
    });
    settitle("");
  };
  useEffect(() => {
    console.log(likes);
  }, [likes]);

  const onDelete = (itemId) => {
    console.log("itemId", itemId);
    const filteredArray = likes.filter((l) => l.id !== itemId);
    console.log(filteredArray);
    setlikes(filteredArray)
     console.log(likes)
  };
  
  const onUpdate=(itemId)=>{
    console.log("itemId",itemId)
    return( <>
      <form key="update-form" onSubmit={onsubmit}>
        <Input
          key="update-input"
          label="Likes:"
          name="likes"
          type="text"
          placeholder="Update yout liked item"
          onChange={(e) => settitle(e.target.value)}
          value={title}
        ></Input>
        <Button key="button" type="submit" name="Submit"></Button>
      </form>
      </>)
  }
  return (
    <>
      <form key="form" onSubmit={onsubmit}>
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

      {likes.map((val) => {
        return (
          <div>
            <Resultdiv
              key={val.id}
              title={val.title}
              onDelete={() => onDelete(val.id)}
              onUpdate={()=>onUpdate(val.id)}
              
            ></Resultdiv>
          </div>
        );
      })}
    </>
  );
}

export default App;
