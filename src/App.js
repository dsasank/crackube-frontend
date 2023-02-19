import './App.css';
import styles from "./styles.module.css"
import image1 from "./image1.png"
import image2 from "./image2.png"
import logoimage from "./logo.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faCalendar, faTelevision, faPeopleGroup, faCrown, faStar, faBook, faWindowMaximize, faAppleWhole, faTriangleCircleSquare, faHeart, faDownload, faFire, faBell, faTrophy, faPerson, faArrowRight, faArrowDown, faDoorOpen, } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.navitems}>
          <input type="text" className={styles.inpfield} placeholder="Search for Produts"></input>
          <div className={styles.navright}>
            <button type="button" className={styles.navicon}><FontAwesomeIcon icon={faFire} color="black" /></button>
            <button type="button" className={styles.navicon}><FontAwesomeIcon icon={faBell} color="black" /></button>
            <button type="button" className={styles.navicon}><FontAwesomeIcon icon={faTrophy} color="black" /></button>
            <button type="button" className={styles.navicon}><FontAwesomeIcon icon={faPerson} color="black" /></button>
          </div>
          </div>
        <div className={styles.poiu}>
          <div className={styles.leftside}>
            <ul>
              <div >
                <img src={logoimage} className={styles.logoimage}></img>
              </div>
              <div className={styles.listing}>
                <p className={styles.high}><FontAwesomeIcon icon={faCalendar} color="white" />Dashboard</p>
                <p><FontAwesomeIcon icon={faRocket} color="white" />Game Store</p>
                <p><FontAwesomeIcon icon={faTelevision} color="white" />Live Stream Tv</p>
                <p><FontAwesomeIcon icon={faPeopleGroup} color="white" />Team Memeber</p>
                <p><FontAwesomeIcon icon={faBook} color="white" />My Library </p>
                <p><FontAwesomeIcon icon={faStar} color="white" />Thropies</p>
                <p><FontAwesomeIcon icon={faCrown} color="white" />Badges</p>
                <h1 className={styles.logout}><FontAwesomeIcon icon={faDoorOpen} color="white" />Logout</h1>
              </div>
              </ul>
          </div>
          <div className={styles.centerpage}>
            <div>
              <div className={styles.centeralli}>
                <div>
                  <p className={styles.frozen1}>100% RAW FUN</p>
                  <p className={styles.frozen2}>YOUR OWN STORY IN <h2 className={styles.verse}>FROZENVERSE</h2></p>
                  <button type="button" className={styles.buttons}>PLAY NOW</button>
                </div>
                <div>
                  <img src={image2} className={styles.imagee2}></img>
             </div>
                </div>
              <div>
                <p className={styles.popular}>Popular Games <FontAwesomeIcon icon={faArrowDown} color="white" /></p>
                <div className={styles.midpage}>
                  <div><p className={styles.miditem}><img src={image1} className={styles.images} ></img><h3 className={styles.noct}>Nocturnal <FontAwesomeIcon icon={faHeart} color="black" className={styles.likes} />343<FontAwesomeIcon icon={faDownload} color="black" />999</h3><p className={styles.midtext}>Its your last night shift as a forklift operator at…</p><div className={styles.imgcompo}><div><FontAwesomeIcon icon={faWindowMaximize} color="white" /><FontAwesomeIcon icon={faAppleWhole} color="white" /><FontAwesomeIcon icon={faTriangleCircleSquare} color="white" /></div><button type="button" className={styles.lastbutton}>Download</button></div></p></div>
                  <div><p className={styles.miditem}><img src={image1} className={styles.images} ></img><h3 className={styles.noct}>Nocturnal <FontAwesomeIcon icon={faHeart} color="black" className={styles.likes} />343<FontAwesomeIcon icon={faDownload} color="black" />999</h3><p className={styles.midtext}>Its your last night shift as a forklift operator at…</p><div className={styles.imgcompo}><div><FontAwesomeIcon icon={faWindowMaximize} color="white" /><FontAwesomeIcon icon={faAppleWhole} color="white" /><FontAwesomeIcon icon={faTriangleCircleSquare} color="white" /></div><button type="button" className={styles.lastbutton}>Download</button></div></p></div>
                  <div><p className={styles.miditem}><img src={image1} className={styles.images} ></img><h3 className={styles.noct}>Nocturnal <FontAwesomeIcon icon={faHeart} color="black" className={styles.likes} />343<FontAwesomeIcon icon={faDownload} color="black" />999</h3><p className={styles.midtext}>Its your last night shift as a forklift operator at…</p><div className={styles.imgcompo}><div><FontAwesomeIcon icon={faWindowMaximize} color="white" /><FontAwesomeIcon icon={faAppleWhole} color="white" /><FontAwesomeIcon icon={faTriangleCircleSquare} color="white" /></div><button type="button" className={styles.lastbutton}>Download</button></div></p></div>
                  <div><p className={styles.miditem}><img src={image1} className={styles.images} ></img><h3 className={styles.noct}>Nocturnal <FontAwesomeIcon icon={faHeart} color="black" className={styles.likes} />343<FontAwesomeIcon icon={faDownload} color="black" />999</h3><p className={styles.midtext}>Its your last night shift as a forklift operator at…</p><div className={styles.imgcompo}><div><FontAwesomeIcon icon={faWindowMaximize} color="white" /><FontAwesomeIcon icon={faAppleWhole} color="white" /><FontAwesomeIcon icon={faTriangleCircleSquare} color="white" /></div><button type="button" className={styles.lastbutton}>Download</button></div></p></div>
                  <div><p className={styles.miditem}><img src={image1} className={styles.images} ></img><h3 className={styles.noct}>Nocturnal <FontAwesomeIcon icon={faHeart} color="black" className={styles.likes} />343<FontAwesomeIcon icon={faDownload} color="black" />999</h3><p className={styles.midtext}>Its your last night shift as a forklift operator at…</p><div className={styles.imgcompo}><div><FontAwesomeIcon icon={faWindowMaximize} color="white" /><FontAwesomeIcon icon={faAppleWhole} color="white" /><FontAwesomeIcon icon={faTriangleCircleSquare} color="white" /></div><button type="button" className={styles.lastbutton}>Download</button></div></p></div>
                  <div><p className={styles.miditem}><img src={image1} className={styles.images} ></img><h3 className={styles.noct}>Nocturnal <FontAwesomeIcon icon={faHeart} color="black" className={styles.likes} />343<FontAwesomeIcon icon={faDownload} color="black" />999</h3><p className={styles.midtext}>Its your last night shift as a forklift operator at…</p><div className={styles.imgcompo}><div><FontAwesomeIcon icon={faWindowMaximize} color="white" /><FontAwesomeIcon icon={faAppleWhole} color="white" /><FontAwesomeIcon icon={faTriangleCircleSquare} color="white" /></div><button type="button" className={styles.lastbutton}>Download</button></div></p></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightpage}>
            <div className={styles.rightside}>
              <img src={image1} className={styles.rightimage}></img>
              <p className={styles.righttext}>KeyCars is a free multiplayer only game where each player can play using a single key on a keyboard. Press a key to join, then hold that key to turn the vehicle. Clash into players, shoot projectiles or trick them into driving off the ledge…
                KeyCars is a free multiplayer only game where each player can play using a single key on a keyboard. Press a key to join, then hold that key to turn the vehicle. Clash into players, shoot projectiles or trick them into driving off the ledge…
                KeyCars is a free multiplayer only game where each player can play using a single key on a keyboard. Press a key to join, then hold that key to turn the vehicle. Clash into players, shoot projectiles or trick them into driving off the ledge…
                KeyCars is a free multiplayer only game where each player can play using a single key on a keyboard. Press a key to join, then hold that key to turn the vehicle. Clash into players, shoot projectiles or trick them into driving off the ledge…
                KeyCars is a free multiplayer onlygame where each player can play using a single key on a keyboard. Press a key to join, then hold that key to turn the vehicle. Clash into players, shoot projectiles or trick them into driving off the ledge…</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
