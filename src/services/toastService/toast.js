// you should install 'mosha-vue-toastify'
import { createToast } from "mosha-vue-toastify";

export const toast = {
    config: {
        timeout: 2000,
        hideProgressBar: "true",
        showIcon: "true",
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
    },
};
