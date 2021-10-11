import React from 'react'


class EducationalInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = ''
    }

    render() {
        return (
                <div>
                    <label>
                        Degrees earned
                    </label>
                    <input type='text'></input>
                    <label>
                        School Name
                    </label>
                    <input type='text'></input>
                    <label>
                        City and State of institution
                    </label>
                    <input type='text'></input>
                    <label>
                        GPA
                    </label>
                    <input type='number'></input>
                    <label>
                        Starting date
                    </label>
                    <input type='date'></input>
                    <label>
                        End date
                    </label>
                    <input type='date'></input>
                </div>
        )
    }
}



export default EducationalInfo