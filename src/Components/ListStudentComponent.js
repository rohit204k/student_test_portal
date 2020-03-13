import React,{ Component } from 'react';
import StudentDataService from '../Services/StudentDataService';

class ListStudentComponent extends Component {

    consructor(props) {
        this.state= {
            student:null
            
        }
        super(props)
        this.refreshStudents = this.refreshStudents.bind(this)
    }
    componentDidMount() {
        this.refreshStudents();
    }

    refreshStudent() {
        StudentDataService.retrieveStudent(this.state.studid)
            .then(
                response => {
                    console.log(response);
                }
            )
    }
}
export default ListStudentComponent;