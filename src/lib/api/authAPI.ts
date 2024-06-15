
export const signinAPI = async (email: string, password: string) => {
    const res = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    });
    if (!res.ok) throw new Error("api is not working");
    const data = await res.json();
    return data;
}

export const signupAPI = async () => {
    const res = await fetch("/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    });
    if (!res.ok) throw new Error("api is not working");
    const data = await res.json();
    return data;
}


export const validateToken = async () => {
    const res = await fetch("/api/user", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    });
    if (!res.ok) throw new Error("api is not working");
    const data = await res.json();
    return data;
    // console.log(data);
};

export const deleteToken = async () => {
    const res = await fetch("/api/logout", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    });
    if (!res.ok) throw new Error("something is missing");
    const data = await res.json();
    return data;
    // console.log(data);
};