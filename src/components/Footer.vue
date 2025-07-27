<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-copyright">
          <p>Designed & Built by Syahirah Marsan</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  data() {
    return {
      links: [
        { url: 'https://github.com/yourusername', icon: 'fab fa-github' },
        { url: 'https://linkedin.com/in/yourusername', icon: 'fab fa-linkedin-in' },
        { url: 'https://twitter.com/yourusername', icon: 'fab fa-twitter' },
        { url: 'https://instagram.com/yourusername', icon: 'fab fa-instagram' }
      ]
    }
  }
}
</script>

<style scoped>
.footer {
  padding: 30px 0;
  background-color: var(--secondary-color);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-links {
  display: flex;
  margin-bottom: 20px;
}

.footer-links a {
  color: var(--text-color);
  font-size: 1.5rem;
  margin: 0 15px;
  transition: all 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary-color);
}

.footer-copyright p {
  color: var(--text-color);
  font-family: 'Montserrat', monospace;
  font-size: 12px;
}
</style>