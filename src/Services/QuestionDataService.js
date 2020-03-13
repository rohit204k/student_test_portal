import axios from 'axios'

const DB_URL = 'http://localhost:8080'
const QUESTION_API_URL = `${DB_URL}/questions`

class QuestionDataService {

    retrieveAllQuestions(subject) {
        return axios.get(`${QUESTION_API_URL}`);
    }
}

export default new QuestionDataService()