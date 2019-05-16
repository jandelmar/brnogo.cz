import React from 'react'
import { Helmet } from "react-helmet"
import {Row, Col} from 'reactstrap'

import Layout from '../components/layout'
import Photogallery from '../components/photogallery'

export default () => (
  <Layout>
    <Helmet>
        <title>Gỗ | Fotografie</title>
        <link rel="canonical" href="https://brnogo.cz/fotografie" />
    </Helmet>
    <h1>Fotografie</h1>
    <Row className="mb-4">
        <Col>
            <h2>Interiér</h2>
            <p>interiér od architekta Martiny Hrdiny, fotografie od Kiva photo</p>
            <Photogallery photos={interier} />
        </Col>
    </Row>
    <Row>
        <Col>
            <h2>Naše pokrmy</h2>
            <Photogallery photos={jidlo} />
        </Col>
    </Row>

  </Layout>
)

const interier = [
    {src: `${__dirname}photos/Go-interier-resized-0.jpg`, width: 360, height: 480},
    {src: `${__dirname}photos/Go-interier-resized-1.jpg`, width: 558, height: 480},
    {src: `${__dirname}photos/Go-interier-resized-2.jpg`, width: 640, height: 480},
    {src: `${__dirname}photos/Go-interier-resized-3.jpg`, width: 640, height: 450},
    {src: `${__dirname}photos/Go-interier-resized-4.jpg`, width: 367, height: 480},
    {src: `${__dirname}photos/Go-interier-resized-5.jpg`, width: 640, height: 436},
    {src: `${__dirname}photos/Go-interier-resized-6.jpg`, width: 360, height: 480},
    {src: `${__dirname}photos/Go-interier-resized-7.jpg`, width: 603, height: 480},
    {src: `${__dirname}photos/Go-interier-resized-8.jpg`, width: 621, height: 480},
    {src: `${__dirname}photos/Go-interier-resized-9.jpg`, width: 640, height: 427},
    {src: `${__dirname}photos/Go-interier-resized-10.jpg`, width: 640, height: 480},
    {src: `${__dirname}photos/Go-interier-resized-11.jpg`, width: 640, height: 480}
]

const jidlo = [
    {src: `${__dirname}photos/Go-jidlo-resized-9.jpg`, width: 640, height: 345},
    {src: `${__dirname}photos/Go-jidlo-resized-0.jpg`, width: 640, height: 427},
    {src: `${__dirname}photos/Go-jidlo-resized-1.jpg`, width: 640, height: 427},
    {src: `${__dirname}photos/Go-jidlo-resized-2.jpg`, width: 640, height: 427},
    {src: `${__dirname}photos/Go-jidlo-resized-3.jpg`, width: 640, height: 427},
    {src: `${__dirname}photos/Go-jidlo-resized-4.jpg`, width: 640, height: 427},
    {src: `${__dirname}photos/Go-jidlo-resized-5.jpg`, width: 640, height: 427},
    {src: `${__dirname}photos/Go-jidlo-resized-6.jpg`, width: 640, height: 427},
    {src: `${__dirname}photos/Go-jidlo-resized-7.jpg`, width: 640, height: 427},
    {src: `${__dirname}photos/Go-jidlo-resized-8.jpg`, width: 640, height: 427},
]