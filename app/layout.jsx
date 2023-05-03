import './globals.css'
import Footer from './footer'
import Header from './header'
import Head from './head'
import Provider from './provider'

// Same with _app.jsx
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head />
      <body>   
        <Provider>
          <Header/> 
          <main>
            {children}   
          </main>
          <Footer/>           
        </Provider>              
        </body>
    </html>
  )
}
