import React from 'react';
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Activities from '../components/Activities'
import FAQ from '../components/FAQ'
import Location from '../components/Location'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <NavBar />
        <Hero />
        <Activities />
        <FAQ />
        <Location />
        <Footer />
    </div>
  );
}

export default Home;