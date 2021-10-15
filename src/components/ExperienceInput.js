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
        console.log(this.state.IsPreview)
        if(this.state.IsPreview === true) {
            this.setState({
                IsPreview: false
            })
        } else {
            this.setState({
                IsPreview: true
        })
    }
    console.log(this.state)
}


    render() {
        return (
                <div className="edu-exp-input-container">
                    {this.state.IsPreview ? (
                        <div className="edu-exp-preview">
                            <p className="position-title">{this.state.PositionTitle}</p>
                            <div className="edu-exp-info">
                                <p>{this.state.CompanyName}, {this.state.City}, {this.state.State}</p>
                                <p>{this.state.StartDate} - {this.state.EndDate}</p>
                            </div>
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
                                required
                                ></input>
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