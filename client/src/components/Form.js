import React from 'react'
import { Field, reduxForm } from 'redux-form'

class Form extends React.Component {

    renderInputField = ({ input, label }) => {
        return (
            <>
                <label>{label}</label>
                <input {...input} />
            </>
        )
    }

    submitHandler = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.submitHandler)} className="ui form" style={{ width: '500px', margin: '0 auto' }}>
                <Field
                    name="title"
                    type="text"
                    className="field"
                    component={this.renderInputField}
                    label="Stream Title"
                />

                <Field
                    name="description"
                    type="text"
                    className="field"
                    component={this.renderInputField}
                    label="Stream Description"
                />

                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'streamForm'
})(Form)