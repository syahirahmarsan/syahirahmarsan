<template>
  <section id="experience" class="experience">
    <div class="container">
      <h2 class="section-title">
        <span class="text-section">02.</span> Where I've Worked
      </h2>
      <div class="experience-content">
        <b-tabs 
          content-class="mt-3" 
          fill
          nav-class="custom-tabs"
          active-nav-item-class="active-tab"
        >
          <b-tab v-for="(job, index) in jobs" :key="index" :title="job.company">
            <h3>{{ job.title }} <span class="text-section">@ {{ job.company }}</span></h3>
            <p class="date">{{ job.date }}</p>
            <ul class="job-description">
              <li v-for="(desc, descIndex) in job.description" :key="descIndex">{{ desc }}</li>
            </ul>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </section>
</template>

<script>
import jobs from '@/data/experience.json'

export default {
  name: 'WorkExperience',
  data() {
    return {
      jobs: jobs
    }
  }
}
</script>

<style scoped>
/* Remove !important declarations - they're not needed with proper scoping */
.experience-content {
  margin-top: 50px;
}

.date {
  color: var(--text-color);
  font-family: 'Montserrat', monospace;
  font-size: 14px;
  margin-bottom: 20px;
}

.job-description {
  list-style: none;
  padding: 0;
}

.job-description li {
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  color: var(--text-color);
}

.job-description li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--primary-color);
}

/* New tab styling */
:deep(.custom-tabs) {
  border-bottom: 1px solid var(--text-color);
}

:deep(.custom-tabs .nav-link) {
  color: var(--text-color) !important;
  border: none;
  font-family: 'Montserrat', monospace;
  padding: 10px 20px;
  transition: all 0.3s ease;
}

:deep(.custom-tabs .nav-link:hover) {
  color: var(--primary-color) !important;
  background: transparent;
  border: none;
}

:deep(.active-tab) {
  color: var(--primary-color) !important;
  background: transparent !important;
  border-bottom: 2px solid var(--primary-color) !important;
}

:deep(.custom-tabs .nav-link.active-tab) {
  color: var(--primary-color) !important;
}
</style>