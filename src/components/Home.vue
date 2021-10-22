<script>
import { mapState } from 'vuex'

export default {
	name: "Home",
	computed: {
		...mapState({
			name: state => state.auth.name,
		}),
	}
}
</script>

<template>

	<h1>HOME</h1>
	<p>{{ name }}</p>

</template>

<style>

</style>