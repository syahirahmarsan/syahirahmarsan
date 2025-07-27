<template>
  <section id="hero" class="hero">
    <div class="container">
      <div class="hero-content">
        <h4>Hi, my name is</h4>
        <h1>Syahirah Marsan</h1>
        <h3>I build things for the web.</h3>
        <p>
          I'm a full-stack developer specializing in building 
          exceptional digital experiences. Currently, I'm focused on building accessible, 
          human-centered products.
        </p>
        <b-button class="btn-main" v-scroll-to="'#contact'">Get In Touch</b-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.btn-main {
    background-color: var(--primary-color);
    color: black;
}

.btn-main:hover {
  background-color: var(--primary-color-hover);
  color: black;
}

.hero {
  display: flex;
  align-items: center;
  height: 100vh;
}

.hero-content {
  max-width: 800px;
}

.hero h4 {
  color: var(--primary-color);
  font-family: 'Montserrat', monospace;
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.hero h1 {
  font-size: 4.5rem;
  line-height: 1.1;
  margin-bottom: 10px;
  color: var(--light-color);
}

.hero h3 {
  font-size: 2.5rem;
  line-height: 1.1;
  margin-bottom: 20px;
  color: var(--text-color);
}

.hero p {
  max-width: 540px;
  margin-bottom: 40px;
  color: var(--text-color);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }
  
  .hero h2 {
    font-size: 2.5rem;
  }
}
</style>