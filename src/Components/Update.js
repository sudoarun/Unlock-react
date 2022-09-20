import axios from "axios";
import React, { useState } from "react";

function Update() {
    // const loadUser = async id => {
    //     const result = await axios.get(`http://localhost:3003/users$id`)
    // }
    const [user, setUser] = useState({
        name: "",
        device: "",
        serial: ""
    })
    const { name, device, serial } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const onUpdateData = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);

        // redirect('/home');
    }
    return (
        <>
            <div className="container text-center mt-5">
                <form onSubmit={e => onUpdateData(e)}>
                    <input type="text" placeholder="Name" name="name" value={name} onChange={e => onInputChange(e)}></input><br /><br />
                    <input type="text" placeholder="Type" name="device" value={device} onChange={e => onInputChange(e)}></input><br /><br />
                    <input type="text" placeholder="serial" name="serial" value={serial} onChange={e => onInputChange(e)}></input><br /><br />
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </>
    )
}
export default Update;