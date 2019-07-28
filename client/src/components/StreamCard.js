import React from 'react'

export default ({ title, description }) => (
    <div className="ui segment" style={{ width: '700px', margin: '0 auto', textAlign: 'center' }}>
        <div className="ui centered card" style={{ width: '500px', padding: '30px' }}>
            <h1 className="header">{title}</h1>
            <div className="image">
                <i className="ui icon huge play" />
            </div>
            <div className="content">
                <p className="description">{description}</p>
            </div>
        </div>
    </div>
)