<template>
  <div class="app">
    <h1 class="title">{{ title }}</h1>
  </div>
</template>
<script>
export default {
	name: "app",
	data() {
		return {
			title: "Vue"
		}
	}
}
</script>
<style lang="scss" scoped>
.app {
  margin: 10px;
  .title {
    color: red;
  }
}
</style>
