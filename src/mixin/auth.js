import {mapState,mapActions} from 'vuex';
export default {
    computed: {
        ...mapState({
            authList: state => state.authList,
            authApi: state => state.authApi
        })
    },
    methods: {
        ...mapActions(["setAuthList"]),
        permission(pmsion) {
            let auth_api_id = JSON.parse(this.authApi)[pmsion];
            let auth_id = this.authList.split(',').findIndex((val,index) => {
                if(val == auth_api_id){
                    return true;
                }
            })
            return auth_id > -1 ? true : false 
        },
        //获取权限
        getAuth(){
            this.$axios.post("/member/get_member_auth").then((res)=>{
				this.setAuthList(res.content.auth_ids)
			})
        },		
    }
};
