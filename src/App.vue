<script>
import Nav from './components/Nav.vue'

export default {
	name: "App",
	components: {
		Nav,
	},
	data() {
		return {
			msg: "Pizza app",
		}
	}
}
</script>

<template>
  	<Nav />
	<h1>{{ msg }}</h1>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
