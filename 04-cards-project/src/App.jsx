import React from 'react'
import Cards from './components/Cards'
import { Bookmark } from 'lucide-react';

const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src="https://logoeps.com/wp-content/uploads/2025/02/amazon_icon_logo-logo_brandlogos.net_fgndw.png" alt="" />
          <button>Save <Bookmark /></button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 day ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>Part-Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>
            </div>
          </div>
            <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default App