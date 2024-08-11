import { useState } from "react";

function TodoForm({ addTodo }) {
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        if (taskName && description) {
            addTodo({
                taskName,
                description,
                status: "Not Completed",
            });
            setTaskName("");
            setDescription("");
        }
    };

    return (
        <div style={{ marginBottom: "20px", display: "flex", gap: "10px", justifyContent: "center" }}>
            <input
                type="text"
                placeholder="Todo Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                style={{ padding: "5px", flex: 1 }}
            />
            <input
                type="text"
                placeholder="Todo Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ padding: "5px", flex: 2 }}
            />
            <button onClick={handleSubmit} style={{ padding: "5px 10px" }}>Add Todo</button>
        </div>
    );
}

export default TodoForm;
