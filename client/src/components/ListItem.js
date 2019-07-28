import React from 'react'
import { Link } from 'react-router-dom'

export default ({ title, description, id, auth }) => {

    const renderAdminButtons = auth.isLogged ? 
        <div className="right floated content" key={id}>
            <Link className="ui yellow button" to={`/stream/edit/${id}`}>Edit</Link>
            <Link className="ui red button" to={`/stream/delete/${id}`}>Delete</Link>
        </div> : ''

    return (
        <div className="item" style={{ padding: '10px' }}>
            {renderAdminButtons}
            <i className="large middle aligned icon camera" alt="avatar" />
            <div className="content">
                <Link className="header" to={`/stream/${id}`}>{title}</Link>
                <div className="description">{description}</div>
            </div>
        </div>
    )
}