import React from 'react'
import { useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../Services/EmployeeService';
import { useNavigate,useParams } from 'react-router-dom';
import { useEffect } from 'react';

const EmployeeComponent = () => {

    const[firstName,setFirstName] = useState('');
    const[lastName,setLastName] = useState('');
    const[email,setEmail] = useState('');

    const {id} = useParams();


    const navigator = useNavigate();

    useEffect(()=>{
        if(id){
        getEmployee(id).then((response) =>{
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
        }).catch(error =>{
            console.error(error);
        })

    }
    },[id])

    function saveOrUpdateEmployee(e){
        e.preventDefault();

        const employee = {firstName,lastName,email}
        console.log(employee);
        
        if(id){
            updateEmployee(id,employee).then((response)=>{
                console.log(response.data);
                navigator('/employees');
            }).catch(error=>{
                console.error(error);
            })
        }else {
            createEmployee(employee).then((response)=>{
            console.log(response.data);
            navigator('/employees')
        })
        .catch(error => {
            console.error(error)
        })   
        }
        
    }

    function pageTitle(){
        if(id){
            return  <h2 className='text-center'>Update Employee</h2>
        }else{
        return <h2 className='text-center'>Add Employee</h2>

        }
    }

  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='card'>
                    {
                        pageTitle()
                    }
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className='form-label'>First Name:</label>
                                <input type="text" 
                                    placeholder='Enter Employee first Name'
                                    name='firstName'
                                    value={firstName}
                                    className='form-control'
                                    onChange={(e) => setFirstName(e.target.value)}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className='form-label'>Last Name:</label>
                                <input type="text" 
                                    placeholder='Enter Employee last Name'
                                    name='lastName'
                                    value={lastName}
                                    className='form-control'
                                    onChange={(e) => setLastName(e.target.value)}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className='form-label'>Email:</label>
                                <input type="email" 
                                    placeholder='Enter Employee Email'
                                    name='email'
                                    value={email}
                                    className='form-control'
                                    onChange={(e) => setEmail(e.target.value)}>
                                </input>
                            </div>

                            <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default EmployeeComponent