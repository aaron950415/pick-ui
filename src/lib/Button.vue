<template>
  <button class="pick-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="pick-loadingIndicator"></span><slot />
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`pick-theme-${theme}`]: theme,
        [`pick-size-${size}`]: size,
        [`pick-level-${level}`]: level,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.pick-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-block;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out($color: #000000, $amount: 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline-color: $blue;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.pick-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($color: $blue, $amount: 0.1);
    }
  }
  &.pick-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken($color: white, $amount: 0.05);
    }
  }

  &.pick-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.pick-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.pick-theme-button {
    &.pick-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.pick-level-danger {
      background: $red;
      color: white;
      border-color: $red;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.pick-theme-link {
    &.pick-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($color: $red, $amount: 10%);
      }
    }
  }
  &.pick-theme-text {
    &.pick-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($color: $blue, $amount: 10%);
      }
    }
    &.pick-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($color: $red, $amount: 10%);
      }
    }
  }
  &.pick-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.pick-theme-link,
  &.pick-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
    > .pick-loadingIndicator {
      width: 14px;
      height: 14px;
      display: inline-block;
      margin-right: 4px;
      border-radius: 8px;
      border-color: $blue $blue $blue transparent;
      border-style: solid;
      border-width: 2px;
      animation: pick-spin 1s infinite linear;
    }
  @keyframes pick-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
