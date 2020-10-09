import React, { Component } from 'react'
import Router, { useRouter } from 'next/router'
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/Layouts/LayoutA'
import LayoutSection from '../../components/Layouts/LayoutSection'
import Catalogue from '../../components/Catalogue/Catalogue'
import ProductItem from '../../components/Catalogue/ProductItem'
import FormFilter from '../../components/Form/FormFilter'
import Title from '../../components/Catalogue/Title'


import {Button} from 'reactstrap'
import { database as bd } from '../../config/data'

class index extends Component {

    state = {
        originalDatabase: bd,
        database: [].concat(bd, bd, bd),
        text: 'Murciélagos',
        showForm: false
    }

    toggle = () => {
        this.setState(state => { 
            return {
                showForm: !state.showForm 
            }
        })
    }

    onSearch = (data) => {
        let result = this.state.originalDatabase
        Object.keys(data).map( key => {
            let value = data[key]
            result = result.filter(item => {
                return item[key].toLowerCase().includes(value.toLowerCase())
            });
        })
        this.setState(state => {
            return {
                database: result
            }
        })
    }
    render() {

        let { database = [], text = '', showForm=false} = this.state

        let css_animation = showForm ? 'animate__fadeIn' : 'animate__fadeOut'
        return (
            <Layout>
                <Head>
                    <title>{siteTitle}</title>
                </Head>

                <LayoutSection className='mt-2 px-4 pt-2'>
                    <Title className='pt-4 text-uppercase'>
                        <span className='cursor-pointer pr-2 hvr-backward' onClick={() => Router.push('/')}><i className="fas fa-chevron-left"></i> </span>
                        <span> {text}</span>
                        <div className='cp-onclick float-right cp-reset-css'>
                            <Button size='sm' className='cp-button' onClick={()=>this.toggle()}>
                                <i className='fa fa-filter mr-2'></i> Filtros
                            </Button>
                        </div>
                    </Title>
                </LayoutSection>
                {
                    showForm ? (
                        <FormFilter className={'animate__animated ' + css_animation} onSearch={this.onSearch}></FormFilter>
                    ) : null
                }

                <LayoutSection id='main-body' className='mt-4 p-4 p-md-1 w-md-75 position-relative'>
                    <Catalogue id={'bats'} typeCard={'deck'} items={database}
                        colSizes={{ md: 6, xs: 6, sm: 3, lg: 3 }}
                        componentItem={ProductItem}
                        className='cp-catalogue-products'>
                    </Catalogue>
                </LayoutSection>
            </Layout>
        )
    }
}

export default index