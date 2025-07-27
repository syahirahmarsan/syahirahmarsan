<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a href="#" class="logo">
            <img :src="require('@/assets/img/logo.png')" alt="Logo">
        </a>
      </div>
      <div class="navbar-links">
        <ul class="mb-0">
          <li v-for="(link, index) in links" :key="index">
            <a :href="link.url" v-scroll-to="link.scrollTo">{{ link.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNavbar',
  data() {
    return {
      links: [
        { text: 'About', url: '#about', scrollTo: '#about' },
        { text: 'Experience', url: '#experience', scrollTo: '#experience' },
        { text: 'Work', url: '#projects', scrollTo: '#projects' },
        { text: 'Education', url: '#education', scrollTo: '#education' },
        { text: 'Contact', url: '#contact', scrollTo: '#contact' }
      ]
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: var(--secondary-color);
  backdrop-filter: blur(10px);
  padding: 20px 0;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: 'Montserrat', monospace;
  font-size: 1.5rem;
  color: var(--primary-color);
}

.logo img {
  height: 30px;
}

.navbar-links ul {
  display: flex;
  list-style: none;
}

.navbar-links li {
  margin-left: 30px;
}

.navbar-links a {
  color: var(--light-color);
  font-family: 'Montserrat', monospace;
  font-size: 14px;
}

.navbar-links a:hover {
  color: var(--primary-color);
  text-decoration: none;
}
</style>