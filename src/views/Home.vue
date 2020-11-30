<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>topic</h1>
        <h2>tittle</h2>
        <p class="actions">
          <a href="https://github.com">Github</a>
          <router-link to="/doc">Start</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="pick-icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <svg class="pick-icon">
        <use xlink:href="#icon-typescript"></use>
      </svg>
      <svg class="pick-icon">
        <use xlink:href="#icon-light"></use>
      </svg>
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
  .features {
    > svg {
      width: 32px;
      height: 32px;
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
