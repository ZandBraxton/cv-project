import React from 'react'


class ExperienceInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = ''
    }

    render() {
        return (
                <form>
                    <label>
                        Company Name
                    </label>
                    <input type='text'></input>
                    <label>
                        Position Title
                    </label>
                    <input type='text'></input>
                    <label>
                        Job Tasks
                    </label>
                    <input type='text'></input>
                    <label>
                        Starting date
                    </label>
                    <input type='date'></input>
                    <label>
                        {/* if applicable */}
                        End date 
                    </label>
                    <input type='date'></input>
                </form>
        )
    }
}



export default ExperienceInfo