import { News, News as NewsRepository } from "../../models/index.js";

async function findAllNews(request, response) {
    try {
        const news = await NewsRepository.findAll();
        response.status(200).json({ message: 'Succesfull operation', data: news });
    } catch (error) {
        console.log('Error retrieving news records', error);
        response.status(500).json({ message: 'Operation failed', data: [] });
    };
};

async function findNews(request, response) {
    const newsId = request.params.id;
    try {
        const news = await NewsRepository.findByPk(newsId);
        response.status(200).json({ message: 'Succesfull operation', data: news });
    } catch (error) {
        console.log(`Error retrieving news records with id: ${newsId}`, error);
        response.status(500).json({ message: 'Operation failed', data: {} });
    };
};

async function addNews(request, response) {
    try {
        const newsCreated = await NewsRepository.create({
            title: request.body.title,
            content: request.body.content,
            category: request.body.category,
            author_id: request.body.author_id
        });

        response.status(200).json({ message: 'Succesfull operation', data: newsCreated });
    } catch (error) {
        console.log('Error creating news', error);
        response.status(500).json({ message: 'Operation failed', data: [] });
    };
};

async function updateNews(request, response) {
    const newsId = request.params.id;
    try {
        await NewsRepository.update({
            title: request.body.title,
            content: request.body.content,
            category: request.body.category
        },
            {
                where: {
                    id: newsId
                }
            }
        );

        const updatedNews = await NewsRepository.findByPk(newsId);
        response.status(200).json({ message: 'Operation succesfull', data: updatedNews });
    } catch (error) {
        console.log(`Error updating news with id: ${newsId}`, error);
        response.status(500).json({ message: 'Operation failed', data: {} });
    };
};

async function deleteNews(request, response) {
    const newsId = request.params.id;
    try {
        await NewsRepository.destroy({
            where: {
                id: newsId
            }
        });

        const allNews = await NewsRepository.findAll();
        response.status(200).json({ message: 'Succesfull operation', data: allNews });
    } catch (error) {
        console.log(`Error deleting news with id: ${newsId}`, error);
        response.status(500).json({ message: 'Operation failed', data: [] });
    };
};

export default { findAllNews, findNews, addNews, updateNews, deleteNews };