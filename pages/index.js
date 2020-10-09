import React, { Component } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layouts/LayoutA'
import LayoutSection from '../components/Layouts/LayoutSection'
import Banner from '../components/Banners/BannerA'
import BannerB from '../components/Banners/BannerB'

import { BANNER_IMAGES, BANNER_BOTTOM } from '../config'
import LinkCategories from '../containers/LinkCategories'
import CataRecommender from '../containers/CataRecommender'
import Title from '../components/Catalogue/Title'
import Slider  from '../components/Slider/Slider'
import {Row, Col} from 'reactstrap'

class index extends Component {

    state = {}
    render() {
        return (
            <Layout fixed={true}>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <Slider images={BANNER_IMAGES}></Slider>

                <LayoutSection id='main-body' className='mt-5 p-5 p-md-1 w-md-75'>
                    <Title className='pt-5 text-uppercase'>
                        Murciélagos
                    </Title>

                    <Row>
                        <Col>
                            <p>
                                Los quirópteros (Chiroptera), conocidos comúnmente como murciélagos,N 1​ son un orden de mamíferos placentarios cuyas extremidades superiores se desarrollaron como alas. Con unas 1100 especies actuales, representan aproximadamente un 20 % de todas las especies de mamíferos,4​ lo que los convierte, tras los roedores, en el segundo orden más diverso de esta clase. Están presentes en todos los continentes, excepto en la Antártida.
                            </p>

                                <p>
                                    Son los únicos mamíferos capaces de volar,N 2​ se han extendido por casi todo el mundo y han ocupado una gran variedad de nichos ecológicos diferentes. Desempeñan un papel ecológico vital como polinizadores, como controladores de plagas de insectos y pequeños vertebrados y también desarrollan un importante papel en la dispersión de semillas; muchas plantas tropicales dependen por completo de los murciélagos.6​ Tienen las patas anteriores transformadas en alas y más de la mitad de especies conocidas se orientan y cazan por medio de la ecolocalización.7​ Cerca de un 70 % de las especies son insectívoras y la mayor parte del resto frugívoras; algunas se alimentan de pequeños vertebrados como ranas, roedores, aves, peces, otros murciélagos o, como en el caso de los vampiros (subfamilia Desmodontinae), de sangre.
                            </p>
                        </Col>
                        <Col>
                            <p className='text-center'>
                                <img width='150' src={'./images2/bat.png'}></img>
                            </p>
                            <p>Su tamaño varía desde los 29-33 mm de longitud y 2 g de peso del murciélago moscardón (Craseonycteris thonglongyai), a los más de 1,5 m de envergadura y 1,2 kg de peso del zorro volador filipino (Acerodon jubatus).</p>
                            <p>A causa de los hábitos nocturnos de la mayoría de sus especies y la ancestral incomprensión sobre cómo podían «ver» en la oscuridad, se les consideraba y todavía se les considera a menudo como habitantes siniestros de la noche, y con pocas excepciones (como en China, donde son símbolo de felicidad y provecho) en la mayor parte del mundo los murciélagos han causado temor entre los humanos a lo largo de la historia; iconos imprescindibles en el cine de terror, aparecen en multitud de mitos y leyendas y, aunque en realidad solo tres especies son hematófagas, a menudo se les asocia a los vampiros mitológicos.</p>
                        </Col>
                    </Row>
                </LayoutSection>

                <LayoutSection className='mt-5 w-100'>
                    <footer>
                        <img className='w-100' src={'./images2/bat1.jpg'}></img>
                    </footer>
                </LayoutSection>
            </Layout>
        )
    }
}

export default index