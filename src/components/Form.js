import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

import { messageSend } from "../db/form";

import "../styles/components/form.scss";

const Form = ({
    data: { title, paragraphs, textareaPlaceholder, link },
    emailTitle,
}) => {
    const [isSubmitting, setIsSubmiting] = useState(false);

    const successfullySent = () => {
        swal(...Object.values(messageSend.success));
    };

    const failureSent = () => {
        swal(...Object.values(messageSend.fail));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmiting(true);

        const { name, email, message } = e.target.elements;
        try {
            await axios.post(
                // TODO: url do zmiany
                "http://localhost:3002/access",
                {
                    emailTitle,
                    name: name.value,
                    email: email.value,
                    message: message.value,
                }
            );
            successfullySent();
            e.target.reset();
        } catch (err) {
            failureSent();
        } finally {
            setIsSubmiting(false);
        }
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
                    name="name"
                    type="text"
                    placeholder="Imię"
                    minLength="3"
                    required
                />
                <input
                    className="form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                />
                <textarea
                    className="form__textarea"
                    placeholder={textareaPlaceholder}
                    minLength="10"
                    name="message"
                    required
                />
                <button
                    className="form__btn"
                    data-btn={isSubmitting ? "wysyłanie..." : "wyślij"}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "wysyłanie..." : "wyślij"}
                </button>
            </form>
            {checkLink}
        </div>
    );
};

export default Form;
