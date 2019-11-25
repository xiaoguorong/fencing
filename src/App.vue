<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	name: 'App',
	created(){
		if(this.isLogin && !this.$route.matched.some(record => record.meta && record.meta.noLoginRequired)){
			this.getUserInfo();
		}
	},
	computed: {
		...mapGetters(['isLogin'])
	},
	methods: {
		...mapActions([
			'getUserInfo'
		])
    }
}
</script>

<style>

</style>
