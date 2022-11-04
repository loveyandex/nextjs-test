import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component data-theme="emerald" {...pageProps} />
}

export default MyApp
