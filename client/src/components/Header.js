import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logIn, logOut } from '../actions'

class Header extends React.Component {

  
    logInHandler = () => {
        this.props.logIn()
    }

    logOutHandler = () => {
        this.props.logOut()
    }

    renderAuthButton = () => {
        return this.props.status.isLogged ?
            <button className="ui button" style={{ width: '120px' }}onClick={this.logOutHandler}>Log Out</button> :
            <button className="ui button" style={{ width: '120px' }}onClick={this.logInHandler}>Log In</button>
    }

    componentDidUpdate() {
        this.renderAuthButton()
    }


    render() {
        const { brand } = this.props
        console.log(this.props.status.isLogged)
        return (
            <header className="ui secondary huge menu">
                <Link className="active item" to="/">
                    {brand}
                </Link> 

                <div className="right menu">
                    <div className="item">
                        <Link className="item" to="/">
                            Streams
                        </Link>
                        <Link className="item" to="/create">
                            Create Stream
                        </Link>
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." />
                            <i className="search link icon"></i>
                        </div>
                    </div>
                    <div className="item">
                        { this.renderAuthButton() }
                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => {
    return { status: state.auth }
}

export default connect(mapStateToProps, { logIn, logOut })(Header)