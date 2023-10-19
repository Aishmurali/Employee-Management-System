import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Employees from './Employees'
import { v4 as uuid } from "uuid"

const Add = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [desig, setDesig] = useState("")
    const [salary, setSalary] = useState("")
    const [phone, setPhone] = useState("")

    let history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let a = name;
        let b = age;
        let c = desig;
        let d = salary;
        let f = phone;

        Employees.push({ id: uniqueId, Name: a, Age: b, Desig: c, Salary: d, Phone: f });

        history("/")
    }

    return (
        <>
         <h1 className='text-center text-warning p-3 mt-3'>Add Employee Details</h1>
            <Form className="d-grid gap-2" style={{ margin: "4rem" }}>
                
                <Form.Group className="mb-3" controlld="formName">Enter Employee Name:
                    <Form.Control type="text" placeholder="Enter Name" required onChange={((e) => setName(e.target.value))}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlld="formAge">Enter Employee Age:
                    <Form.Control type="number" placeholder="Enter Age" required onChange={((e) => setAge(e.target.value))}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlld="formDesig">Enter Employee Designation:
                    <Form.Control type="text" placeholder="Enter Designation" required onChange={((e) => setDesig(e.target.value))}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlld="formSalary">Enter Employee Salary:
                    <Form.Control type="number" placeholder="Enter Salary" required onChange={((e) => setSalary(e.target.value))}>
                    </Form.Control>
                    </Form.Group>
                <Form.Group className="mb-3" controlld="formPhone">Enter Employee Phone Number:
                    <Form.Control type="number" placeholder="Enter Phone.no" required onChange={((e) => setPhone(e.target.value))}>
                    </Form.Control>
                    </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>

        </>
    )
}

export default Add