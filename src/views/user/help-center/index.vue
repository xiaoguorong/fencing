<template>
<!-- 帮助中心 -->
	<div class="help_center">
		<x-header-return></x-header-return>
		<div class="mt44">
			<img :src="xtwh" class="xtwh">
		</div>
	</div>
</template>
n
<script>
import XHeaderReturn from '@/components/x-header-return'
import xtwh from '@/img/xtwh.jpg'

export default {
	name: "help-center",
	data(){
		return{
			xtwh:xtwh,
		}
	},
	components:{
		XHeaderReturn
	}
};
</script>

<style scoped>
.xtwh{
	width:50vw;
	margin:auto;
	display: block;
	margin-top:120px;
}
</style>
