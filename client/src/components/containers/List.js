import React from 'react'

export default ({ streams }) => {
    return (
        <div className="ui segment">
            <div className="ui celled list">
                { streams }
            </div>
        </div>
    )
}