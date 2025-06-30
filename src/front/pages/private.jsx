import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Private = () => {
    const { store, dispatch, getUser } = useGlobalReducer();
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (store.access_token) {
            getUser(store.access_token);
        } else {
            setMessage("YOU MUST LOGIN FIRST");
        }
    }, []);

    useEffect(() => {
        if (!store.user) {
            setMessage("YOU MUST LOGIN FIRST");
        } else {
            setMessage(`Hello ${store.user.email}`);
        }
    }, [store.user]);

    return (
        <div className="text-center mt-5">
            {message}
        </div>
    );
};
