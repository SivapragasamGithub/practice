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
                onChange={(inputText) => setTaskName(inputText.target.value)}
                style={{ padding: "5px",width:"250px",borderRadius:"10px" }}
            />
            <input
                type="text"
                placeholder="Todo Description"
                value={description}
                onChange={(inputText) => setDescription(inputText.target.value)}
                style={{ padding: "5px",width:"500px",borderRadius:"10px" }}
            />
            <button onClick={handleSubmit} style={{ backgroundColor:"#14ad8a",borderRadius:"10px" }}>Add Todo</button>
        </div>
    );
}

export default TodoForm;
