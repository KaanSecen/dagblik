<template>
  <header class="header">
    <div class="header-left">
      <span class="header-text"><NuxtLink to="/">DagBlik</NuxtLink></span>
    </div>
    <div class="header-center">
      <nav>
        <ul>
          <li>
            <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="header-right">
      <span class="header-text">{{ currentDate }}</span>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      currentDate: null,
    };
  },
  async mounted() {
    this.currentDate = new Date().toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  },
};
</script>

<style scoped>
.nav-link.router-link-exact-active {
  text-decoration: none;
  border-bottom: 1px solid #000;
  color: #000;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  color: #fff;
}

.header-left,
.header-right {
  flex: 1;
  display: flex;
  align-items: center;
}

.header-left {
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 900;
  justify-content: flex-start;
}

.header-center {
  flex: 2;
  text-align: center;
}

.header-right {
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  justify-content: flex-end;
}

.header-text {
  margin: 0;
  color: #000;
  text-transform: uppercase;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 100;
  display: inline;
  text-transform: uppercase;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  position: relative; /* Add this line */
}


nav ul li::before {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #000;
  transition: width 0.3s ease;
}

nav ul li:hover::before {
  width: 100%;
}

a {
  color: #000;
  text-decoration: none;
}

@media (max-width: 1200px) {
  .header {
    flex-direction: column;
    text-align: center;
  }

  .header-left,
  .header-right,
  .header-center {
    flex: none;
    justify-content: center;
    width: 100%;
  }

  .header-left {
    font-size: 2.5rem;
  }

  .header-right {
    font-size: 1.5rem;
    display: none;
  }
}
</style>
