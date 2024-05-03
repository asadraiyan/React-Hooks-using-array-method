import React, { useState } from "react";

const Todolist = () => {
  const [input, setInput] = useState({
    todoName: "",
    todoDate: "",
  });
  const [todo, setTodo] = useState([
    {
      id: 2,
      name: "asad",
      date: "2024-02-15",
      isCompleted: false,
    },
    {
      id: 1,
      name: "asad",
      date: "2024-02-06",
      isCompleted: true,
    },
    {
      id: 4,
      name: "asad",
      date: "2024-02-20",
      isCompleted: false,
    },
    {
      id: 3,
      name: "asad",
      date: "2024-02-20",
      isCompleted: true,
    },
  ]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const generateRandomId = () => {
    const random = Math.floor(Math.random() * 9) + 1;
    return random;
  };
  const handleAdd = () => {
    const id = generateRandomId();
    setTodo((oldItem) => {
      return [
        ...oldItem,
        {
          id: id,
          name: input.todoName,
          date: input.todoDate,
          isCompleted: "false",
        },
      ];
    });
    console.log(todo);
    setInput({
      todoDate: "",
      todoName: "",
    });
  };
  const handleDelete = (id) => {
    setTodo((oldItem) => {
      return oldItem.filter((item, index) => {
        return index !== id;
      });
    });
  };

  console.log("todo =", todo);

  const handleCompleted = () => {
    setTodo((oldItem) => {
      return oldItem.filter((item, index) => {
        return item.isCompleted;
      });
    });
  };
  const handleSortById = () => {
    const arr = [...todo].sort((a, b) => a.id - b.id);
    console.log("arr =", arr);
    setTodo(arr);
    // setTodo((oldItem) => {
    //   return oldItem.sort((a, b) => b.id - a.id);
    // });
  };
  const handleSortByDate = () => {
    const arr = todo.sort((a, b) => new Date(a.date) - new Date(b.date));
    console.log("arr =", arr);
    setTodo([...arr]);
  };

  const temp = [
    {
      price: "11.2",
      label: "xyz",
    },
    {
      price: 2.1,
      label: "xyz",
    },
    {
      price: null,
      label: "xyz",
    },
    {
      price: undefined,
      label: "xyz",
    },
  ];

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Add your Todo"
          value={input.todoName}
          name="todoName"
          onChange={handleChange}
        />
        <input
          type="date"
          value={input.todoDate}
          name="todoDate"
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add</button>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {todo.map((item, id) => {
            return (
              <div key={id} style={{ display: "flex", gap: "5px" }}>
                <span>{item.id}</span>
                <span>{item.name}</span>
                <span>{item.date}</span>
                <span>{String(item.isCompleted)}</span>
                <button onClick={() => handleDelete(id)}>Delete</button>
              </div>
            );
          })}
        </div>

        <button onClick={handleCompleted}>Completed</button>
        <button onClick={handleSortById}>Sortby Id</button>
        <button onClick={handleSortByDate}>Sortby date</button>
      </div>
    </>
  );
};

export default Todolist;
