import React from 'react'
import ExperienceInput from './ExperienceInput';
import uniqid from 'uniqid'
import '../styles/EduExp.css'


class ExperienceInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ExperienceArray: []
        }

      
    }

    handleAddexperience = (event) => {
        event.preventDefault()
        this.setState({
            ExperienceArray: this.state.ExperienceArray.concat(
                <ExperienceInput
                key={uniqid()}
                handleDelete={this.handleDelete.bind(this)}
                ></ExperienceInput>)
        })
    }

    handleDelete = (event) => {
        const key = event.target.value
        console.log(event.target.value)

        this.setState({
            ExperienceArray: this.state.ExperienceArray.filter((obj) => obj.key !== key) 
        })
    }

    render() {
      

        return (
                <div className="edu-exp-container">
                    <div className="title">
                    <h1>Experience</h1>
                        <button
                        className="add-edu-exp material-icons"
                        type="button"
                        onClick={this.handleAddexperience}
                        >add_circle</button> 
                    </div>
                    {this.state.ExperienceArray}
                </div>
        )
    }
}



export default ExperienceInfo