import React from 'react';
import './footer.css'; 
function footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__topContainer">
          <div className="footer__topRow">
            <div className="footer__column">
              <h5>Questions? Contact us.</h5>
              <ul>
                <li>FAQ</li>
                <li>Help Center</li>
                <li>Account</li>
                <li>Media Center</li>
              </ul>
            </div>
            <div className="footer__column">
              <h5>Netflix Originals</h5>
              <ul>
                <li>Stranger Things</li>
                <li>Money Heist</li>
                <li>Black Mirror</li>
              </ul>
            </div>
            <div className="footer__column">
              <h5>Follow Us</h5>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div className="footer__column">
              <h5>Audio and Subtitles</h5>
              <ul>
                <li>Audio Description</li>
                <li>English</li>
                <li>Spanish</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Netflix Clone</p>
      </div>
    </footer>
  );
}

export default footer;
