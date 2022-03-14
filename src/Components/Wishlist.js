import React from "react";

const Wishlist = () => {
   const [query, setQuery] = React.useState("");
   const [items, setTasks] = React.useState([]);

   const handleChange = (e) => {
       const {value} = e.target;
       setQuery(value);
   };

    const addTodo = () => {
        const payload = {
            todo: query,
            status: false,
        };
        let updatedItems = [...items, payload];
        setTasks(updatedItems);
    };

    return (
        <>
            <h1>Wishlist</h1>
            <input 
                placeholder="Add items to your wishlist"
                onChange = {handleChange}
                value = {query}
            />
            <button onClick={addTodo}>ADD</button>
            {items.map(({todo, status}, idx) => (
                <div key={idx}>{todo}</div>
            ))}
        </>
    );
};

export {Wishlist};