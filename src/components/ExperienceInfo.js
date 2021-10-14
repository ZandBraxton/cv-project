import React from 'react'
import ExperienceInput from './ExperienceInput';
import '../styles/ExperienceForm.css'

class ExperienceInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ExperienceChildren: 0
        }

      
    }

    handleAddexperience = (event) => {
        event.preventDefault()
        this.setState({
            ExperienceChildren: this.state.ExperienceChildren + 1
        })

    }

    render() {
        const experience = []
        for(let i = 0; i < this.state.ExperienceChildren; i++) {
            experience.push(<ExperienceInput></ExperienceInput>)
          }

        return (
                <div className="experience-container">
                    <h1>Experience</h1>
                    {experience}
                    <button
                    className="add-experience"
                    type="button"
                    onClick={this.handleAddexperience}
                    >Add experience</button> 
                </div>
        )
    }
}



export default ExperienceInfo