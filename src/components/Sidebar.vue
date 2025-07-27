<template>
  <div class="sidebar">
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <a :href="link.url" v-scroll-to="link.scrollTo" :title="link.text">
          <span class="icon">{{ link.icon }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarNav',
  data() {
    return {
      links: [
        { text: 'GitHub', url: '#', icon: 'GH', scrollTo: '' },
        { text: 'LinkedIn', url: '#', icon: 'LI', scrollTo: '' },
        { text: 'Email', url: '#contact', icon: 'EM', scrollTo: '#contact' }
      ]
    }
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 40px;
  bottom: 0;
  z-index: 10;
}

.sidebar ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar li {
  margin-bottom: 20px;
}

.sidebar a {
  color: var(--text-color);
  font-family: 'Montserrat', monospace;
  font-size: 12px;
  writing-mode: vertical-rl;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.sidebar a:hover {
  color: var(--primary-color);
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>