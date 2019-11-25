import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';

Vue.use(Router)

var router = new Router({
    routes: [ 
		{
			path:'/',
			redirect:'/campus'
		},
		{
			{//找回密码
				name: 'findPassword',
				path: 'findPassword',
				meta: {
					pageTitle: '找回密码',
					noLoginRequired: true
				},
				component: ()=>import('@/views/find-password')
			}
		]}
	]
})

router.beforeEach((to, from, next) => {
    //更新机构id
    if(to.meta && to.meta.pageTitle){
      	store.dispatch("setHeaderName",to.meta.pageTitle)
    }
    //本地判断
	// 判断该路由是否需要登录权限
    if (!to.matched.some(record => record.meta && record.meta.noLoginRequired)){
		const token = window.localStorage.getItem('sys-token');
		//localStorage有token则视为登录
		if (token) {
			if (! store.state.token) {
				store.dispatch('setToken', token);
			}
			next();
			return;
		}
		//跳转到登录
		store.dispatch('clearLocalstroage');
		next({
			name: 'login',
			query: {redirect: to.fullPath} 
		});
		return;
    }
    next();
});

export default router
