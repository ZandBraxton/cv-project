import React from 'react'
import '../styles/EduExp.css'

class ExperienceInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            PositionTitle: "Cashier",
            CompanyName: 'European Car Parts',
            City: 'San Antonio',
            State: 'Texas',
            StartDate: '2021-01-16',
            EndDate: '2021-04-22',
            Tasks: 'I did this and that and this and thatI did this and that and this and thatI did this and that and this and thatI did this and that and this and thatI did this and that and this and that',
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
                            <p className="position-title">{this.state.PositionTitle}</p>
                            <div className="edu-exp-info">
                                <p>{this.state.CompanyName}, {this.state.City}, {this.state.State}</p>
                                <p>{this.state.StartDate} - {this.state.IsPresent ? "Present" : this.state.EndDate}</p>
                            </div>
                            <p className="tasks">Responsibilities: {this.state.Tasks}</p>
                            <button
                                className="edu-exp-edit" 
                                type="button" 
                                onClick={this.onSubmit}
                            >Edit</button>
                            <button
                                className="edu-exp-edit"
                                value={this._reactInternals.key}
                                onClick={this.props.handleDelete} 
                                type="button" 
                            >Delete</button>
                        </div>
                    ) : (
                        <form
                        className="edu-exp-form"
                        onSubmit={this.onSubmit}
                        >
                            <div className="edu-exp-input-group">
                                <label>
                                    Position Title
                                </label>
                                <input 
                                type='text'
                                name="PositionTitle"
                                placeholder="Position Title"
                                value={this.state.PositionTitle}
                                onChange={this.handleGeneralChange}
                                required
                                ></input>
                            </div>

                            <div className="edu-exp-input-group">
                                <label>
                                    Company Name
                                </label>
                                <input
                                type='text'
                                name="CompanyName"
                                placeholder="Company Name"
                                value={this.state.CompanyName}
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
                            <div>
                                <label>Tasks</label>
                                <textarea
                                name="Tasks"
                                value={this.state.Tasks}
                                onChange={this.handleGeneralChange}>
                                </textarea>
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



export default ExperienceInput