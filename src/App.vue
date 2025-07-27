<template>
  <div id="app">
    <Navbar />
    <!-- <Sidebar /> -->
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    // Sidebar,
    Hero,
    About,
    Experience,
    Education,
    Projects,
    Contact,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap');

:root {
  --primary-color: #73efb9;
  --primary-color-hover: #64ffda;
  --secondary-color: #272626;
  --light-color: #ccd6f6;
  --dark-color: #1e1e1e;
  --text-color: #8892b0;
  --text-light: #a8b2d1;

  font-family: 'Montserrat', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: inherit;
  background-color: var(--secondary-color) !important;
  color: var(--text-light);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', monospace;
  color: var(--light-color);
  margin-bottom: 1rem;
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: all 0.3s ease;
}

a:hover {
  color: var(--primary-color);
  text-decoration: underline;
}

section {
  padding: 100px 0;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 300px;
  height: 1px;
  background-color: var(--text-color);
  margin-top: 10px;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  background: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  font-family: 'Montserrat', monospace;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: rgba(100, 255, 218, 0.1);
  text-decoration: none;
}

.text-section {
  color: var(--primary-color) !important;
}
</style>