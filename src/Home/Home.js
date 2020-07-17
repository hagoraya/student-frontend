import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: null
        }
    }


    async componentDidMount() {
        const students = (await axios.get('https://peaceful-chamber-65568.herokuapp.com/')).data
        this.setState({ students })
    }


    render() {
        const { students } = this.state

        if (students === null) return <p>Loading...</p>

        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>All students</h3>
                    </div>
                    <ul className="list-group list-group-flush">
                        {
                            students.map((student, idx) =>
                                <li key={idx} class="list-group-item">{student.firstname} {student.firstname}</li>

                            )
                        }
                    </ul>

                </div>
            </div>
        )
    }
}
