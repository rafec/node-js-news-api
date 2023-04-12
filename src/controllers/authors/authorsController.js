import { Author as AuthorRepository } from "../../models/index.js";

async function findAllAuthors(request, response) {
    try {
        const authors = await AuthorRepository.findAll();
        response.status(200).json({ message: 'Succesfull operation', data: authors });
    } catch (error) {
        console.log('Error retrieving authors records: ', error);
        response.status(500).json({ message: 'Operation failed', data: [] });
    };
};

async function findAuthor(request, response) {
    try {
        const authorId = request.params.id;
        const author = await AuthorRepository.findByPk(authorId);
        response.status(200).json({ message: 'Succesfull operation', data: author });
    } catch (error) {
        console.log(`Error retrieving author records with id: ${authorId}`, error);
        response.status(500).json({ message: 'Operation failed', data: [] });
    };
};

async function addAuthor(request, response) {
    try {
        const authorCreated = await AuthorRepository.create({
            name: request.body.name,
            bio: request.body.bio,
            isIndependent: request.body.isIndependent
        });

        response.status(200).json({ message: 'Succesfull operation', data: authorCreated });
    } catch (error) {
        console.log('Error creating author', error);
        response.status(500).json({ message: 'Operation failed', data: [] });
    };
};

async function updateAuthor(request, response) {
    try {
        const authorId = request.params.id;

        await AuthorRepository.update({
            name: request.body.name,
            bio: request.body.bio,
            isIndependent: request.body.isIndependent
        },
            {
                where: {
                    id: authorId
                }
            }
        );

        const updatedAuthor = await AuthorRepository.findByPk(authorId);
        response.status(200).json({ message: 'Succesfull operation', data: updatedAuthor });
    } catch (error) {
        console.log(`Error updating author with id: ${authorId}`, error);
        response.status(500).json({ message: 'Operation failed', data: [] });
    };
};

async function deleteAuthor(request, response) {
    try {
        const authorId = request.params.id;
        await AuthorRepository.destroy({
            where: {
                id: authorId
            }
        });

        const authors = await AuthorRepository.findAll();
        response.status(200).json({ message: 'Succesfull operation', data: authors });
    } catch (error) {
        console.log(`Error deleting author with id: ${authorId}`, error);
        response.status(500).json({ message: 'Operation failed', data: [] });
    };
};

export default { findAllAuthors, findAuthor, addAuthor, updateAuthor, deleteAuthor };