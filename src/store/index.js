import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios';
Vue.use(Vuex)
 
const state = {
    token: window.localStorage.getItem('sys-token') || '',//token
    orgId: window.localStorage.getItem('sys-orgid') || '',//机构id
    camId: window.localStorage.getItem('sys-camid') || '',//校区id
    isAdmin: window.localStorage.getItem('sys-campus-is-admin') || '',//是否为校区管理员
    campusNum: window.localStorage.getItem('sys-campus-num') || '',//账号下校区数量
    authList: window.localStorage.getItem('sys-auth-list') || '',//账号所拥有的权限列表
    authApi: window.localStorage.getItem('sys-auth-api') || '',//移动端的所有权限列表
    headerName: '',
    userInfo:'',
};
// getters
const getters = {
    getToken: state => state.token,
    isLogin: state => !!(state.token),
    getHeaderName: state => state.headerName,
    getAuthList: state => state.authList,
    getUserInfo: state => state.userInfo
}; 
 
// actions
const actions = {
    setToken({dispatch, commit, state}, token) {
        window.localStorage.setItem('sys-token', token);
        commit('login', token);
    },
    clearLocalstroage({commit, state}) {
        window.localStorage.clear();
        commit('logout');
    },
    setOrgId({dispatch, commit, state}, orgid) {
        window.localStorage.setItem('sys-orgid', orgid);
        commit('updateOrgId', orgid);
    },
    setCamId({dispatch, commit, state}, camid) {
        window.localStorage.setItem('sys-camid', camid);
        commit('updateCamId', camid);
    },
    setCampusNum({dispatch, commit, state}, campusNum) {
        window.localStorage.setItem('sys-campus-num', campusNum);
        commit('updateCampusNum', campusNum);
    },
    setIsAdmin({dispatch, commit, state}, isAdmin) {
        window.localStorage.setItem('sys-campus-is-admin', isAdmin);
        commit('updateIsAdmin', isAdmin);
    },
    setHeaderName({dispatch, commit}, headerName){
        commit('updateHeaderName', headerName);
    },
    setAuthList({dispatch, commit, state}, authList) {
        window.localStorage.setItem('sys-auth-list', authList);
        commit('updateAuthList', authList);
    },
    setAuthApi({dispatch, commit, state}, authApi) {
        window.localStorage.setItem('sys-auth-api', authApi);
        commit('updateAuthApi', authApi);
    },
    getUserInfo({dispatch, commit, state}) {
        return axios.get('/member/get_member_info').then((body) => {
            console.log(body)
            if (body.code === 200) {
                //当切换校区的时候更新title
			    document.title = body.content.campus_name + " 管理系统";
                commit('updateUserInfo', body.content);
            } else {
                console.log('更新用户信息失败', body.msg);
            }
        });
    },
};

// mutations
const mutations = {
    login(state, token) {
        state.token = token;
    },
    logout(state, token) {
        state.token = '';
        state.orgId = '';
        state.camId = '';
        state.isAdmin = '';
        state.campusNum = '';
        state.authList = '';
        state.authApi = '';
    },
    updateHeaderName(state, headerName){
        state.headerName = headerName;
    },
    updateOrgId(state, orgId){
        state.orgId = orgId;
    },
    updateCamId(state, camId){
        state.camId = camId;
    },
    updateCampusNum(state, campusNum){
        state.campusNum = campusNum;
    },
    updateIsAdmin(state,isAdmin){
        state.isAdmin = isAdmin;
    },
    updateAuthApi(state, authApi){
        state.authApi = authApi;
    },
    updateAuthList(state, authList){
        state.authList = authList;
    },
    updateUserInfo(state, userInfo){
        state.userInfo = userInfo;
    }
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});
