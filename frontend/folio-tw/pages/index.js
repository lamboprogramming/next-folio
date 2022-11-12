import Head from 'next/head'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Gillespie | Software Engineer Developer</title>
        <meta name="description" content="Fullstack web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Navbar />
    <Main />
    <Skills />
    <About />
    
    <Projects />
    <Contact />
    </div>
  )
}