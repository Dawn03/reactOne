import React, { Component } from 'react';
class Form extends Component {
    initialState = {
        name: "",
        job:''
    }
    state = this.initialState
    handleChangle = (event) => {
        const { name, value } = event.target;
        console.log(10, event)
        this.setState({
            [name]: value
        })
    }
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    render () {
        const { name, job } = this.state;
        return (
            <form  >
                <label htmlFor="name">Name：</label>
                <input type="text" name="name" id="name" defaultValue={name} onChange={this.handleChange} />
                <label htmlFor="job">Job：</label>
                <input type="text" name="job" id="job" defaultValue={job} onChange={this.handleChange} />
                <input type="submit" value="提交" onClick={ this.submitForm} />
            </form>
        )
    }
}

export default Form;