<template>
	<div class="x_footer">
		<router-view></router-view>
		<x-footer style="padding-bottom:55px;"></x-footer>
	</div>
</template>

<script>
import XFooter from '@/components/x-footer'
export default {
	name: 'x-footer-layout',
	components:{
		XFooter
	}
}
</script>

<style scoped>
</style>
