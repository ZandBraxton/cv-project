import React from 'react'
import EducationalInput from './EducationalInput';
import uniqid from 'uniqid'
import '../styles/EduExp.css'

class EducationalInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            EducationArray: []
        }

      
    }

    handleAddEducation = (event) => {
        event.preventDefault()
        this.setState({
            EducationArray: this.state.EducationArray.concat(
            <EducationalInput 
            key={uniqid()} 
            handleDelete={this.handleDelete.bind(this)}
            ></EducationalInput>)
        })
    }

    handleDelete = (event) => {
        const key = event.target.value
        console.log(event.target.value)

        this.setState({
            EducationArray: this.state.EducationArray.filter((obj) => obj.key !== key) 
        })
    }

    

    render() {
        return (
                <div className="edu-exp-container">
                    <div className="title">
                        <h1>Education</h1>
                        <button
                        className="add-edu-exp material-icons"
                        type="button"
                        onClick={this.handleAddEducation}
                        >add_circle</button>     
                    </div>
                    {this.state.EducationArray}
                </div>
        )
    }
}



export default EducationalInfo