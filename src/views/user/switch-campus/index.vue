<template>
<!-- 切换校区 -->
	<div class="switch_campus">
		<x-header-return></x-header-return>
		<div style="margin-top:39px">
			<mt-cell
				v-for="(item,index) in campusList"
				:key = "index"
				:title="item.name + '(' + (item.join_numbers ? item.join_numbers + '-' : '') + item.numbers + ')'"
				@click.native="switchCampus(item.id)"
				is-link
				:style="{'color':camId == item.id ? '#0079FE' : '#333'}">
			</mt-cell>
		</div>
	</div>
</template>

<script>
import XHeaderReturn from '@/components/x-header-return'
import {mapState , mapActions} from 'vuex'
import auth from '@/mixin/auth'
export default {
	name: "switch-campus",
	data() {
		return {
			campusList:[]
		};
	},
	mixins:[auth ],
	created(){
		this.$axios.post("/campus/get_campus_list").then((res)=>{
			this.campusList = res.content;
		})
	},
	methods:{
		...mapActions(["setCamId","setOrgId","setIsAdmin","getUserInfo"]),
		switchCampus(camid){
			let postData = {
				camid:camid
			}
			this.$axios.post("/campus/switch_campus",postData).then((res)=>{
				this.setCamId(res.content.id);
				this.setOrgId(res.content.orgid);
				this.setIsAdmin(res.content.is_admin);
				this.getUserInfo();
				//刷新权限
				this.getAuth();
				this.$router.push({name:'userCenter'});
			})
		}
	},
	computed:{
		...mapState({
			camId: state => state.camId
		})
	},
	components:{
		XHeaderReturn
	}
};
</script>

<style scoped>

</style>
