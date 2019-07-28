import React from 'react'
import Header from './Header';
import Footer from './Footer';


export default ({ children }) => {
    return (
        <div className="ui container">
            <Header 
                brand='StreamME'
            />

                { children }

            <Footer 
                author='jmdmacapagal'
                description='A simple CRUD React App, using Redux'
                copyright='All rights reserved - 2019'
            />
        </div>
    )
}