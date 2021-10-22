import React, {useState} from 'react'
import ExperienceInput from './ExperienceInput';
import uniqid from 'uniqid'
import '../styles/EduExp.css'


export default function ExperienceInfo() {
    const [experienceInfo, setExperienceInfo] = useState([])


    const handleAddexperience = (e) => {
        e.preventDefault()
        setExperienceInfo((prevState) => [...prevState, uniqid()])
    }

    const handleDelete = (id) => {
        setExperienceInfo((prevState) => {
            let expArray = prevState.filter((key) => key !== id)
            return expArray
        })
    }

    const experienceComponents = experienceInfo.map((id) => (
        <ExperienceInput key={id} id={id} handleDelete={handleDelete}/>
    ))

        return (
                <div className="edu-exp-container">
                    <div className="title">
                    <h1>Experience</h1>
                        <button
                        className="add-edu-exp material-icons"
                        type="button"
                        onClick={handleAddexperience}
                        >add_circle</button> 
                    </div>
                    {experienceComponents}
                </div>
        )
}
