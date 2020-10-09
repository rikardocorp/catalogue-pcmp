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



const ProductItemSimple = ({ item, className = '' }) => {

    let query = item
    console.log(query)
    let { id = null, foto = null, imageUrl = '', nombre_cientifico = '', box = null, size_height = 0, size_width = 0 } = query || {}
    let newStyle = null
    let loading = 'fas fa-spinner fa-spin fa-1x fa-fw'
    if (query) {
        loading = 'fas fa-star'
        newStyle = {
            // backgroundImage: `url(${'./images2/database/' + foto + '.jpg'})`,
            backgroundImage: `url(${'../images2/database/' + foto + '.jpg'})`,
            backgroundPosition: 'center', /* Center the image */
            backgroundRepeat: 'no-repeat', /* Do not repeat the image */
            backgroundSize: 'cover'
            // backgroundSize: newWidth + '%',
            // backgroundPosition: newLeft + '% ' + newTop + '%'
        }
    }

    console.log('ProductItemSimple')
    console.log(newStyle)
    return (
        <article id={'similar-' + id} className={'cp-product cp-bat cursor-pointer mb-4 box-shadow animate__animated animate__flipInX ' + className}>
            <div className='cp-icons z-10'>
                <span className='cp-icon-store cursor-pointer'>
                    <i className={loading}></i>
                </span>
            </div>
            <div className='square-box' style={newStyle}></div>
        </article>
    )
}

export default ProductItemSimple