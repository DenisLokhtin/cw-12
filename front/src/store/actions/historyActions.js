import history from "../../history";

export const historyPush = payload => {
    return () => {
        console.log('push');
        history.push(payload);
    };
};

export const historyReplace = payload => {
    return () => {
        history.replace(payload);
    };
};