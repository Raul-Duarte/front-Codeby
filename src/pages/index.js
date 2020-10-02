import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';

import Header from '../assets/header.jpeg'
import Folhas from '../assets/folhas.jpeg'
import Daily from '../assets/daily.jpeg'
import Together from '../assets/together.jpeg'
import Picture from '../assets/picture.jpeg'
import Analisty from '../assets/analisty.jpeg'
import Logo from '../assets/logo.png'
import Grafico from '../assets/graficos.png'

import "./styles.css"


function Index() {
    return (
        <>


            <Container className="main" >
                <Container className="header" fluid>
                    <Image src={Header} className="imgHeader" fluid />
                    <div className="descriptionHeader">
                        <Image src={Logo} className="logo" />
                        <div className="teste">
                            <p>we have ideas to</p>
                            <p>growth your bussiness</p>
                            <Button variant="light">SEE NOW</Button>
                        </div>
                    </div>
                </Container>
                <div className="title">
                    <h1>categories</h1>
                    <h5>discover new possibilities to help you today</h5>
                </div>


                <div className="rowImages">
                    <div className="colImage">
                        <Image src={Folhas} className="img" />
                        <div className="descriptionTop">
                            <h1> nature</h1>
                            <p>t is a long established fact that a reader</p>
                        </div>
                    </div>
                    <div className="colImageMD">
                        <Image src={Daily} className="img" />
                        <div className="descriptionTop">
                            <h1> daily</h1>
                            <p>t is a long established fact that a reader</p>
                        </div>
                    </div>
                </div>

                <div className="rowImages">
                    <div className="colImageBG">
                        <Image src={Together} className="img" />
                        <div className="descriptionCenter">
                            <h1> together</h1>
                            <p>t is a long established fact that a reader</p>
                        </div>
                    </div>
                </div>

                <div className="rowImages">
                    <div className="colImageMD">
                        <Image src={Analisty} className="img" />
                        <div className="descriptionBotton">
                            <h1> analysis</h1>
                            <p>t is a long established fact that a reader</p>
                        </div>
                    </div>
                    <div className="colImage">
                        <Image src={Picture} className="img" />
                        <div className="descriptionTop">
                            <h1> pictures</h1>
                            <p>t is a long established fact that a reader</p>
                        </div>
                    </div>
                </div>

                <Container className="footer" fluid>
                <div className="descriptionFotter">
                    <h1>
                        growth plans
                     </h1>
                    <p>
                        take your business to the next level
                     </p>
                </div>
                <Image src={Grafico} className="imgFooter" />

            </Container>
            </Container>
           

        </>
    )
}

export default Index;