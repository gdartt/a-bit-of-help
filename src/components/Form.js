import React from "react";

import "../styles/components/form.scss";

const Form = (props) => {
    const { title, paragraphs, textarea, link } = props.data;

    return (
        <div className="form">
            <h1 className="form__title">{title}</h1>
            <div className="form__paragraph-container">
                {paragraphs.map((paragraph) => (
                    <p className="form__paragraph" key={paragraph.slice(0, 33)}>
                        {paragraph}
                    </p>
                ))}
            </div>
            {/* TODO: dodac wysylanie form */}
            <form action="#" className="form__form">
                <input className="form__input" type="text" placeholder="Imię" />
                <input
                    className="form__input"
                    type="email"
                    placeholder="Email"
                />
                <textarea
                    name=""
                    id=""
                    className="form__textarea"
                    placeholder={textarea}
                ></textarea>
                <button className="form__btn" data-btn="wyślij">
                    wyślij
                </button>
            </form>
            {link ? (
                <a href={link.path} className="form__link">
                    {link.content}
                </a>
            ) : null}
        </div>
    );
};

export default Form;
