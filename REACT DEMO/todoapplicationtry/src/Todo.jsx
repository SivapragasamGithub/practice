import { useState } from "react";
import TodoForm from "./TodoForm";
import Card from "./Card";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [statusFilter, setStatusFilter] = useState("All");

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const editTodo = (index) => {
        const newTaskName = prompt("Edit task name:", todos[index].taskName);
        const newDescription = prompt("Edit description:", todos[index].description);
        if (newTaskName && newDescription) {
            const updatedTodos = [...todos];
            updatedTodos[index].taskName = newTaskName;
            updatedTodos[index].description = newDescription;
            setTodos(updatedTodos);
        }
    };

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    const updateStatus = (index, newStatus) => {
        const updatedTodos = [...todos];
        updatedTodos[index].status = newStatus;
        setTodos(updatedTodos);
    };

    const filteredTodos = todos.filter(todo => {
        if (statusFilter === "All") return true;
        return todo.status === statusFilter;
    });

    return (
        <div style={{ padding: "20px" }}>
            <TodoForm addTodo={addTodo} />

            <div style={{ marginBottom: "20px", textAlign: "center" }}>
                <label>Status Filter: </label>
                <select onChange={(e) => setStatusFilter(e.target.value)} style={{ padding: "5px" }}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Not Completed">Not Completed</option>
                </select>
            </div>

            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                {filteredTodos.map((todo, index) => (
                    <Card
                        key={index}
                        todo={todo}
                        index={index}
                        editTodo={editTodo}
                        deleteTodo={deleteTodo}
                        updateStatus={updateStatus}
                    />
                ))}
            </div>
        </div>
    );
}

export default Todo;
