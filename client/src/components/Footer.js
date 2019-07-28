import React from 'react'


export default ({ author, description, copyright }) => {
    return (
        <footer style={{ textAlign: 'center' }}>
            <hr />
            <div>{author} - {description}</div>
            <div>{copyright}</div>
        </footer>
    )
}
