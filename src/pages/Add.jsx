import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {

    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: null,
        cover: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/books", book);
            navigate("/");
        } catch(err) {
            console.log(err);
        }
    };

    console.log(book);

    return (
        <div className="form">
            <h1>Add New Book</h1>
            <div style={{margin: "2% 0"}}>
                <input type="text" placeholder="title" onChange={handleChange} name="title" />
            </div>
            <div style={{margin: "2% 0"}}>
                <input type="text" placeholder="desc" onChange={handleChange} name="desc" />
            </div>
            <div style={{margin: "2% 0"}}>
                <input type="number" placeholder="price" onChange={handleChange} name="price" />
            </div>
            <div style={{margin: "2% 0"}}>
                <input type="text" placeholder="cover" onChange={handleChange} name="cover" />
            </div>
            <button className="formButton" onClick={handleSubmit} type="submit">Add Book</button>
        </div>
    )
};

export default Add;