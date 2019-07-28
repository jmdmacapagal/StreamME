import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStream, deleteStream } from '../actions'

import Modal from '../components/Modal';
import history from '../history'


class DeleteStream extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions = () => {
        return (
            <>
                <button 
                    onClick={() => this.props.deleteStream(this.props.match.params.id)} 
                    className="ui negative button"
                >
                    Delete
                </button>
                <Link to='/'><button className="ui button">Cancel</button></Link>
            </>
        )
    }

    render() {
        if (!this.props.stream) return null
        return (
            <Modal 
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                onDismiss={() => history.push('/')}
                action={this.renderActions()}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(DeleteStream)