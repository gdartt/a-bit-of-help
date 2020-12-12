import React from "react";
import "../styles/components/form.scss";

const Form = () => (
    <div className="form">
        <h1 className="form__title">zgłoś projekt do realizacji</h1>
        <div className="form__paragraph-container">
            <p className="form__paragraph">
                Dla nas przyszłość jest zawsze świetlana i chcemy sprawić, żeby
                Twoja też taka była! Napisz do nasi zamień swoje marzenia na
                konkretny plan.
            </p>
        </div>
        <form action="#" className="form__form">
            <input className="form__input" type="text" placeholder="Imię" />
            <input className="form__input" type="email" placeholder="Email" />
            <textarea
                name=""
                id=""
                className="form__textarea"
                placeholder="Na dobry początek zacznij od tego, czego potrzebuje Twoja organizacja..."
            ></textarea>
            <button className="form__btn" data-btn="wyślij">
                wyślij
            </button>
        </form>
        <a href="/" className="form__link">
            Lista poszukiwanych wolontariatów
        </a>
    </div>
);

export default Form;
