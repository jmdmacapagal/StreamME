import React from 'react'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../actions'

import Form from '../components/Form';

class EditStream extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = formValue => {
        this.props.editStream(this.props.match.params.id, formValue)
    }

    render() {
        return (
            <div>
                <Form 
                    initialValues={this.props.stream}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(EditStream)