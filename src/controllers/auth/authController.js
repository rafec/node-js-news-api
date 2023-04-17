import { Author as AuthorRepository } from "../../models/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

async function login(request, response) {
    try {
        const { email, password } = request.body;

        const author = await AuthorRepository.findOne({
            where: { email }
        });

        if (!author) {
            return response.status(404).json({ message: 'Operation failed', data: 'User not found' });
        };

        const passwordIsValid = bcrypt.compareSync(password, author.password);

        if (!passwordIsValid) {
            return response.status(401).json({message: 'Operation failed', data: 'User not authorized'});
        };

        const token = jwt.sign({id: author.id}, jwtSecret, {
            expiresIn: 86400
        });

        return response.status(200).json({message: 'Operation succesfull', data: {token: token}});
    } catch (error) {
        console.error('Login error: ', error);
        return response.status(500).json({message: 'Operation failed', data: {}});
    };
};

export default login;