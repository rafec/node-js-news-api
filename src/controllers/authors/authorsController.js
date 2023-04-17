import { Author as AuthorRepository } from "../../models/index.js";
import bcrypt from "bcryptjs";

async function findAllAuthors(request, response) {
    try {
        const authors = await AuthorRepository.findAll({
            include: "news",
            attributes: {
                exclude: ['password']
            }
        });
        response.status(200).json({ message: 'Succesfull operation', data: authors });
    } catch (error) {
        console.log('Error retrieving authors records: ', error);
        response.status(500).json({ message: 'Operation failed', data: [] });
    };
};

async function findAuthor(request, response) {
    const authorId = request.params.id;
    try {
        const author = await AuthorRepository.findByPk(authorId, {
            include: "news",
            attributes: {
                exclude: ['password']
            }
        });
        response.status(200).json({ message: 'Succesfull operation', data: author });
    } catch (error) {
        console.log(`Error retrieving author records with id: ${authorId}`, error);
        response.status(500).json({ message: 'Operation failed', data: {} });
    };
};

async function addAuthor(request, response) {
    try {
        const authorCreated = await AuthorRepository.create({
            name: request.body.name,
            bio: request.body.bio,
            isIndependent: request.body.isIndependent,
            email: request.body.email,
            password: bcrypt.hashSync(request.body.password, 8)
        },
            {
                include: "news",
                attributes: {
                    exclude: ['password']
                }
            }
        );

        response.status(200).json({ message: 'Succesfull operation', data: authorCreated });
    } catch (error) {
        console.log('Error creating author', error);
        response.status(500).json({ message: 'Operation failed', data: [] });
    };
};

async function updateAuthor(request, response) {
    const authorId = request.params.id;
    try {
        await AuthorRepository.update({
            name: request.body.name,
            bio: request.body.bio,
            isIndependent: request.body.isIndependent,
            password: request.body.password
        },
            {
                where: {
                    id: authorId
                }
            }
        );

        const updatedAuthor = await AuthorRepository.findByPk(authorId, {
            include: "news",
            attributes: {
                exclude: ['password']
            }
        });
        response.status(200).json({ message: 'Succesfull operation', data: updatedAuthor });
    } catch (error) {
        console.log(`Error updating author with id: ${authorId}`, error);
        response.status(500).json({ message: 'Operation failed', data: {} });
    };
};

async function deleteAuthor(request, response) {
    const authorId = request.params.id;
    try {
        await AuthorRepository.destroy({
            where: {
                id: authorId
            }
        });

        const allAuthors = await AuthorRepository.findAll({
            include: "news",
            attributes: {
                exclude: ['password']
            }
        });
        response.status(200).json({ message: 'Succesfull operation', data: allAuthors });
    } catch (error) {
        console.log(`Error deleting author with id: ${authorId}`, error);
        response.status(500).json({ message: 'Operation failed', data: [] });
    };
};

export default { findAllAuthors, findAuthor, addAuthor, updateAuthor, deleteAuthor };