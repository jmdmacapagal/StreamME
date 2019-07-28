import React from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../actions'

import StreamCard from '../components/StreamCard';


class ViewStream extends React.Component { 

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        if (!this.props.stream) return null
        const { title, description } = this.props.stream
        return (
            <StreamCard 
                title={title}
                description={description}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(ViewStream)