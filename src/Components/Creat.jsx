import React, { useState } from "react";

function creatList() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addList = () => {
    if (inputValue !== "") {
      setList([...list, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleList = (index) => {
    const updatedList = [...list];
    updatedList[index].completed = !updatedList[index].completed;
    setList(updatedList);
  };

  return (
    <div className="container">
      <h1>Nhập Để Tạo Danh Sách</h1>
      <div className="input_list">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Your Task Here..."
        />
        <button onClick={addList}>Nhập</button>
      </div>
      <ul className="list">
        {list.map((list, index) => (
          <li key={index}>
            <input
              type="radio"
              checked={list.completed}
              onChange={() => toggleList(index)}
            />
            <p className={list.completed ? "completed" : ""}>{list.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default creatList;
