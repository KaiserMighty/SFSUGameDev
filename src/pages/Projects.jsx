import React from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CardDeck from '../components/CardDeck'

function Projects() {
  return (
    <div>
        <NavBar />
        <CardDeck
          content=
          {[
            [
              'https://img.itch.zone/aW1nLzE2MTY0MjQ3LnBuZw==/315x250%23c/Yvf9hQ.png',
              'ReWired',
              'Alvin-Tulud',
              'https://alvin-tulud.itch.io/rewired'
            ],
            [
              'https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg',
              'BUTCHERED',
              'lindseytong',
              'https://lindseytong.itch.io/butchered'
            ],
            [
              'https://img.itch.zone/aW1nLzE0MTk0MjEwLnBuZw==/315x250%23c/dzUVAR.png',
              'PRJCTB',
              'OrangesAndCrema',
              'https://orangesandcrema.itch.io/prjctb'
            ],
          ]}
        />
        <Footer />
    </div>
  );
}

export default Projects;