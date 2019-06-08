<template>
  <div>
    <h1 :class="$style.h1">Hello World</h1>
    <h2 :class="'h2'">Hello Webpack</h2>
  </div>
</template>

<style module>
.h1{
  color:deepskyblue
}

:global(.h2){
  color:pink
}
</style>
