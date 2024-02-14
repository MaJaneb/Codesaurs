import React, { useState } from "react";
import upload from "./images/upload.png";
import "./majaneb.css";

const Majaneb = () => {
    const [text, setText] = useState("");

    const handleImageClick = () => {
        document.getElementById("fileInput").click();
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        console.log("Загружен файл:", file.name);
    };

    const handlePassButtonClick = () => {
        console.log("Клик на passbutton");
    };

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleFocus = (event) => {
        if (event.target.textContent === "Введите решение") {
            event.target.textContent = "";
        }
    };

    const handleBlur = (event) => {
        if (event.target.textContent === "") {
            event.target.textContent = "Введите решение";
        }
    };

    return (
        <div className="container">
            <div className="task_example">
                <div className="taskname">
                    <h2>Название задачи 4444444</h2>
                </div>
                <div className="disk">
                    <p>Описание задачи. 1824128747928374812374980237487210894792180478912748273470981237489127304871284089127348712
                    </p>
                </div>
            </div>
            <div className="rightside">
                <div className="pass">
                    <div className="passbutton" onClick={handlePassButtonClick}>
                        сдать задание
                    </div>
                </div>
                <div className="solution">
                    <div
                        className="sol"
                        contentEditable="true"
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        {text || "Введите решение"}
                    </div>
                    <div className="done" style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ flexGrow: 1 }}>{text || "прикрепить решение"}</div>
                        <img
                            src={upload}
                            alt="Прикрепить файл"
                            style={{ cursor: "pointer" }}
                            onClick={handleImageClick}
                        />
                    </div>
                </div>
            </div>
            <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileUpload}
            />
        </div>
    );
};

export { Majaneb };
