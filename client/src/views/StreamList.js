import React from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../actions'
import { fetchStream } from '../actions'
import List from '../components/containers/List';
import ListItem from '../components/ListItem';

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    renderStreamList = () => {
        return this.props.streams.map(stream => {
            return ( 
                <ListItem 
                    key={stream.id}
                    id={stream.id}
                    title={stream.title}
                    description={stream.description}
                    auth={this.props.auth}
                />
            )
        })
    }

    render() {
        if (!this.props.streams) return null
        return <List streams={this.renderStreamList()} />
    }
}

const mapStateToProps = (state) => {
    return { 
        streams: Object.values(state.streams), 
        auth: state.auth
    }
}

export default connect(mapStateToProps, { fetchStreams, fetchStream })(StreamList)