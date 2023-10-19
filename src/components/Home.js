import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Employees from './Employees'

const Home = () => {

    let history = useNavigate();

    const handleEdit = (id, name, age, desig, salary, phone) => {
        localStorage.setItem("Name", name)
        localStorage.setItem("Age", age)
        localStorage.setItem("Id", id)
        localStorage.setItem("Desig", desig)
        localStorage.setItem("Salary", salary)
        localStorage.setItem("Phone", phone)
    }

    const handleDelete = (id) => {
        var index = Employees.map(function (e) {
            return e.id
        }).indexOf(id)

        Employees.splice(index, 1);

        history("/")
    }

    return (
        <>
        <h1 className='text-center text-warning p-3 mt-3'>View Employee Details</h1>
            <div style={{ margin: "5rem" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Designation
                            </th>
                            <th>
                                Salary
                            </th>
                            <th>
                                Phone.No
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                                ?
                                Employees.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.Name}
                                            </td>
                                            <td>
                                                {item.Age}
                                            </td>
                                            <td>
                                                {item.Desig}
                                            </td>
                                            <td>
                                                {item.Salary}
                                            </td>
                                            <td>
                                                {item.Phone}
                                            </td>
                                            <td>
                                                <Link to={"/edit"}>
                                                    <Button onClick={() => handleEdit(item.id, item.Name, item.Age, item.Desig, item.Salary, item.Phone)}> Update </Button>
                                                </Link>
                                                &nbsp;
                                                <Button onClick={() => handleDelete(item.id)}> DELETE </Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "No Data Available"
                        }
                    </tbody>
                </Table>
                <br />
                <Link className='d-grid gap-2' to={"/create"}>
                    <Button size='lg'>Create</Button>
                </Link>
            </div>
        </>
    )
}

export default Home