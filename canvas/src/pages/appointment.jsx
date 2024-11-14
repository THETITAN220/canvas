  import react from 'react'
export default function appointment() {
  return (
     <>
     <main>
        <div className="appointment">
        <input type="text" class="search-box" placeholder="Search"/>
        <div className="specialist">

        <img src="canvas\src\assets\cardio.jpeg" alt="Cardio" className="cardio" />
        <img src="canvas\src\assets\neuro.jpeg" alt="neuro" className="neuro" />
        <img src="canvas\src\assets\ortho.png" alt="ortho" className="ortho" />
        <img src="canvas\src\assets\phsyciatry.png" alt="phy" className="phy" />

        </div>
        
        </div>
        <div className="gallery">
            <div className="specialist">
            <div className="intro"
            ></div>
            <div className="indetail">

            </div>
            </div>
        </div>
     </main>
     </>
  )
}
