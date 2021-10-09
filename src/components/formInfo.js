import React from 'react'
import GeneralForm from './GeneralInfo';    
import EducationalInfo from './EducationalInfo';
import ExperienceInfo from './ExperienceInfo';






class FormInfo extends React.Component {
    constructor(props) {
      super(props)
        this.state = {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: ''
        }
  
      
    }

    handleGeneralChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        console.log(event.target.name)
        console.log(this)

        this.setState({ 
            [name]: value 
        })
    }
  


    render() {
        console.log(this.state)
      return (
      <div>
        <GeneralForm handleGeneralChange={this.handleGeneralChange.bind(this)}></GeneralForm>
        <EducationalInfo></EducationalInfo>
        <ExperienceInfo></ExperienceInfo>
        <input type="submit" value="Submit"></input>
      </div>
      )
    }
   
  }

  export default FormInfo