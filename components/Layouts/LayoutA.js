import react, {useContext} from 'react'
import Head from 'next/head'
// import Link from 'next/link'
import Navbar from '../Header'
import LoadingBackdrop from '../loadingBackdrop'
import { HEADER_TITLE } from '../../config'
import { colorMode } from '../../lib/utils'
import { ToastProvider, DefaultToast } from 'react-toast-notifications'
import UserContext from '../../components/UserContext';
import { Link } from 'react-scroll'

export const siteTitle = HEADER_TITLE

export const MyCustomToast = ({ children, ...props }) => (
    <DefaultToast className='cp-toast' {...props}>
        {children}
    </DefaultToast>
);

const Layout = ({ children, darkMode = false, isLoading = false, fixed=false, path='./' }) => {
    const { totalProducts = null } = useContext(UserContext);
    let { bgColor, textCorlor, textColorInverted } = colorMode(darkMode)

    // const localTotal = totalMyCart != null ? totalMyCart : totalProducts
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            {
                isLoading ? (
                    <LoadingBackdrop></LoadingBackdrop>
                ): null
            }
            
            {
                fixed ? (
                    <header className='position-fixed w-100 cp-header position-relative'>
                        <Navbar className='w-lg-75 w-xl-75 w-sm-100 w-md-100 m-auto' path={path}></Navbar>
                        <Link className='cp-bg-header' activeClass="active" to={'main-body'} smooth={true} spy={true} offset={-150} duration={1000}>
                        </Link >
                    </header>
                ) : (
                    <header className='bg-dark w-100 cp-header position-relative'>
                        <Navbar className='w-lg-75 w-xl-75 w-sm-100 w-md-100 m-auto' path={path}></Navbar>
                    </header>
                )
            }


            <main className={''}>
                <ToastProvider components={{ Toast: MyCustomToast }}>
                    {children}
                </ToastProvider>
            </main>
        </>
    )
}
 
export default Layout;