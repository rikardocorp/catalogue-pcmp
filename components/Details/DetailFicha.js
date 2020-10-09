import React, { useState } from 'react'
import { Input, Button } from 'reactstrap'
import { MESSAGE_ADD_CART } from '../../config/index'
import {Row, Col} from 'reactstrap'

const DetailFicha = ({ item = null }) => {
    const [SizeId, setSizeId] = useState(null)
    const { reino = '', nombre_cientifico = '', filo = '', clase = '', orden='', genero='', alimentacion=''} = item || {}

    let col1 = 'col-3 col-sm-5 col-lg-4'
    let col2 = 'col-3 col-sm-7 col-lg-8'

    return (
        <div className='cp-detail-product'>
            <span>{reino}</span>
            <h5><strong>{nombre_cientifico}</strong></h5>

            <Row className='pt-3'>
                <div className={col1 + ' text-right'}>
                    <strong>Filo : </strong>
                </div>
                <div className={col2}>
                    <span>{filo}</span>
                </div>
            </Row>
            <Row className='pt-2'>
                <div className={col1 + ' text-right'}>
                    <strong>Clase : </strong>
                </div>
                <div className={col2}>
                    <span>{clase}</span>
                </div>
            </Row>
            <Row className='pt-2'>
                <div className={col1 + ' text-right'}>
                    <strong>Orden : </strong>
                </div>
                <div className={col2}>
                    <span>{orden}</span>
                </div>
            </Row>
            <Row className='pt-2'>
                <div className={col1 + ' text-right'}>
                    <strong>Género : </strong>
                </div>
                <div className={col2}>
                    <span>{genero}</span>
                </div>
            </Row>
            <Row className='pt-2'>
                <div className={col1 + ' text-right'}>
                    <strong>Alimentación : </strong>
                </div>
                <div className={col2}>
                    <span>{alimentacion}</span>
                </div>
            </Row>


            <Row>

                {/* <div id='price' className='col-4 col-sm-6 cp-price'>
                    <div className='price-original'><span>S/ {price.ListPrice}</span></div>
                    <div className='price-online'><span><strong>S/ {price.Price}</strong></span></div>
                    <div className='ibk'>
                        <div>
                            <img src='/images/logo_ibk.png'></img>
                        </div>
                        <div>
                            <span><strong>S/ {price.PriceIBK}</strong></span>
                            <span className='tag'>{price.discount}%</span>
                        </div>
                    </div>
                </div> */}
            </Row>
        </div>
    )
}

export default DetailFicha
