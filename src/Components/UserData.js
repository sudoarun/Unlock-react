import React, { useState, useEffect } from 'react';
import {  getDocs, collection,doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import RegForm from './service/RegistrationForm';
import View from './View';
import { Link } from 'react-router-dom';

function UserData() {
    let [users, setUsers] = useState([])
    const userRef = collection(db, "users")

    useEffect(() => {
        getUsers();
    }, []);
      
    
      const getUsers = async () => {
        const data = await getDocs(userRef);
        // console.log(data);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        // getUsers();
      }

    const deleteUser = async (id) => {
        
            
            
                var result = window.confirm("Are you sure to delete?");
                if(result){
                    const userDoc = doc(db, "users", id);
                    await deleteDoc(userDoc);
                    setTimeout(() => {
                                alert("User is deleted!!!");
                            }, 1000);
                }
              
        
      }
      

    return (
        <div className="container mt-5">
            <RegForm />
            <View />
            <form >
                <div className="card m-3 p-5">
                    <h3 className="text-center bg-success p-2 text-white rounded-2 mb-5" style={{ marginTop: '-72px' }}>Search User</h3>
                    <div className="row ">
                        <div className="col-lg-6 col-md-6">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter Name" id="inputGroupFile02" />
                            </div>

                            <button type="button" className="btn btn-success me-2">Search</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="row">
                <div className="col-lg-12 mt-3 col-md-6">
                    <div className="adminTable card m-3 tg p-5" style={{ paddingBottom: '10px' }}>
                        <h3 className="text-center bg-danger p-2 text-white rounded-2 mb-5" style={{ marginTop: '-72px' }}>Registered
                            Users</h3>
                        <div className="row">
                            <div className="col-lg-12 col-md-6 tableScroll">
                                <table className="table table-striped" >
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Serial</th>
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user, index) => (
                                            <tr key={user.id}>
                                                <th >{index + 1}</th>
                                                <td>{user.name}</td>
                                                <td>{user.device}</td>
                                                <td>{user.serial}</td>
                                                <td>
                                                    <span className="btn btn-danger icon" role="button" onClick={() => deleteUser(user.id)}>
                                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                    </span>&nbsp;
                                                    {/* <Link to={`/edit/&{users.id}`}></Link> */}
                                                    <Link className="btn btn-primary icon" id='edit' to={`/edit/${user.id}`} role="button" >
                                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                    </Link>

                                                </td>
                                            </tr>
                                        ))}



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default UserData;