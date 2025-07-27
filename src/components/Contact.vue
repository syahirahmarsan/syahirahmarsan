<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">
        <span class="text-section">05.</span> What's Next?
      </h2>
      <div class="contact-content">
        <h3 class="mb-4">Get In Touch</h3>
        <p>
          My coding keeps me busy, but my inbox is open for tech discussions, open-source collaborations, innovative projects, future opportunities, or just to exchange ideas. 
          Feel free to interrupt my programming flow with interesting messages, I'll try my best to get back to you!
        </p>
         <div class="contact-links">
          <a v-for="(link, index) in links" :key="index" :href="link.url" target="_blank" rel="noopener noreferrer">
            <i :class="link.icon"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
        name: 'ContactSection',
  data() {
    return {
      links: [
        { url: 'https://github.com/syahirahmarsan', icon: 'fab fa-github' },
        { url: 'https://www.linkedin.com/in/syahirah-marsan/', icon: 'fab fa-linkedin-in' },
        { url: 'mailto:syahirahmarsan@gmail.com', icon: 'fa fa-envelope' },
      ]
    }
  }
}
</script>

<style scoped>
.contact-links {
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
}

.contact-links a {
  color: var(--text-color);
  font-size: 1.5rem;
  margin: 0 15px;
  transition: all 0.3s ease;
}

.contact-links a:hover {
  color: var(--primary-color);
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.contact-content h3 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.contact-content p {
  color: var(--text-color);
  margin-bottom: 40px;
}

.btn-resume {
  background-color: var(--primary-color);
}

.btn-resume:hover {
  background-color: var(--primary-color-hover);
}

@media (max-width: 768px) {
  .contact-content h3 {
    font-size: 2rem;
  }
  
  .contact-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>