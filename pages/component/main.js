import Navigation from './navigation'
import Head from 'next/head'

function Main ({children}) {
    return (
    <div>
        <Head>
        <title>BoxingTR</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        
        <div className="üst-fotolar"></div>
        <Navigation/>
        <div class="üst-content">
        <div class="content">
        <main>{children}</main>
        </div>
        </div>
        <footer>Design by ata</footer>
    </div>
    )
}

export default Main;