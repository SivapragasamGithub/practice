function Card({ todo, index, editTodo, deleteTodo, updateStatus }) {
    return (
        <div style={{
            border: "2px  ",
            borderRadius: "8px",
            padding: "10px",
            width: "200px",
            backgroundColor: "#ccf5d3",
        }}>
            <h4>{todo.taskName}</h4>
            <p>{todo.description}</p>
            <div>
                <label>Status: </label>
                <select
                    value={todo.status}
                    onChange={(status) => updateStatus(index, status.target.value)}
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
                <button onClick={() => editTodo(index)} style={{ padding: "5px 10px",backgroundColor:"#13ad89" }}>Edit</button>
                <button onClick={() => deleteTodo(index)} style={{ padding: "5px 10px",backgroundColor:"#d15d20" }}>Delete</button>
            </div>
        </div>
    );
}

export default Card;
