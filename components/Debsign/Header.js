import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/debsign/main.png'
import mypicxs from '../../asset/imgs/debsign/main-debsign.png'
import shape1 from '../../asset/imgs/home/headershape1.svg'
import shape2 from '../../asset/imgs/home/headershape2.svg'
import shape3 from '../../asset/imgs/home/headershape3.svg'
import Link from 'next/link'

export default function Header() {

    return (
        <>
            <header>
                <Container fluid className="debsign-home">
                    <div className={'image-container-debsign'}>
                        <Image src={mypic.src} layout="fill" className={'image d-none d-sm-block'} />
                        <Image src={mypicxs.src} layout="fill" className={'image d-block d-sm-none'} />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape3.src} className="debsign-home_shape3" />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape1.src} className="debsign-home_shape1" />
                        <img src={shape2.src} className="debsign-home_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col className="mainTitles">
                                <h1 className="debsign-home_title">
                                    Centraliza la<br className="d-none d-sm-block" /> comunicación de <br className="d-none d-sm-block" />
                                    las pantallas en tus<br className="d-none d-sm-block" /> sucursales.
                                </h1>
                                <p className="debsign-home_parraf">
                                    Sistema de <b>cartelería digital</b>
                                </p>
                                <Link href="/contacto">
                                <button className="debsign-home_demobutton">
                                    Solicita una demo
                                </button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
            <Container className="d-flex justify-content-center debsign-home_text">
                <Row>
                    <Col>
                        <h3><b>Organizaciones líderes</b> ya gestionan la <br className="d-none d-sm-block" />
                            experiencia de sus clientes con <b> Debmedia</b></h3>
                    </Col>
                </Row>
            </Container>
        </>
    );
}