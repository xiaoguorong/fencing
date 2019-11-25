<template>
<!-- 意见反馈 -->
	<div class="feedback">
		<x-header-return></x-header-return>
		<div class="mt44 over-hidden radio">
			<mt-radio
				v-model="type"
				:options="options"
				class="fz12">
			</mt-radio>
		</div>
		<div class="content">
			<mt-field placeholder="请输入您反馈的依据（字数500以内）" type="textarea" rows="7" v-model="content"></mt-field>
		</div>
		<div class="mobile pl2 pr2 fz14 over-hidden">
			<span class="fl">手机号：</span>
			<span class="fr"><input type="text" v-model="mobile"></span>
		</div>
		<p class="remind pl2 pr2 pt1">注：本栏目只受理有关校区管理系统方面的意见和反馈。</p>
		<div class="ml2 mr2">
			<mt-button type="primary" size="large" class="mt3" @click.native="save">提交</mt-button>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import XHeaderReturn from '@/components/x-header-return'
export default {
	name: "feedback",
	data() {
		return {
			type:'1',//反馈类型
			options:[
			{
				label: '应用功能bug',
				value: '1',
			},
			{
				label: '产品需求',
				value: '2'
			},
			{
				label: '其他',
				value: '3'
			}],//反馈类型
			mobile:'',//反馈人联系方式
			content:'',//反馈内容
		};
	},
	created(){
		//获取本人手机号
		this.mobile = this.userInfo['mobile'];
	},
	watch:{
		//手机号截取11位
		mobile(v){
			if(v.length > 11){
				this.mobile = v.substr(0,11)
			}
		}
	},
	methods:{
		//提交反馈
		save(){
			if(!this.content){
				this.$toast("反馈内容不能为空", "top");
				return;
			}
			if(!this.mobile){
				this.$toast("手机号不能为空", "top");
				return;
			}
			const postData = {
				type:this.type,
				content:this.content,
				mobile:this.mobile
			}
			this.$axios.post("/member/add_feedback",postData).then((res)=>{
				if(res.code == 200){
					this.$toast("提交成功", "top");
					this.$router.back();
				}
			})
		}
	},
	computed: {
		...mapState({
			userInfo: state => state.userInfo
		})
  	},
	components:{
		XHeaderReturn
	}
};
</script>

<style scoped>
.content{
	border-top:5px solid #efefef;
}
.mobile{
	border-top:6px solid #efefef;
}
.mobile{
	line-height:50px;
}
.mobile input{
	width:88px;
	outline:none;
	border:none;
}
.remind{
	border-top:8px solid #efefef;
	line-height: 16px;
	color:red;
	opacity:0.6
}
</style>
