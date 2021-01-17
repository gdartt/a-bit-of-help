import React from "react";

import Layout from "../components/layout";
import Form from "../components/Form";

import { joinData } from "../db/join";

import background from "../assets/join/join_bcg.png";
import backgroundx2 from "../assets/join/join_bcg@2x.png";
import "../styles/pages/join.scss";

const Join = () => (
    <Layout>
        <section className="container join">
            <Form data={joinData.formData} emailTitle="Wolontariusz" />
            <img
                className="join__background"
                srcSet={`${backgroundx2} 2x`}
                src={background}
                alt="ContactUs!"
            />
        </section>
    </Layout>
);

export default Join;
