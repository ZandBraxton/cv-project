import React from 'react'
import FormInfo from './components/formInfo';
import CvRender from './components/cvRender';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ''


    
  }

  render() {
    console.log(this)
    return (
    <div>
      <FormInfo></FormInfo>
      <CvRender></CvRender>
    </div>
    )
  }
 
}

export default App;
