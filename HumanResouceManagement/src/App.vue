<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import layout1 from './components/layout/layout1.vue'
import layout2 from './components/layout/layout1.vue'
import login from './components/LoginView/login.vue'
</script>

<template>
 <header>
    <img alt="Vue logo" class="logo" src="https://th.bing.com/th/id/R.0f9fe85b9c825ccc0e6765625831aec8?rik=1UlGdLfoWkLCMw&riu=http%3a%2f%2flib.tgu.edu.vn%2fApp_Themes%2ftgu%2fimages%2ftgu-logo.png&ehk=9ockmqXUOLvgV7JIXZN%2btIWGI%2fXJ5BIg0J0VYJ9yyZ4%3d&risl=&pid=ImgRaw&r=0" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Login</RouterLink>
        <RouterLink to="/Auth">Register</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>


