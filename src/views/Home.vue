<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>Pick UI for Vue 3</h1>
        <h2>Aaron</h2>
        <p class="actions">
          <a href="https://github.com">Github</a>
          <router-link to="/doc">Start</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="pick-icon">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>base on Vue 3</h3>
          <p>used Vue 3 Composition API
            
          </p>
        </li>
        <li>
          <svg class="pick-icon">
            <use xlink:href="#icon-typescript">
            </use>
          </svg>
              <h3>base on TypeScript</h3>
              <p>The source code is written in TypeScrip
                
              </p>
        </li>
        <li>
          <svg class="pick-icon">
            <use xlink:href="#icon-light">
            </use>
          </svg>
              <h3>Code is easy to read</h3>
              <p>The source code is extremely concise</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default { components: { Topnav } };
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radious: 4px;
$color: #007974;
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
  // border-bottom-left-radius: 50% 70px;
  // border-bottom-right-radius: 50% 70px;
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
  margin: 64px auto;
  padding:0 16px;
  @media (min-width: 800px) {
    width: 800px;
        >ul {
      >li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
        >ul {
      >li {
        width: 33.3333%;
      }
    }
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
  
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text
      }
    }
  }
}
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      display: inline-block;
      color: white;
      border-radius: $border-radious;
      padding: 8px 24px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
