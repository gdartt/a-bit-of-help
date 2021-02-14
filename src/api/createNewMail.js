import axios from "axios";
import swal from "sweetalert";
import { messageSend } from "../db/form";

const successfullySent = () => {
    swal(...Object.values(messageSend.success));
};

const failureSent = () => {
    swal(...Object.values(messageSend.fail));
};

export const createNewMail = async (e, mailForm) => {
    // NOTE: url do zmiany
    return axios
        .post("http://localhost:3002/access11", mailForm)
        .then(() => {
            successfullySent();
            e.target.reset();
        })
        .catch(() => {
            failureSent();
        })
        .then(() => false);
};
