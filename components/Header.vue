<template>
  <header class="header">
    <div class="header-left">
      <span class="header-text">DagBlik</span>
    </div>
    <div class="header-right">
      <span class="header-text">{{ currentDate }}</span>
    </div>
  </header>
</template>

<script>
export default {
  setup() {
    const currentDate = new Date().toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    return { currentDate }
  },
}
</script>

<style scoped>
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
  font-weight: 700;
  justify-content: flex-start;
}

.header-right {
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 100;
  justify-content: flex-end;
}

.header-text {
  margin: 0;
  color: #000;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    text-align: center;
  }
  .header-left,
  .header-right {
    flex: none;
    justify-content: center;
  }
  .header-left {
    font-size: 2.5rem;
  }
  .header-right {
    font-size: 1.5rem;
  }
}
</style>
