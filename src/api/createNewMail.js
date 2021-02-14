import axios from "axios";
import swal from "sweetalert";
import { messageSend } from "../db/form";

const successfullySent = () => {
    swal(...Object.values(messageSend.success));
};

const failureSent = () => {
    swal(...Object.values(messageSend.fail));
};

export const createNewMail = (e, mailForm) => {
    // NOTE: url do zmiany
    axios
        .post("http://localhost:3002/access44", mailForm)
        .then(() => {
            successfullySent();
            e.target.reset();
        })
        .catch((err) => {
            failureSent();
        });
};

// export default createNewMail;
