import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Image from 'next/image'
import check_blue from '../../asset/imgs/home/check_blue.svg'
import check_white from '../../asset/imgs/home/check-m.svg'
import step1 from '../../asset/imgs/citas/step1.png'
import step2 from '../../asset/imgs/citas/step2.png'
import step3 from '../../asset/imgs/citas/step3.png'
import { useMediaQuery } from 'react-responsive'
import shape1 from '../../asset/imgs/mobile/shapeTabs.svg'


export default function Solutions() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })
    return (
        <>
            <Container className="setps-top">
                <Row>
                    <Col className="setps-section_citas_maintitle">
                        <h3 className="text-center">
                            <b>Organiza el flujo de tus sucursales</b>
                        </h3>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="setps-section_citas">
                <Container>
                    <Row>
                        <Col sm={4} xs={4} className="setps-section_citas_div">
                            <div className="setps-section_citas_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_citas_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>

                            <h4 className="setps-section_citas_title">
                                Anticípate y conoce

                                <br className="d-none d-sm-block" />qué clientes te visitarán.
                            </h4>
                            <p className="setps-section_citas_parraf">
                                Ofrece una experiencia personalizada y eleva la satisfacción
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="setps-section_citas_div">
                            <div className="setps-section_citas_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_citas_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="setps-section_citas_title">
                                Conoce cuántos
                                <br className="d-none d-sm-block" />
                                recursos necesitas
                            </h4>
                            <p className="setps-section_citas_parraf">
                                Mejora el proceso de los clientes <br />
                                que llegan a tus sucursales.
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="setps-section_citas_div">
                            <div className="setps-section_citas_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_citas_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={50} className={'img-fluid'} />
                            </div>
                            <h4 className="setps-section_citas_title">
                                Evita esperas  <br className="d-none d-sm-block" />innecesarias
                            </h4>
                            <p className="setps-section_citas_parraf">
                                Acorta el tiempo que tus clientes pasan dentro de las sedes.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="setps-tabs_citas relative">
                <div className={'setps-tabs_citas_shape1'}>
                    <Image src={shape1.src} layout="fill" className={'left'} />
                </div>
                <Container>
                    <Row>
                        <Col className="setps-tabs_citas_content d-none d-sm-block">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                                <Row>
                                    <Col sm={{ span: 5}}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="1">
                                                <Row>
                                                    <Col className="text-center mt-5">
                                                        <Image src={step1.src} width={780}
                                                            height={600} className={'img-fluid'} />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="2">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={step2.src} width={620}
                                                            height={550} className={'img-fluid'} />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="3">
                                                <Row>
                                                    <Col className="text-center mt-5">
                                                        <Image src={step3.src} width={400}
                                                            height={280} className={'img-fluid'} />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                    <Col sm={7} className="relative">
                                        <span className="lineSteps-citas"></span>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="1" className="setps-tabs_citas_content-nav"><div className="numberStep">1</div> <div className="textStep">Obtiene una cita.</div> </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="2" className="setps-tabs_citas_content-nav"><div className="numberStep">2</div> <div className="textStep">Hace el check in en la sucursal.
                                                </div></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="3" className="setps-tabs_citas_content-nav mb-0"><div className="numberStep">3</div> <div className="textStep">Ingresa al flujo interno para
                                                    ser atendido.</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
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
                                        <Col xs={6} className="setps-tabs_citas_content-title">
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
                                        <Col xs={6} className="setps-tabs_citas_content-title">
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
                                        <Col xs={6} className="setps-tabs_citas_content-title">
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
                                        <Col xs={6} className="setps-tabs_citas_content-title">
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
                                        <Col xs={6} className="setps-tabs_citas_content-title">
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
                                        <Col xs={6} className="setps-tabs_citas_content-title">
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
                                        <Col xs={6} className="setps-tabs_citas_content-title">
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