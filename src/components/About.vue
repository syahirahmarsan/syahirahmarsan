<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">
        <span class="text-section">01.</span> About Me
      </h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            Hello! I'm Siti Nur Syahirah, a full-stack developer based in Cyberjaya who enjoys 
            building things that live on the internet. I develop exceptional websites and web 
            applications that provide intuitive, pixel-perfect user interfaces with efficient 
            and modern backends.
          </p>
          <p>
            Shortly after graduating from University of Malaysia Pahang, I joined the engineering team at 
            Ejen2u International Sdn Bhd where I work on a wide variety of interesting and meaningful projects 
            on a daily basis.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul class="skills-list">
            <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
          </ul>
        </div>
        <div class="about-image">
          <div class="image-wrapper">
            <img :src="require('@/assets/img/portfolio.jpg')" alt="Profile" class="profile-img">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import skills from '@/data/skills.json'

export default {
  name: 'AboutSection',
  data() {
    return {
      skills: skills
    }
  }
}
</script>

<style scoped>
.about-content {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
}

.about-text p {
  margin-bottom: 20px;
  color: var(--text-color);
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 10px;
  padding: 0;
  margin-top: 20px;
  list-style: none;
}

.skills-list li {
  position: relative;
  padding-left: 20px;
  color: var(--text-color);
  font-family: 'Montserrat', monospace;
  font-size: 14px;
}

.skills-list li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--primary-color);
}

.about-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper {
  position: relative;
  width: 300px;
  max-height: 450px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  transition: all 0.3s ease;
}

.profile-img {
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }
  
  .about-image {
    margin-top: 50px;
  }
}
</style>