import React, { useState } from "react";
import { createNewMail } from "../api/createNewMail";

import "../styles/components/form.scss";

const Form = ({
    data: { title, paragraphs, textareaPlaceholder, link },
    emailTitle,
}) => {
    const [isSubmitting, setIsSubmiting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmiting(true);
        const { name, email, message } = e.target.elements;

        createNewMail(e, {
            emailTitle,
            name: name.value,
            email: email.value,
            message: message.value,
        }).then((respond) => setIsSubmiting(respond));
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
