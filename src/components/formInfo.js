import React from 'react'
import GeneralForm from './GeneralInfo';    
import EducationalInfo from './EducationalInfo';
import ExperienceInfo from './ExperienceInfo';






class FormInfo extends React.Component {
    constructor(props) {
      super(props)
        this.setState = {
            General: ''
        }
  
      
    }
  
    handleChange = (e) => {
        this.setState({General: e})
    }

    render() {
        console.log(this)
      return (
      <div>
        <GeneralForm onGeneralInfo={this.handleChange}></GeneralForm>
        <EducationalInfo></EducationalInfo>
        <ExperienceInfo></ExperienceInfo>
        <input type="submit" value="Submit"></input>
      </div>
      )
    }
   
  }

  export default FormInfo