import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div >
        <img
          className="navbar__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
        />
        </div>
        <div>
        <ul className="navbar__links">
          <li className="navbar__link">
            <a class="navbar__link" href="https://www.netflix.com/browse">Home<span class="sr-only"></span></a></li>
          <li className="navbar__link">
            <a class="navbar__link" href="https://www.netflix.com/browse">TV Shows<span class="sr-only"></span></a>
          </li>
          <li className="navbar__link">
            <a class="navbar__link" href="https://www.netflix.com/browse/genre/34399">Movies<span class="sr-only"></span></a>
          </li>
          <li className="navbar__link">
            <a class="navbar__link" href="https://www.netflix.com/latest">New & Popular <span class="sr-only"></span></a>
          </li>
          <li className="navbar__link">
            <a class="navbar__link" href="https://www.netflix.com/browse">My List <span class="sr-only"></span></a>
          </li>
          <li className="navbar__link">
            <a class="navbar__link" href="https://www.netflix.com/browse/original-audio" target={"_blank"}>Browse By Language<span class="sr-only"></span></a>
          </li>
        </ul>
      </div>
      <div><img
        className="navbar__avatar"
        src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
        alt="User Avatar"
      />
      </div>

    </div>
  );
}

export default Navbar;
