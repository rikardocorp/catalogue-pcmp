import React from 'react'
import EllipsisText from "react-ellipsis-text"
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
// import Img from 'react-image';
import { boxCreator } from '../../lib/utils'
import { Col } from 'reactstrap';
import { URL_SEARCH_SKU } from '../../config'
import useSWR from 'swr'
import fetcher from "../../lib/fetcher"

const handler = (id = null, replaceLink = false) => {
    console.log('handler Click')
    if (id != null) {
        if (replaceLink) {
            Router.replace('/catalogo/[id]', '/catalogo/' + id)
        } else {
            Router.push('/catalogo/[id]', '/catalogo/' + id)
        }
    }
}


const ProductItem = ({ data, colSizes = null, replaceLink = false }) => {

    let query = data
    let { id = null, foto = null, imageUrl = '', nombre_cientifico = '', box = null, size_height = 0, size_width = 0 } = query || {}
    let newStyle = null
    let loading = 'fas fa-spinner fa-spin fa-1x fa-fw'
    if (query) {
        loading = 'fas fa-star'
        newStyle = {
            // backgroundImage: `url(${'./images2/database/' + foto + '.jpg'})`,
            backgroundImage: `linear-gradient(to right, rgba(34, 34, 34, 0.0), rgba(68, 68, 68, 0.4)), url(${'./images2/database/' + foto + '.jpg'})`,
            backgroundPosition: 'center', /* Center the image */
            backgroundRepeat: 'no-repeat', /* Do not repeat the image */
            backgroundSize: 'cover'
            // backgroundSize: newWidth + '%',
            // backgroundPosition: newLeft + '% ' + newTop + '%'
        }
    }
    let configCols = colSizes ? colSizes : { sm: 4 }

    return (
        <Col {...configCols} className='hvr-float'>
            <article id={'similar-' + id} onClick={() => handler(id, replaceLink)} className='cp-product cp-bat cursor-pointer mb-4 box-shadow animate__animated animate__flipInX'>
                <div className='cp-icons z-10'>
                    <span className='cp-icon-store cursor-pointer'>
                        <i className={loading}></i>
                    </span>
                </div>
                <div className='square-box' style={newStyle}></div>
                <div className='cp-title'>{nombre_cientifico}</div>
            </article>
        </Col>
    )
}

export default ProductItem