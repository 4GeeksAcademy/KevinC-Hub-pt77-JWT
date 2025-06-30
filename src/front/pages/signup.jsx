import React, { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

export const Signup = () => {

    const { store, dispatch, signup } = useGlobalReducer()
    const [user, setUser] = useState({email: "", password: ""})
    const navigate = useNavigate();

    const handleSignup = () => {
        signup(user)
        navigate("/")
    }

    return (
        <div className="text-center mt-5 w-50 mx-auto">
            <div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                    <input 
                        type="text" 
                        className="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default"
                        onChange={(e)=> setUser({...user, email: e.target.value})}
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                    <input 
                        type="password" 
                        className="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default"
                        onChange={(e)=> setUser({...user, password: e.target.value})} 
                    />
                </div>
            </div>
            <button className="btn btn-info" onClick={handleSignup}>Submit</button>
        </div>
    );
};