<template>
  <section id="education" class="education">
    <div class="container">
      <h2 class="section-title">
        <span class="text-section">04.</span> Where I've Studied
      </h2>
      <div class="education-content">
        <b-row>
        <b-col cols="12">
          <div v-for="(item, index) in education" :key="index" class="timeline-item">
            <div class="timeline-line" v-if="index !== education.length - 1"></div>
            <div class="timeline-content">
              <h4>{{ item.course }}</h4>
              <div class="timeline-period text-section">{{ item.period }}</div>
              <p>{{ item.institution }}</p>
            </div>
          </div>
        </b-col>
      </b-row>
      </div>
    </div>
  </section>
</template>

<script>
import education from '@/data/education.json'

export default {
  name: 'EducationSection',
  data() {
    return {
      education: education
    }
  }
}
</script>

<style scoped>
.education-content {
  margin-top: 50px;
}

.timeline-item {
  position: relative;
  padding-bottom: 2rem;
  margin-top: 5px;
}

.timeline-line {
  position: absolute;
  left: 6px;
  top: 30px;
  bottom: 0;
  width: 2px;
  background-color: #dee2e6;
}

.timeline-content {
  position: relative;
  padding-left: 2rem;
}

.timeline-content h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #343a40;
}

.timeline-period {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #6c757d;
}

.timeline-content p {
  color: #6c757d;
  line-height: 1.6;
}

.timeline-item:last-child .timeline-line {
  display: none;
}

.timeline-content::before {
  content: '';
  position: absolute;
  left: 0;
  top: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: var(--primary-color);
  z-index: 1;
}
</style>