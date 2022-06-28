import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/home/videoShape.svg'
import shape1 from '../../asset/imgs/home/headershape1.svg'
import shape2 from '../../asset/imgs/home/headershape2.svg'
import shape3 from '../../asset/imgs/home/headershape3.svg'
import { useMediaQuery } from 'react-responsive'


export default function Header() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })

    return (
        <>
            <header>
                <Container fluid className="header-salud">
                    <div className="d-none d-sm-block">
                        <img src={shape2.src} className="header-salud_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col>
                                <h1 className="header-salud_title">
                               <b>Mejora la experiencia<br/> de los pacientes</b> dentro y <br/>fuera de las sucursales
                                </h1>

                                <button className="header-salud_demobutton">
                                    Solicitá una demo
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
        </>
    );
}