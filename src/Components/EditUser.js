import axios from 'axios';
import { getDocs, collection } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import {useNavigate, useParams } from "react-router-dom";
import { db } from '../firebase';


const EditUser = () => {
    const {id}=useParams();
    // alert(id)
    let redirect=useNavigate();

    useEffect(()=>{
        getUsers();
    },[]);

    const [user, setUser] = useState({
        name: "",
        device: "",
        serial: ""
    });
    
    const userRef = collection(db, "users");


    const { name, device, serial, mobile } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

      const getUsers = async () => {
        const data = await getDocs(userRef);
        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        // setUser({name: setUser.name, device: setUser.device, serial: setUser.serial, mobile: setUser.mobile});
      }


    const onUpdateData = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        redirect('/user');
        
    }


    return (
        <form onSubmit={e => onUpdateData(e)}>

            <div className='container'>

                <h5 className='text-center mb-3 mt-5'>Edit User</h5>

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

                <div className="form-floating mb-2" >
                    <input type="number" className="form-control" id="floatingPassword" required
                        placeholder="Password" name="mobile" value={mobile} onChange={e => onInputChange(e)} />
                    <label htmlFor="floatingPassword" maxLength="14" >Mobile No.</label>
                </div>

                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingPassword" required
                        placeholder="Password" name="serial" value={serial} onChange={e => onInputChange(e)} />
                    <label htmlFor="floatingPassword" maxLength="14" >Enter Serial No</label>
                </div>
                {/* <div class="alert alert-primary mt-1" role="alert" >
                                Registration Success !!!
                            </div> */}
                <div className='mt-2 '>
                    <button type="submit" className="btn btn-warning" >Update</button>
                </div>
            </div>
        </form>

    )
}

export default EditUser;