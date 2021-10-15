import React from 'react'
import FormInfo from './components/formInfo';
import './styles/App.css'
// import CvRender from './components/cvRender';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ''  
  }



  render() {
    return (
    <div>
      <FormInfo></FormInfo>
    </div>
    )
  }
 
}

export default App;
