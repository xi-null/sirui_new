<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-plus/index.scss";
</style>
<script>
	import {login,getProjectList} from './request/api.js'
	export default {
		onLaunch: function() {
			
			console.log("sdfsdfds")
				login()		
		},
		onShow: async function() {
			
			
				const result = await getProjectList()
			
						
				 
				 const list =  result.item.project.filter((item)=>{
				  	return item.status=='idle'||item.status=='ready'
				  })
			uni.setStorageSync('list',list)
		
			
		const project = {
			id:'',
			name:''
		}
		uni.setStorageSync('project',project)
						
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
