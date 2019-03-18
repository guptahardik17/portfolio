import React, { Component } from 'react';
import Palette from './components/Palette.js';
import Preloader from './components/Preloader.js';
import Front from './components/Front.js';
import Works from './components/Works.js';
import Testimonials from './components/Testimonials.js';
import About from './components/About.js';
import Developments from './components/Developments.js';
import Awards from './components/Awards.js';
import Contact from './components/Contact.js';
import ImagePopup from './components/ImagePopup.js';

import data from './json/profile.json';

class App extends Component {
  render() {
    const profile = data;
    console.log(profile.Name);
    return (
      <div>
        {/* <Palette />*/}
        <Preloader />
        <Front name={profile.Name} work={profile.Work} experience={profile.Experience} social={profile.Contact.Social}/>
        <section className="container position-relative" id="portfolio">
          <Works projects={profile.Projects}/>
        </section>

        <section className="container-fluid sdm-bg" id="reviews">
          <Testimonials testimonials={profile.Testimonials}/>
        </section>

        <section className="container" id="about_me">
          <About about={profile.About} workhistory={profile.WorkHistory} education={profile.Education} achievements={profile.Achievements}/>
        </section>

        <section className="container-fluid sdm-bg" id="expertness">
          <Developments skills={profile.Skills}/>
        </section>

        <section className="container" id="hire_me">
          <Awards />
        </section>

        <section className="container-fluid sdm-bg" id="contact_me">
          <Contact contact={profile.Contact}/>
        </section>

        <ImagePopup />
      </div>
    );
  }
}

export default App;
