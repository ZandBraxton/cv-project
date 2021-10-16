import React from 'react'
import GeneralForm from './components/GeneralInfo';
import EducationalInfo from './components/EducationalInfo';
import ExperienceInfo from './components/ExperienceInfo';
import './styles/App.css'


export default function App() {
  return (
  <div>
    <GeneralForm></GeneralForm>
    <EducationalInfo></EducationalInfo>
    <ExperienceInfo></ExperienceInfo>
  </div>
  ) 
}