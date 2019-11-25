<template>
<!-- 教材分类 -->
	<div class="teaching_material">
		<x-header-search @onShowSearch="showSearch = true"></x-header-search>
		<transition name="slide-fade">
			<div class="search_box" v-if="showSearch">
				<div class="search_input">
					<icon name="iconsousuo" class="icon_search fz18"></icon>
					<input type="search" id="search" v-model="name">
				</div>
				<span class="exit_search" @click="showSearch = false">取消</span>
			</div>
		</transition>
		<!-- <div class="search_bg"></div> -->
		<div class="navbar mt44">
			<mt-navbar v-model="selected" class="ml05">
				<mt-tab-item id="1">教师用书</mt-tab-item>
				<mt-tab-item id="2">教材课件</mt-tab-item>
			</mt-navbar>
		</div>
		<ul class="teaching_material_list">
			<router-link :to="{name:'teachingMaterialItem',params:{classId:item.id,name:item.name,cover:item.cover,type:selected}}" v-for="(item,index) in data" :key="index">
				<li class="fl" :style="{backgroundImage:'url('+item.cover+')'}">
					<div class="line" v-if="index%3 == 0"></div>
				</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
import { mapState } from "vuex";
import XHeaderSearch from '@/components/x-header-search'
export default {
	name: "teaching-material",
	data(){
		return{
			selected:'1', //选择教师用书还是教材课件，默认教师用书
			data:[],
			showSearch:false,
			name:''
		}
	},
	watch:{
		selected(val){
			if(val == '1'){
				this.getBook();
			}else{
				this.getMaterial();
			}
		}
	},
	created(){
		this.getBook();
		document.onkeydown= event => {
			var e = event || window.event || arguments.callee.caller.arguments[0];           
			if(e && e.keyCode == 13){
				if(this.selected == '1'){
					this.getBook();
				}else{
					this.getMaterial();
				}
			}
         }; 
	},
	methods:{
		getMaterial(){
			const postData={
				name:this.name
			}
			this.$axios.post('/teaching_material/teaching_material_class',postData).then((res)=>{
				this.data = res.content;
			})
		},
		getBook(){
			const postData={
				name:this.name
			}
			this.$axios.post('/teaching_material/teacher_book_class',postData).then((res)=>{
				this.data = res.content;
			})
		},
	},
	computed: {
		...mapState({
			headerName: state => state.headerName
		})
	},
	components:{
		XHeaderSearch
	}
};
</script>

<style scoped>
.navbar{
	width:150px;
}
.teaching_material_list{
	border-top:6px solid #efefef;
	margin-top:3px;
	padding:2vw;
	overflow: hidden;
}
.teaching_material_list li{
	border-radius: 10px;
	height:22vh;
	width:28vw;
	background: #efefef;
	margin: 2vh 2vw;
	position: relative;
	box-sizing:border-box;
	background-size: 100% 100%;
	box-shadow: 0px 2px 8px#efefef;
}
.line{
	width:96vw;
	height:2.6vw;
	border:1px solid #efefef;
	box-shadow: 0px -5px 8px#efefef;
	position: absolute;
	bottom:-26vh;
	top:0;
	right:0;
	left:-2vw;
	margin:auto;
}
.search_box{
	width:100vw;
	height:44px;
	position: fixed;
	z-index:2;
	border-bottom:1px solid #efefef;
	top:0;
	background: #fff;
	display: flex;
	box-sizing:border-box;
	padding:7px 15px;
}
.search_input{
	flex-grow: 1;
	border-radius: 6px;
	background: #efefef;
	display: flex
}
.exit_search{
	width:43px;
	line-height: 26px;
	text-align: right;
	font-size:14px;
	color:#0079fe
}
.icon_search{
	margin-top:4px;
	margin-left:5px;
	margin-right:5px;
	color:#ccc;
}
.search_input input{
	height:24px;
	flex-grow: 1;
	display: block;
	border:none;
	padding:0;
	background: #efefef;
	border-radius: 6px;
	outline:none;
}
.search_bg{
	background: #A4A7A4;
	width:100vw;
	height:100vh;
	z-index:1;
	top:0;
	right:0;
	position: fixed
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(100px);
}
</style>
