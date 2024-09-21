<script setup>
import { RouterLink } from 'vue-router'
</script>
<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
        <h1>School Management</h1>
      </div>

      <!-- Menu for Desktop -->
      <nav class="nav-menu">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      </nav>

      <!-- Mobile Menu Button -->
      <button class="menu-toggle" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="mobile-menu">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">Login</a>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  position: relative;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  width: 40px;
  margin-right: 10px;
}

.logo h1 {
  font-size: 24px;
  margin: 0;
}

.nav-menu {
  display: flex;
  gap: 20px;
}

.nav-menu a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 16px;
  padding: 8px 15px;
}

.nav-menu a:hover {
  color: #007bff;
}

/* Mobile Menu Button */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  height: 25px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.menu-toggle .bar {
  width: 100%;
  height: 4px;
  background-color: #333;
  margin: 3px 0;
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  background-color: #f9f9f9;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  padding: 20px;
}

.mobile-menu a {
  margin-bottom: 10px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 16px;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .mobile-menu {
    display: flex;
  }
}
</style>
