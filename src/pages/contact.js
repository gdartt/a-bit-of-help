import React from "react";

import Layout from "../components/layout";
import Form from "../components/Form";

import { contactData } from "../db/contact";

import background from "../assets/contact/contact_bcg.png";
import backgroundx2 from "../assets/contact/contact_bcg@2x.png";
import "../styles/pages/contact.scss";

const Contact = () => (
    <Layout>
        <section className="container contact">
            <Form data={contactData.formData} emailTitle="Beneficjent" />
            <img
                className="contact__background"
                srcSet={`${backgroundx2} 2x`}
                src={background}
                alt="Join Us!"
            />
        </section>
    </Layout>
);

export default Contact;
