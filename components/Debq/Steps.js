import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Image from 'next/image'
import check_blue from '../../asset/imgs/home/check_blue.svg'
import check_white from '../../asset/imgs/home/check-m.svg'
import fila_virtual from '../../asset/imgs/home/fila-virtual.png'
import step1 from '../../asset/imgs/debq/step1.png'
import step2 from '../../asset/imgs/debq/step2.png'

import { useMediaQuery } from 'react-responsive'
import shape1 from '../../asset/imgs/debq/bk_steps.jpg'


export default function Solutions() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })
    return (
        <>
            <Container className="setps-top">
                <Row>
                    <Col className="setps-section_maintitle">
                        <h3 className="text-center">
                            <b>Mejora la atención</b> <br />y obtén el máximo de tus equipos de trabajo
                        </h3>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="setps-section">
                <Container>
                    <Row>
                        <Col sm={4} xs={4} className="setps-section_div">
                            <div className="setps-section_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>

                            <h4 className="setps-section_title">
                                Aprovecha tus recursos
                                <br className="d-none d-sm-block" /> de forma eficiente
                            </h4>
                            <p className="setps-section_parraf">
                                Para ofrecer un servicio ágil
                                y personalizado
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="setps-section_div">
                            <div className="setps-section_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="setps-section_title">
                                Entrega una experiencia  <br className="d-none d-sm-block" />
                                sin roces a tus clientes
                            </h4>
                            <p className="setps-section_parraf">
                                Con menos espera y más simple.
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="setps-section_div">
                            <div className="setps-section_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={50} className={'img-fluid'} />
                            </div>
                            <h4 className="setps-section_title">
                                Mide indicadores clave  <br className="d-none d-sm-block" />
                                de la atención al cliente
                            </h4>
                            <p className="setps-section_parraf">
                                Adopta mejores prácticas y
                            Adopta mejores prácticas y 
                                Adopta mejores prácticas y
                                mejora la experiencia
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="setps-tabs_debq relative">
            <div className={'setps-tabs_debq_shape1-debq'}>
                    <Image src={shape1.src} layout="fill" className={'left'} />
                </div>
                <Container>
                    <Row>
                        <Col className="setps-tabs_debq_content d-none d-sm-block">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                                <Row>
                                    <Col sm={{ span: 5}} className="mt-5">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="1">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={step1.src} width={800}
                                                            height={700} className={'img-fluid'} />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="2">
                                                <Row>
                                                    <Col className="text-center mt-4">
                                                        <Image src={step2.src} width={370}
                                                            height={300} className={'img-fluid'} />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="3">
                                                <Row>
                                                    <Col className="text-center">
                                                        {/* <Image src={fila_virtual.src} width={210}
                                                            height={400} className={'img-fluid'} /> */}
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="4">
                                                <Row>
                                                    <Col className="text-center">
                                                        {/* <Image src={fila_virtual.src} width={210}
                                                            height={400} className={'img-fluid'} /> */}
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                    <Col sm={7} className="relative">
                                    <h3 className="text-left mb-4">
                            <b>Define el Customer journey </b> <br />y mejora el proceso.
                        </h3>
                                        <span className="lineSteps-debq"></span>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="1" className="setps-tabs_debq_content-nav"><div className="numberStep">1</div> <div className="textStep">Tu cliente hace el check in <br />
                                                    desde el Kiosko, Totem o móvil.</div> </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="2" className="setps-tabs_debq_content-nav"><div className="numberStep">2</div> <div className="textStep">Es llamado por voz, pantallas,  <br />WhastApp o SMS.
                                                </div></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="3" className="setps-tabs_debq_content-nav"><div className="numberStep">3</div> <div className="textStep">Es atendido por un colaborador, <br /> que conoce al cliente.</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="4" className="setps-tabs_debq_content-nav"><div className="numberStep">4</div> <div className="textStep">El cliente valora el servicio a
                                                    <br />través del sistema de encuestas.</div></Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <button className="citas-home_demobutton">
                                    Solicitá una demo
                                </button>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                    {/* <Row className="setps-accordion_content d-block d-sm-none">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" className="setps-accordion_content-nav">
                                <Accordion.Header >Citas Online</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-tabs_debq_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className="setps-accordion_content-nav">Gestión de filas</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-tabs_debq_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className="setps-accordion_content-nav">Fila Vitual</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-tabs_debq_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className="setps-accordion_content-nav">Cartelería digital</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-tabs_debq_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header className="setps-accordion_content-nav">Atención Virtual</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-tabs_debq_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header className="setps-accordion_content-nav">Enuestas</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-tabs_debq_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header className="setps-accordion_content-nav">Preatendedor</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-tabs_debq_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Row> */}

                </Container>
            </Container>

        </>
    );
}