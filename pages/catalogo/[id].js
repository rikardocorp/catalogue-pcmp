import React from 'react'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import {Container, Row, Col} from 'reactstrap'
import Layout, { siteTitle } from '../../components/Layouts/LayoutA'
import LayoutSection from '../../components/Layouts/LayoutSection'
import Title from '../../components/Catalogue/Title'
// import PrincipalImage from '../../components/Details/PrincipalImage'
import ProductItemSimple from '../../components/Catalogue/ProductItemSimple'
import DetailFicha from '../../components/Details/DetailFicha'

import { database } from '../../config/data'
// import { } from 'reactstrap'

const Index = () => {

    const router = useRouter()
    const { id } = router.query

    const search = (id) => {
        let query = database.filter( item => item.id == id)
        return query
    }
    const query = search(id)
    return (
        <Layout path={'../'}>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <LayoutSection className='mt-2 px-4 pt-2'>
                <Title className='pt-4 text-uppercase'>
                    <span className='cursor-pointer pr-2 hvr-backward' onClick={() => Router.push('/catalogo')}><i className="fas fa-chevron-left"></i> </span>
                    <span>Ficha de Datos</span>
                </Title>
            </LayoutSection>

            <LayoutSection id='main-body' className='mt-4 p-4 p-md-1 w-md-75 position-relative'>
                <Container fluid>
                    <Row className='' >
                        <Col xs={{ size: 12, offset: 0 }} sm={6} md={{ size: 5 }} lg={{ size: 4, offset: 2 }} className='mb-4 mb-md-0'>
                            <ProductItemSimple
                                className='animate__animated animate__slideInLeft' event_tops={() => { }}
                                item={query[0]}
                            />
                        </Col>
                        <Col sm={6} md={{ size: 7 }} lg={{ size: 6}}>
                            <DetailFicha item={query[0]}></DetailFicha>
                        </Col>
                    </Row>
                    <Row className='pt-4 pt-sm-1'>
                        <Col sm={12}>
                            <Title className='pt-4 text-uppercase'>
                                <span>Ubicación Geográfica</span>
                            </Title>
                        </Col>
                        <Col sm={12}>
                            <div className='cp-mapa'>
                                <img src='../images2/mapa.jpg'></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </LayoutSection>
        </Layout>
    );
}

export default Index;