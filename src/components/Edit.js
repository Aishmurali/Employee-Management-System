import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Employees from './Employees'
import { v4 as uuid } from "uuid"

const Edit = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [id, setId] = useState("")
    const [desig, setDesig] = useState("")
    const [salary, setSalary] = useState("")
    const [phone, setPhone] = useState("")

    let history = useNavigate()

    var index = Employees.map(function (e) {
        return e.id
    }).indexOf(id)

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Employees[index];
        a.Name = name;
        a.Age = age;
        a.Desig = desig;
        a.Salary = salary;
        a.Phone = phone;

        history("/")
    }

    useEffect(() => {
        setName(localStorage.getItem("Name"))
        setAge(localStorage.getItem("Age"))
        setId(localStorage.getItem("Id"))
        setDesig(localStorage.getItem("Desig"))
        setSalary(localStorage.getItem("Salary"))
        setPhone(localStorage.getItem("Phone"))
    }, [])


    return (
        <>
        <h1 className='text-center text-warning p-3 mt-3'>Update Employee Details</h1>
            <Form className="d-grid gap-2" style={{ margin: "4rem" }}>
                <Form.Group className="mb-3" controlld="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={((e) => setName(e.target.value))}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlld="formAge">
                    <Form.Control type="number" placeholder="Enter Age" value={age} required onChange={((e) => setAge(e.target.value))}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlld="formDesig">
                    <Form.Control type="text" placeholder="Enter Designation" value={desig} required onChange={((e) => setDesig(e.target.value))}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlld="formSalary">
                    <Form.Control type="number" placeholder="Enter Salary" value={salary} required onChange={((e) => setSalary(e.target.value))}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlld="formPhone">
                    <Form.Control type="number" placeholder="Enter Phone.No" value={phone} required onChange={((e) => setPhone(e.target.value))}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </>
    )
}

export default Edit