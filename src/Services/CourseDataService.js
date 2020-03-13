import axios from 'axios';

const DB_URL = 'http://localhost:8080'
const COURSE_API_URL = `${DB_URL}/courses/`

class CourseDataService {

    retrieveAllCourses() {
        return axios.get(`${COURSE_API_URL}`);
    }
}

export default new CourseDataService()