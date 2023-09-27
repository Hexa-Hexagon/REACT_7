import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);
    const [isEditing, setIsEditing] = useState(0);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            showAlert(1, "danger", "please enter values")
        } else if (name && isEditing) {

        } else {
            showAlert(1, "success", "task added to the list")
            const newItem = {
                id: new Date().getTime().toString(),
                title: name
            };
            setList([...list, newItem]);
            setName("");
        }
    };
    const clearList = () => {
        showAlert(1, "danger", "empty list");
        setList([]);
    }
    const showAlert = (show = 0, type = "", msg = "") => {
        setTimeout(() => { setAlert({ show, type, msg }) }, 3000);
    }
    const removeItem = (id) => {
        setList(list.filter((task) => task.id !== id));
        showAlert(1, "danger", "item removed");
    }
    return ( <
        section className = "section-center" >
        <
        form className = "grocery-form"
        onSubmit = { handleSubmit } > {
            alert.show && < Alert {...alert }
            />} <
            h3 > TODO List < /h3> <
            div className = "form-control" >
            <
            input
            type = "text"
            className = "grocery"
            placeholder = "e.g. pass the exam"
            value = { name }
            onChange = {
                (e) => setName(e.target.value) }
            /> <
            button type = "submit"
            className = "submit-btn" > { isEditing ? "edit" : "submit" } < /button> <
            /div> <
            /form> {
                list.length > 0 && ( <
                    div className = "grocery-container" >
                    <
                    List items = { list }
                    removeItem = { removeItem }
                    /> <
                    button className = "clear-btn"
                    onClick = { clearList } > clear items < /button> <
                    /div>
                )
            } <
            /section>
        );
    }

    export default App;