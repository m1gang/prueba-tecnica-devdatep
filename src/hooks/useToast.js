import { sileo } from 'sileo';
import { CheckSymbol } from '../components/CheckSymbol';

export const useToast = () => {
    const showSuccess = (message, title = "Éxito") => {
        sileo.success({
            title,
            description: message,
            fill: "white",

            styles: {
                title: "text-green-500!",
                description: "text-black/75!",
                badge: "bg-green-500/20!",
                button: "bg-green-500/10! hover:bg-green-500/15!",
            },
        });
    };

    const showError = (message, title = "Error") => {
        sileo.error({
            title,
            description: message,
            fill: "white",
            styles: {
                title: "text-red-500!",
                description: "text-black/75!",
                badge: "bg-red-500/20!",
                button: "bg-red-500/10! hover:bg-red-500/15!",
            },
        });
    };

    const showWarning = (message, title = "Advertencia") => {
        sileo.warning({
            title,
            description: message,
        });
    };

    const showInfo = (message, title = "Info") => {
        sileo.info({
            title,
            description: message,
        });
    };

    return { showSuccess, showError, showWarning, showInfo };
};
