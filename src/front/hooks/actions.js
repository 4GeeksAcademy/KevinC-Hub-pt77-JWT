export const signup = async (dispatch, payload) => {
    
    let response = await fetch(import.meta.env.VITE_BACKEND_URL + "/signup", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            email: payload.email,
            password: payload.password
        })
    });

    let data = await response.json();

    // error handling
    // if (data.detail == ``) {
    //     ();
    // }

}

export const login = async (dispatch, payload) => {
    let response = await fetch(import.meta.env.VITE_BACKEND_URL + "/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            email: payload.email,
            password: payload.password
        }),
    });

    let data = await response.json();

    dispatch({
        type: "set_user",
        payload: { user: data.user, access_token: data.access_token },
    });
}
export const getUser = async (dispatch, payload) => {
    try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/private", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${payload}`,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        const data = await response.json();

        dispatch({
            type: "set_user",
            payload: { user: data, access_token: payload },
        });
    } catch (error) {
        console.error("Error fetching user:", error);
    }
};

export const logout = (dispatch) => {
    dispatch({
        type: "logout",
    });

    sessionStorage.removeItem("token");
};