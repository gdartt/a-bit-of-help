import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

import { formData } from "../db/form";

import "../styles/components/form.scss";

const Form = ({ data: { title, paragraphs, textarea, link }, emailTitle }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const formReset = () => {
        setName("");
        setEmail("");
        setMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            // TODO: url do zmiany
            url: "http://localhost:3002/access",
            data: { emailTitle, name, email, message },
        }).then((response) => {
            const result = response.data.status;
            swal(
                formData[result].title,
                formData[result].message,
                formData[result].icon
            );
            result !== "fail" && formReset();
        });
    };

    const paragraphsContainer = paragraphs.map((paragraph) => (
        <p className="form__paragraph" key={paragraph.slice(0, 33)}>
            {paragraph}
        </p>
    ));

    const checkLink = link && (
        <a href={link.path} className="form__link">
            {link.content}
        </a>
    );

    return (
        <div className="form">
            <h1 className="form__title">{title}</h1>
            <div className="form__paragraph-container">
                {paragraphsContainer}
            </div>
            <form action="#" className="form__form" onSubmit={handleSubmit}>
                <input
                    className="form__input"
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Imię"
                    minLength="3"
                    required
                />
                <input
                    className="form__input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    required
                />
                <textarea
                    className="form__textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={textarea}
                    minLength="10"
                    required
                ></textarea>
                <button className="form__btn" data-btn="wyślij">
                    wyślij
                </button>
            </form>
            {checkLink}
        </div>
    );
};

export default Form;
