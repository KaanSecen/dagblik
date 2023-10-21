<template>
  <footer class="footer">
    <div class="footer-left">
      <span class="footer-text">DagBlik</span>
    </div>
    <div class="footer-right">
      <a href="https://github.com/KaanSecen/dagblik" target="_blank">
        <Icon name="uil:github" color="black" size="2rem"/>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-left,
.footer-right {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 2rem;
}

.footer-left {
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  justify-content: flex-start;
  font-size: 1.5rem;
}

.footer-right {
  font-family: 'Inter', sans-serif;
  font-weight: 100;
  justify-content: flex-end;
}

.footer-text {
  color: #000;
  text-transform: uppercase;
}

a {
  color: #fff;
  text-decoration: none;
}

@media (max-width: 768px) {
  .footer-left {
    font-size: 1.5rem;
  }
}
</style>
