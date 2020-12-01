<demo>
Basic Use</demo>
<template>
  <div>
    <h1>Sample</h1>
    <div>
      <Tabs v-model:selected="x">
        <Tab title="nav1">content 1</Tab>
        <Tab title="nav2">content 2</Tab>
      </Tabs>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Tabs, Tab
} from "../lib/index";
import { ref } from "vue";

export default {
  components: { Tabs, Tab },
  setup() {
    const x = ref("nav1");
    return { x };
  },
};
</script>
