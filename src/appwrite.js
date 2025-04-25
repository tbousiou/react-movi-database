import { Client, Databases, ID, Query } from 'appwrite'
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const APPWRITE_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client();
client
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(PROJECT_ID);

const database = new Databases(client);


export const updateSearchCount = async (searchTerm, movie) => {
    try {

        if (!searchTerm || searchTerm.trim() === '') {
            console.error('Invalid search term provided.');
            return;
        }

        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal('searchTerm', searchTerm),
        ]);

        if (result.documents.length > 0) {
            const document = result.documents[0];
            const documentId = document.$id;
            const documentCount = document.count || 0;
            // Update the count and last search
            await database.updateDocument(DATABASE_ID, COLLECTION_ID, documentId, {
                count: documentCount + 1,
            });
        } else {
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm: searchTerm,
                count: 1,
                movie_id: movie.id,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            });
        }

    } catch (error) {
        console.error(error);
    }
}

export const getTrendingMovies = async () => {
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.orderDesc('count'),
            Query.limit(5)
        ]);

        return result.documents;

    } catch (error) {
        console.error(error);
    }
}
