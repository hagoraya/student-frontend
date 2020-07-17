import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: null,
            filter: ''
        }
    }


    async componentDidMount() {
        const students = (await axios.get('https://peaceful-chamber-65568.herokuapp.com/')).data
        this.setState({ students })
    }


    onSearch(e) {
        const filter = e.target.value
        this.setState({ filter: filter.toLowerCase() })
    }


    render() {
        const { students, filter } = this.state

        if (students === null) return <p>Loading...</p>

        return (
            <div className="container text-center" style={{ marginTop: "1rem" }}>
                <div className="card">
                    <div className="card-header">
                        <div className="input-group  mb-3">
                            <div className="input-group-prepend">
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-sm"
                                placeholder="Search students"
                                onChange={(e) => { this.onSearch(e) }}

                            />
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        {

                            students.filter(student => student.firstname.includes(filter) || student.lastname.includes(filter)).map((filteredStudent, idx) =>
                                <li key={idx} className="list-group-item">{filteredStudent.firstname} {filteredStudent.lastname}</li>)

                        }
                    </ul>

                </div>
            </div>
        )
    }
}
