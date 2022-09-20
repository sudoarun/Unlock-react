import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";

// let navigate = useNavigate();
const View = () => {
    const [user, setUser] = useState({
        name: "",
        device: "",
        serial: ""
    })
    useEffect(()=>{
        loadUser();
    },[]);

    
    const { name, device, serial } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        // navigate("/", { replace: true });
    }
    // const loadUser = async id => {
    //     const result = await axios.get(`http://localhost:3003/users$id`)
    // }

    const loadUser = async (id) => {
        const result = await axios.get(`http://localhost:3003/users/${id}` );
        setUser(result.data);
        loadUser();
        // console.log(result);

    }

    const onSaveData = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users/", user);
        
        // redirect('/home');
    }


    return (
        <form onSubmit={e => onSaveData(e)}>

            <div className="modal fade" id="ViewModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">View Registration</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" required
                                    placeholder="name@example.com" value={name} name="name" onChange={e => onInputChange(e)} />
                                <label htmlFor="floatingInput" >Enter Your Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select className="form-select " id="floatingSelect"
                                    aria-label="Floating label select example" name='device' value={device} onChange={e => onInputChange(e)} >
                                    <option >Select Option</option>
                                    <option value="iPhone 5s" >iPhone 5s</option>
                                    <option value="iPhone 5">iPhone 5</option>
                                    <option value="iPhone SE">iPhone SE 1st</option>
                                    <option value="iPhone 6">iPhone 6</option>
                                    <option value="iPhone 6P">iPhone 6Plus</option>
                                    <option value="iPhone 6s Plus">iPhone 6s Plus</option>
                                    <option value="iPhone 7">iPhone 7</option>
                                    <option value="iPhone 7P">iPhone 7 Plus</option>
                                    <option value="iPhone 8">iPhone 8</option>
                                    <option value="iPhone 8P">iPhone 8 Plus</option>
                                    <option value="iPhone X">iPhone X</option>
                                </select>
                                <label htmlFor="floatingSelect">Select item</label>
                            </div>

                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingPassword" required
                                    placeholder="Password" name="serial" value={serial} onChange={e => onInputChange(e)} />
                                <label htmlFor="floatingPassword" maxLength="14" >Enter Serial No</label>
                            </div>
                            {/* <div class="alert alert-primary mt-1" role="alert" >
                                Registration Success !!!
                            </div> */}
                            <div className="modal-footer d-block">

                                <button type="button" className="btn btn-danger float-end" data-bs-dismiss="modal" aria-label="Close" >Close</button>
                                <button type="submit" className="btn btn-warning float-end" >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default View;