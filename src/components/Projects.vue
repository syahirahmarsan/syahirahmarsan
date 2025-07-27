<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">
        <span class="text-section">03.</span> Some Things I've Built
      </h2>
      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="index" class="project-card">
          <div class="project-content">
            <p class="project-overline">{{ project.type }}</p>
            <h3 class="project-title">{{ project.title }}</h3>
            <div class="project-description">
              <p>{{ project.description }}</p>
            </div>
            <ul class="project-tech-list mb-0">
              <li v-for="(tech, techIndex) in project.technologies" :key="techIndex">{{ tech }}</li>
            </ul>
          </div>
          <div class="project-image">
            <a :href="project.github || '#'" target="_blank" rel="noopener noreferrer">
              <img :src="images[project.image]" :alt="project.title">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import projects from '@/data/projects.json'

export default {
  name: 'ProjectsSection',
  data() {
    return {
        projects: projects,
        images: {
          "fyp.png": require('@/assets/img/projects/fyp.png'),
          "rc-calc.png": require('@/assets/img/projects/rc-calc.png'),
          "manage-order.png": require('@/assets/img/projects/manage-order.png'),
          "subscription-view.png": require('@/assets/img/projects/subscription-view.png'),
          // other image mappings if needed
        }
    }
  }
    }

</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgba(100, 255, 218, 0.07);
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-content {
  padding: 30px;
  z-index: 2;
}

.project-overline {
  color: var(--primary-color);
  font-family: 'Montserrat', monospace;
  font-size: 14px;
  margin-bottom: 10px;
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.project-description p {
  color: var(--text-color);
  margin-bottom: 20px;
}

.project-tech-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}

.project-tech-list li {
  margin-right: 15px;
  font-family: 'Montserrat', monospace;
  font-size: 12px;
  color: var(--text-color);
}

.project-links {
  display: flex;
}

.project-links a {
  margin-right: 15px;
  font-size: 1.2rem;
  color: var(--light-color);
}

.project-links a:hover {
  color: var(--primary-color);
}

.project-image {
  width: 100%;
  height: 290px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.project-image:hover img {
  transform: scale(1.05);
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
}
</style>