import axios from 'axios'
const DB_URL = 'http://localhost:8080'
const Student_API_URL = `${DB_URL}/student`
  
export const retrieveStudents = (id) => {
     axios.get(`${Student_API_URL}/${id}`)
   }

