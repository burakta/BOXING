import Navigation from './navigation'
import Head from 'next/head'

function Main ({children}) {
    return (
    <div>
        <Head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RN5FMXVDV8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RN5FMXVDV8');
</script>
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
