<template>
<!-- 切换校区 -->
	<div class="switch_campus">
		<x-header-return></x-header-return>
		<div class="mt44">
			<div class="logo pl2 pr2">
				<img :src="orgId == $conf.xhx_id ? xhx_logo : kcb_logo" class="ma">
				<p v-if="orgId == $conf.xhx_id" class="t-center fz14 fw6 mt1">小海象科学</p>
				<p v-else class="t-center fz14 fw6">口才宝</p>
				<p v-if="orgId == $conf.xhx_id" class="descript mt05">小海象科学艺术乐园，是专注3-12岁儿童STEAM教育的专业培训机构，以“发现并培养孩子的兴趣”为出发点，依托国际先进的STEAM教育体系，通过科学系统权威有效的适龄课程，实现儿童成长和成才的全人教 育目标。</p>
				<p v-else class="descript mt05">口才宝是亿人星教育集团旗下著名品牌，是长三角最专业的语商提升机构，拥有国内领先权威专业的高级语商和口才研究院，其对于中国人语言学习习惯改良、口语表达能力提升、卓越语商锻造等课题有深入研究，在理论研究和培训实践中不懈努力、积极探索、大胆尝试，注重理论与实践相结合，总结出一系列实用高效最适合中国人特点的语商提升和口才训练方法，形成科学而又完整的语商和口才体系。</p>
			</div>
			<a class="web_site mt15 mb15 pl2 pr2 pt15 over-hidden" :href="orgId == $conf.xhx_id ? 'http://www.xiaohaixiang.net/' : 'http://www.kcb.cn/'">
				<icon name="iconguanwang" class="fz20 fl mr1"></icon>
				<p class="web_site_detail fl">企业官网：</p>
				<span v-if="orgId == $conf.xhx_id" class="fr">http://www.xiaohaixiang.net/</span>
				<span v-else class="fr">http://www.kcb.cn/</span>
			</a>
			<a class="cooperation mt15 mb15 pl2 pr2 pt15 over-hidden" :href="orgId == $conf.xhx_id ? 'tel:18818072286' : 'tel:4000488861'">
				<icon name="iconmn_hezuo" class="fz20 fl mr1"></icon>
				<p class="cooperation_detail fl">交流合作：</p>
				<span v-if="orgId == $conf.xhx_id" class="fr">188 1807 2286</span>
				<span v-else class="fr">4000 4888 61</span>
			</a>
		</div>
	</div>
</template>
n
<script>
import {mapState} from 'vuex'
import XHeaderReturn from '@/components/x-header-return'
import xhx_logo from '@/img/xhx_logo.png'
import kcb_logo from '@/img/kcb_logo.png'

export default {
	name: "about-us",
	data(){
		return{
			xhx_logo:xhx_logo,
			kcb_logo,kcb_logo
		}
	},
	computed:{
		...mapState({
			orgId: state => state.orgId
		})
	},
	components:{
		XHeaderReturn
	}
};
</script>

<style scoped>
.logo{
	margin-top:80px;
}
.logo img{
	width:80px;
	height:auto;
	display: block;
}
.descript{
	text-indent: 24px;
	color:#888;
	line-height:20px;
}
.web_site,.cooperation{
	border-top:6px solid #efefef;
	display: block;
	color:#222222;
	font-size:14px;
}
.cooperation{
	border-top:1px solid #efefef;
}
.web_site_detail,.cooperation_detail{
	line-height:20px;
}
</style>
