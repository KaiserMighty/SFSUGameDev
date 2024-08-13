import React from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Category from '../components/Category';
import CategoryContainer from '../components/CategoryContainer';

function Archive() {
  return (
    <div>
        <NavBar />
        <CategoryContainer>
          <Category
            title='Spring 24 Game Jam'
            content=
            {[
              [
                'https://img.itch.zone/aW1nLzE1MjYxNTI0LnBuZw==/315x250%23c/kLRUV5.png',
                'FireStarter',
                'OrangesAndCrema',
                'https://orangesandcrema.itch.io/firestarter'
              ],
              [
                'https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg',
                'HelloWorldGame',
                'AcidCenturion',
                'https://acidcenturion.itch.io/helloworldgamejam2024'
              ],
              [
                'https://img.itch.zone/aW1nLzE1MjYxMjY4LnBuZw==/315x250%23c/mhPbMo.png',
                'Yet Another Auto Shooter™',
                'Mighty',
                'https://unikmey.itch.io/yet-another-auto-shooter'
              ],
              [
                'https://img.itch.zone/aW1nLzE1MjYxMTY5LnBuZw==/315x250%23c/pJF5VU.png',
                'Calico Contrast',
                'Alvin-Tulud',
                'https://alvin-tulud.itch.io/calico-contrast'
              ],
              [
                'https://img.itch.zone/aW1nLzE1MjY3MTA5LnBuZw==/315x250%23c/LLZXag.png',
                'Graduation Maze Game',
                'bobaTeam',
                'https://bobateam.itch.io/graduation-maze-game'
              ],
              [
                'https://img.itch.zone/aW1nLzE1MjcxOTI1LnBuZw==/315x250%23c/71SDJg.png',
                'The Knights Rescue',
                'DandaDev',
                'https://dandadev.itch.io/the-knights-rescue'
              ],
            ]}
          />
        </CategoryContainer>
        <Footer />
    </div>
  );
}

export default Archive;