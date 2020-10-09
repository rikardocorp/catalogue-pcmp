import React, { Component } from 'react'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavbarText,
} from 'reactstrap';

class Header extends Component {

    state = {
    }

    render() {
        const { className = '', totalProducts=null, path='./'} = this.props
        const localTotal = totalProducts
        const classBag = localTotal > 0 ? 'color-white' : ''
        return (
            <div className={className}>
                <Navbar fixed='' dark expand="xs">

                    <NavbarBrand className='cursor-pointer' onClick={() => Router.push('/')}>
                        pcmp
                    </NavbarBrand>
                    {/* <NavbarToggler onClick={toggle} /> */}
                    <Nav className="mr-auto" navbar>

                    </Nav>
                    <NavbarText>
                        <Link href='/catalogo'>
                            <p className={'m-0 text-right cursor-pointer ' + classBag} style={{width:'100px'}}>
                                <span title='Catalogo' className='cp-icon-store'>
                                    <img style={{ width: '30px' }} src={path + "logo.png"} className='hvr-rotate'></img>
                                </span>
                            </p>
                        </Link>
                    </NavbarText>
                </Navbar>
            </div>
        )
    }
}

export default Header
