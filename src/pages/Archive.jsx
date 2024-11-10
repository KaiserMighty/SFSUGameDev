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
            title='Fall 24 Competitive Game Jam'
            content=
            {[
              [
                'https://img.itch.zone/aW1nLzE4NDE5NjI4LnBuZw==/300x240%23c/PVo6e%2B.png',
                'Lost Spirit',
                'OrangesAndCrema',
                'https://orangesandcrema.itch.io/lost'
              ],
              [
                'https://img.itch.zone/aW1nLzE4Mzk3NDIyLnBuZw==/300x240%23c/wT46ty.png',
                'bobo and popo',
                'Alvin-Tulud, Puncake321, elvisjiang',
                'https://alvin-tulud.itch.io/bobo-and-popo'
              ],
              [
                'https://img.itch.zone/aW1nLzE4Mzk4OTU2LnBuZw==/300x240%23c/aoZZCU.png',
                'Soul Below',
                'DandaDev, patrocks, worldtrueblue',
                'https://dandadev.itch.io/soul-below'
              ],
              [
                'https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg',
                'AI Pictionary',
                'kareem8',
                'https://kareem8.itch.io/ai-pictionary'
              ],
              [
                'https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg',
                'Limbo Dichotomy',
                'Shaheel64',
                'https://shaheel64.itch.io/limbo-dichotomy'
              ],
              [
                'https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg',
                'Splashy Penguin',
                'AcidCenturion',
                'https://acidcenturion.itch.io/splashy-penguin'
              ],
              [
                'https://img.itch.zone/aW1nLzE4NDE0NTIwLnBuZw==/300x240%23c/Eue8cw.png',
                'Snowball Strike',
                'Tuna43',
                'https://tuna43.itch.io/snowball-strike'
              ],
            ]}
          />
          <Category
            title='Fall 24 Beginner Game Jam'
            content=
            {[
              [
                'https://img.itch.zone/aW1nLzE3OTQ4ODU3LnBuZw==/300x240%23c/REGaGb.png',
                'Skyler Green',
                'Peter Siri, SecureSubset, RosaRoja',
                'https://solidparker.itch.io/skyler-green'
              ],
              [
                'https://img.itch.zone/aW1nLzE3OTQ4Mjk1LnBuZw==/300x240%23c/Ty9r9a.png',
                'time game',
                'akonuj',
                'https://akonuj.itch.io/time-game'
              ],
              [
                'https://img.itch.zone/aW1nLzE3OTI3ODM2LnBuZw==/300x240%23c/E9k45%2B.png',
                "McBoom's KaBoom!",
                'DandaDev, Puncake321, worldtrueblue',
                'https://dandadev.itch.io/mcbooms-kaboom'
              ],
              [
                'https://img.itch.zone/aW1nLzE3OTQ1ODA3LnBuZw==/300x240%23c/IMcTp2.png',
                'Groundhog Day',
                'Alvin-Tulud, OrangesAndCrema, SplashOfAzure',
                'https://alvin-tulud.itch.io/groundhog-day'
              ],
              [
                'https://img.itch.zone/aW1nLzE3OTQxMDUwLnBuZw==/300x240%23c/CH56bd.png',
                'Contingency',
                'declanitory',
                'https://www.roblox.com/games/92371236744551/Contingency'
              ],
              [
                'https://img.itch.zone/aW1nLzE3OTgzNTkwLnBuZw==/300x240%23c/q%2B6CXk.png',
                'Space Run',
                'Ayssis',
                'https://ayssis.itch.io/space-run'
              ],
            ]}
          />
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