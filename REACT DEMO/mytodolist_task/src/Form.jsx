import React from 'react'

function Form() {
    return (
        <div className='container' style={{ display: "flex", justifyContent: "center" }}  >

            <form className="row align-items-center">
                <div className="col-auto">
                    <label className="visually-hidden" for="autoSizingInput">Name</label>
                    <input type="text" className="form-control" id="autoSizingInput" placeholder="Task name" />
                </div>
                <div className="col-auto">
                    <label className="visually-hidden" for="autoSizingInputGroup">Username</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="description" />
                    </div>
                </div>
                <div className="col-auto">
                    <button type="submit" style={{backgroundColor:"#17ac8c"}} className="btn ">Add todo</button>
                </div>
            </form>

        </div>
    )
}

export default Form