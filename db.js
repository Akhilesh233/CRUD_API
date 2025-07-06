import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

var users = [
    // This is a sample user
    // {
    //     firstName : 'Ram',
    //     lastName : 'Kumar',
    //     email : 'ramkumar344@gmail.com'
    // }
];

// GET all Users
const userRoutes = router.get('/', (req, res) => {
    if (users.length !== 0)
        res.send(users);
    else
        res.send('There are no users. The database is empty. Please use post method to post users in the database.');
});

// POST Users
router.post('/', (req, res) => {
    const user = req.body;

    users.push({ id: uuidv4(), ...user });

    res.send(`${user.firstName} has been added to the Database`);
});

// GET Specific Users
router.get('/:id', (req, res) => {
    const {id} = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);

});

// PATCH Users
router.patch('/:id', (req, res) => {
    const {id} = req.params;

    const {firstName, lastName, email} = req.body;

    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (email) user.email = email;

    res.send(`User with the id:${id} has been updated.`);
})

// DELETE Users
router.delete('/:id', (req, res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with id:${id} has been deleted from the database.`);
});

export { userRoutes };