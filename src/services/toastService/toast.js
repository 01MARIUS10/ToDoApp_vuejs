// you should install 'mosha-vue-toastify'
import { createToast } from "mosha-vue-toastify";

export const toast = {
    config: {
        timeout: 2000,
        hideProgressBar: "true",
        showIcon: "true",
    },
    move() {
        let a = document.querySelector(".mosha__toast");
        console.log(a);
        let app = document.querySelector("#app");
        app.appendChild(a);
    },
    warning(text, desc = "") {
        createToast(
            {
                title: text,
                description: desc,
            },
            {
                type: "warning",
                ...this.config,
            }
        );
        this.move();
    },
    success(text, desc = "") {
        createToast(
            {
                title: text,
                description: desc,
            },
            {
                type: "success",
                ...this.config,
            }
        );
        this.move();
    },
    danger(text, desc = "") {
        createToast(
            {
                title: text,
                description: desc,
            },
            {
                type: "danger",
                ...this.config,
            }
        );
        this.move();
    },
    info(text, desc = "") {
        createToast(
            {
                title: text,
                description: desc,
            },
            {
                type: "info",
                ...this.config,
            }
        );
        this.move();
    },
};
