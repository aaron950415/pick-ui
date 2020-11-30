<template>
  <div>
    <div class="demo">
      <h2>{{ component.__sourceCodeTitle }}</h2>
      <div class="demo-component">
        <component :is="component" />
      </div>
      <div class="demo-actions">
        <Button @click="toggleCode">Code</Button>
      </div>
      <div class="demo-code" v-if="codeVisible">
        <pre class="language-html" v-html="html"></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref } from "vue";
import SwitchDemo from "./Switch.Demo.vue";
import Button from "../lib/Button.vue";

import "prismjs";
import "prismjs/themes/prism-okaidia.css";
const Prism = (window as any).Prism;
export default {
  components: {
    Button,
  },
  props: { component: Object },
  setup(props) {
    const codeVisible = ref(false);
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const toggleCode = () => (codeVisible.value = !codeVisible.value);
    return { SwitchDemo, Prism, html, codeVisible, toggleCode };
  },
};
</script>


<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    z-index: 9;
    > pre {
      line-height: 1.1;
      overflow-x: auto;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>