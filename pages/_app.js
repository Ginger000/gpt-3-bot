import '../styles/globals.css'

import Footer from '../components/Footer';
function MyApp({ Component, pageProps }) {
  return <div style={{
    background: `linear-gradient(45deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)`,
}}>
    <Component {...pageProps} />
    <Footer />
    </div>
   
}

export default MyApp
