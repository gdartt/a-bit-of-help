import React from "react";
import "../styles/components/form.scss";

const Form = () => (
    <div className="form">
        <h1 className="form__title">Test</h1>
        <div className="form__paragraph-container">
            <p className="form__paragraph">drugi test</p>
        </div>
        <form action="#">
            <input className="form__input" type="text" />
            <input className="form__input" type="email" />
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="form__textarea"
            ></textarea>
            <button className="form__btn">wyślij</button>
        </form>
        <a href="/" className="form__link">
            trzeci test
        </a>
    </div>
);

export default Form;
