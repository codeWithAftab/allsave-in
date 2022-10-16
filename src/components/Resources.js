import React from 'react'
// import Link from 'rea'
import {
  Link
} from "react-router-dom";
export default function resources() {
  return (
    <section className="services">
        <div className="container main-box">
          <div className="text-container text-center">
            <div className="heading">Resources</div>
            <div className="heading2 h5">Save all social media platform video at one place.</div>
          </div>
          <div className="outline-box m-3 p-2">
            <div className="logos text-center">
              <Link className="btn" to="/instagram-downloader">
                <img src="./assets/images/instagram.png" alt="" srcSet />
                <div className="logo-text">InstaGram</div>
              </Link>
            </div>
            <div className="logos text-center">
              <Link className="btn" to="/facebook-downloader">
                <img src="./assets/images/facebook.png" alt="" srcSet />
                <div className="logo-text">Facebook</div>
              </Link>
            </div>
            <div className="logos text-center">
              <Link className="btn" to="http://instagram.com">
                <img src="./assets/images/twitter.png" alt="" srcSet />
                <div className="logo-text">Twitter</div>
              </Link>
            </div>
            <div className="logos text-center">
              <Link className="btn" to="http://instagram.com">
                <img src="./assets/images/youtube.png" alt="" srcSet />
                <div className="logo-text">YouTube</div>
              </Link>
            </div>
          </div>
        </div> 
      </section>

  )
}
