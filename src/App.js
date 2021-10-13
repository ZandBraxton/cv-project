import React from 'react'
import FormInfo from './components/formInfo';
import './styles/App.css'
// import CvRender from './components/cvRender';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ''  
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('You clicked submit')
      
  }

  render() {
    console.log(this)
    return (
    <div className="container">
      <FormInfo></FormInfo>
      {/* <CvRender></CvRender> */}
    </div>
    )
  }
 
}

export default App;
