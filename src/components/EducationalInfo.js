import React from 'react'
import EducationalInput from './EducationalInput';
import '../styles/EducationalForm.css'

class EducationalInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            EducationChildren: 1
        }

      
    }

    handleAddEducation = (event) => {
        event.preventDefault()
        this.setState({
            EducationChildren: this.state.EducationChildren + 1
        })

    }

    render() {
        const education = []
        for(let i = 0; i < this.state.EducationChildren; i++) {
            education.push(<EducationalInput></EducationalInput>)
          }

        return (
                <div className="educational-container">
                    <h1>Education</h1>
                    {education}
                    <button
                    type="button"
                    onClick={this.handleAddEducation}
                    >Add Stuff</button> 
                </div>
        )
    }
}



export default EducationalInfo