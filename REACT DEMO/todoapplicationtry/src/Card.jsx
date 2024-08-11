function Card({ todo, index, editTodo, deleteTodo, updateStatus }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            width: "200px",
            backgroundColor: "#e6f7ff",
        }}>
            <h4>{todo.taskName}</h4>
            <p>{todo.description}</p>
            <div>
                <label>Status: </label>
                <select
                    value={todo.status}
                    onChange={(e) => updateStatus(index, e.target.value)}
                    style={{
                        backgroundColor: todo.status === "Completed" ? "lightgreen" : "lightcoral",
                        padding: "5px",
                        border: "none",
                        borderRadius: "3px",
                    }}
                >
                    <option value="Completed">Completed</option>
                    <option value="Not Completed">Not Completed</option>
                </select>
            </div>
            <div style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>
                <button onClick={() => editTodo(index)} style={{ padding: "5px 10px" }}>Edit</button>
                <button onClick={() => deleteTodo(index)} style={{ padding: "5px 10px" }}>Delete</button>
            </div>
        </div>
    );
}

export default Card;
