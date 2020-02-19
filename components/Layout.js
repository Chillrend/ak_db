import React from 'react'
import {Head} from "next/head"
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/override.css'
import Fonts from "../Font";
import {Container} from "reactstrap";

class Layout extends React.Component{
    componentDidMount() {
        Fonts();
    }

    render() {
        return(
            <>
                <Header />
                <Container fluid={true}>
                    {this.props.children}
                </Container>
            </>
        )
    }
}

export default Layout;