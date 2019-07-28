import React from 'react'
import Form from '../components/Form';
import { connect } from 'react-redux'
import { createStream } from '../actions'

class CreateStream extends React.Component {

    onSubmitHandler = (formValues) => {
        this.props.createStream(formValues)
    }

    render() {
        return(
            <div>
                <Form onSubmit={this.onSubmitHandler} />
            </div>
        )
    }
}

export default connect(null, { createStream })(CreateStream)