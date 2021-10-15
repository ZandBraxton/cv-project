import React from 'react'
// import uniqid from 'uniqid'
import '../styles/EduExp.css'

class EducationalInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            DegreesEarned: '',
            SchoolName: '',
            City: '',
            State: '',
            GPA: '',
            StartDate: '',
            EndDate: '',
            IsPresent: false,
            IsPreview: false
        }
    }

    handleGeneralChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.IsPreview === true) {
            this.setState({
                IsPreview: false
            })
        } else {
            this.setState({
                IsPreview: true
        })
    }
}

handlePresent = (e) => {
    if(this.state.IsPresent === true) {
        this.setState({
            IsPresent: false
        })
    } else {
        this.setState({
            IsPresent: true
    })
}
}

   


    render() {
        return (
                <div className="edu-exp-input-container">
                    {this.state.IsPreview ? (
                        <div className="edu-exp-preview">
                            <p className="degree">{this.state.DegreesEarned}</p>
                            <div className="edu-exp-info">
                                <p>{this.state.SchoolName}, {this.state.City}, {this.state.State}</p>
                                <p>GPA: {this.state.GPA}</p>
                                <p>{this.state.StartDate} - {this.state.IsPresent ? "Present" : this.state.EndDate}</p>
                            </div>
                            <button
                                className="edu-exp-edit" 
                                type="button" 
                                onClick={this.onSubmit}
                            >Edit</button>
                            <button
                                className="edu-exp-edit" 
                                type="button"
                                value={this._reactInternals.key}
                                onClick={this.props.handleDelete} 
                            >Delete</button>
                        </div>
                    ) : (
                        <form
                        className="edu-exp-form"
                        onSubmit={this.onSubmit}
                        >
                            <div className="edu-exp-input-group">
                                <label>
                                    Degree
                                </label>
                                <input 
                                type='text'
                                name="DegreesEarned"
                                placeholder="Degree"
                                value={this.state.DegreesEarned}
                                onChange={this.handleGeneralChange}
                                required
                                ></input>
                            </div>

                            <div className="edu-exp-input-group">
                                <label>
                                    School Name
                                </label>
                                <input
                                type='text'
                                name="SchoolName"
                                placeholder="School Name"
                                value={this.state.SchoolName}
                                onChange={this.handleGeneralChange}
                                required></input>
                            </div>
                          <div className="edu-exp-input-group">
                            <label>
                                City and State of institution
                            </label>
                                <div className="city-state">
                                <input
                                type='text'
                                name="City"
                                placeholder="City"
                                value={this.state.City}
                                onChange={this.handleGeneralChange}
                                required
                                ></input>
                                <input
                                type='text'
                                name="State"
                                placeholder="State"
                                value={this.state.State}
                                onChange={this.handleGeneralChange}
                                required
                                ></input>
                                </div>
                          </div>
                            <div className="edu-exp-input-group">
                                <label>
                                    GPA
                                </label>
                                <input
                                type='number'
                                name="GPA"
                                placeholder="GPA"
                                value={this.state.GPA}
                                onChange={this.handleGeneralChange}
                                required
                                ></input>
                            </div>
                            <div className="edu-exp-input-group">
                                <label>
                                    Starting date
                                </label>
                                <input
                                type='date'
                                name="StartDate"
                                value={this.state.StartDate}
                                onChange={this.handleGeneralChange}
                                required
                                ></input>
                            </div>
                            <div className="edu-exp-input-group">
                                <label>
                                    End date
                                </label>
                                <input
                                type='date'
                                name="EndDate"
                                value={this.state.EndDate}
                                onChange={this.handleGeneralChange}
                                disabled={this.state.IsPresent}
                                required
                                ></input>
                                <div className="checkbox">
                                    <label>To Present?</label>
                                    <input
                                    type="checkbox"
                                    onClick={this.handlePresent}></input>
                                </div>
                            </div>
                            <button
                            className="edu-exp-submit"
                            >Submit</button>
                        </form>
                    )} 
                </div>
        )
    }
}



export default EducationalInput