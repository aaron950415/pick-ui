# Basic usage
Please [Install](#/doc/install) this component library first.

Then write the following code in your code

```
import {Button, Tabs, Switch, Dialog,Tab,openDialog} from "pick-ui"
```

You can use the components I provided.

## Vue single file component

Code example:

```
<template>
  <div>
    <Button>Start</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog,Tab,openDialog} from "pick-ui"
export default {
  components: {Button, Tabs, Switch, Dialog,Tab}
}
</script>
```