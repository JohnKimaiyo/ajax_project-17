const { Router } = requre('express');
const { Console } = require('console');
const express = require('express');
const router = express.Router();

// employee data
let employee = [
    {
        id: '_a',
        first_name: 'john',
        last_name: 'wilson',
        email: 'john@gmail.com',
        gender: 'male',
        ip_address: '127.0.0.1'
    },
    {
        id: '_b',
        first_name: 'janet',
        last_name: 'wilson',
        email: 'janet@gmail.com',
        gender: 'female',
        ip_address: '127.0.0.1'
    },
]

// get id
let getID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// get emplopyees
router.get('/employee', (request, response) => {
    response.json(employees);
});

// post request
router.post('/employee', (request, response) => {
    let employee = {
        id: getID(),
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        gender: request.body.gender,
        ip_address: request.body.ip_address
    }
    employees.push(employee);
    console.log(`POST request received at server ..${new Date().toLocaleDateString()}`);
    response.json(employee);
});

// put request
router.put('/employees/:id', (request, response) => {
    let empID = request.params.id;
    let updateEmployee = {
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.gender,
        ip_address: request.body.ip_address
    };
    let existingEmployee = employees.find((employee) => {
        return employee.id === empID;
    });
    employee.splice(employees.indexof(existingEmployee), 1, updateEmployee);
    console.log(`PUT request received at server ..${new Date().toLocaleTimeString()}`);
    response.json({ msg: 'PUT request is a success' });
});

// delete request
router.delete('/employees/:id', (request, response) => {
    let empID = request.params.id;
    employees = employees.filter((employee) => {
        return employee.id !== empID;
    });
    console.log(`delete requeest received at server .. ${new Date().toLocaleTimeString()}`);
    response.json({ msg: 'delete request is a success' });
});

module.exports = router;