import './App.css'
import bgPattern from './assets/images/bg-pattern-card.svg'
import victor from './assets/images/image-victor.jpg'
function App() {

  return (
    <>
      <article className="card">
      <img src={bgPattern} alt="" className="profile-back"/>
      <div>
        <div className="image-profile">
          <img src={victor} alt="victor-profile"/>
        </div>
        <div className="description">
          <div className="data">
            <span>Victor Crest</span>
            <span>26</span>
          </div>
          <span>London</span>
        </div>
        <div className="stat">
          <div >
            <span>80K</span>
            <span>Followers</span>
          </div>
          <div>
            <span>803K</span>
            <span>Likes</span>
          </div>
          <div>
            <span>1.4K</span>
            <span>Photos</span>
          </div>
        </div>
      </div>
    </article>
    </>
  )
}

export default App
