
const jwt = require('jsonwebtoken');

const verify = (req, res) => {
    try {
        // this is a dumy api
        const token = jwt.sign({ email: 'gayashansameera30@gmail.com', password: "123" }, 'shhhhh');

        const sample = {
            accessToken: token,
            loggedUser: {
                name: "Gayashan sameera",
                email: "gayashansameera30@gmail.com",
                primaryRole: "Admin",
                jwtToken: token
            }
        };

        return res.status(200).json(sample);
    } catch (error) {
        return res.status(400).json({ message: "Invalid parameter supplied." });
    }
}

export default verify;