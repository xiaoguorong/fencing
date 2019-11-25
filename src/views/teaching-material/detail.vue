<template>
<!-- 教材详情 -->
	<div class="teaching_material_detail">	
		<x-header-return class="header"></x-header-return>
		<iframe id="testtest" class="mt44" :src="'./../../../static/pdf/web/viewer.html?file='+this.pdfUrl" :style="{width:'100vw',boxSizing:'border-box',height:h+'px'}"></iframe>
	</div>
</template>
<script>
import {mapActions} from 'vuex'
import XHeaderReturn from '@/components/x-header-return'
  
export default {
	name: 'teaching-material-detail',
	data(){
		return {
			pdfUrl:"",
			pageNum:1,
			numPages:1,
			currentPage:1,
			pageTotalNum:1,
			h:0
		}
	},
	created(){
		this.h = window.screen.height - 44;
		this.setHeaderName(this.$route.params.name)
		this.pdfUrl = "http://static.solearn.cn/"+this.$route.params.key;
	},
	mounted(){
		
	},
	methods: {
		...mapActions(["setHeaderName"]),
	},
	components:{
		XHeaderReturn,
	}
}
</script>		

<style scoped>
.teaching_material_detail{
	overflow:hidden;
	width:100vw;
	height:100vh;
}
</style>

