import React from 'react'
import Header from '../components/Header'
import PostHeader from '../components/PostHeader'
import Footer from '../components/Footer'
import PostFooter from '../components/PostFooter'
import Helmet from 'react-helmet'

import './all.css'
import favicon from '../img/favicon.ico'

require("prismjs/themes/prism-tomorrow.css");

class Template extends React.Component {
    render() {
        const { location, children } = this.props
        let header, footer;

        if (location.pathname === '/') {
            header = ( <Header/> )
            footer = ( <Footer/> )
        } else {
            header = ( <PostHeader/> );
            footer = ( <PostFooter/> );
        }
        return (
            <div className="container">
                <Helmet>
                    <link rel="shortcut icon" type="image/ico" href={favicon} />
                </Helmet>
                {header}
                {children()}
                {footer}
            </div>
        )
    }
}

export default Template

