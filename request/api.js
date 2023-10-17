import exp from "constants";

//登录
export const login = ()=>{

		uni.login({
		  provider: 'weixin', //使用微信登录
		  success: function (loginRes) {
		    const code = loginRes.code
			console.log('code',code)
			uni.$u.http.post(`/api/user/login/${code}?appId=wx129a87c8f2c167ee`).then(res=>{
				res.item.user.username = `微信用户${res.item.user.id.substr(0,4)}`
				uni.setStorageSync('user',res.item.user)
			console.log('user',res.item.user)
			})
		  }
		});
}
//获取多条场地信息
export const getProjectList = ()=>{
	 return uni.$u.http.get('/api/project/list')
	}

//模糊查询场地名称
export const searchProject = (content)=>{
	return uni.$u.http.get(`/api/project/search/${content}`)
}

/**
 * @param {item}
 */
//新建订单
export const submit = (item)=>{
	return uni.$u.http.post('/api/order',item)
}

//微信支付信息接口

export const getWX = (item)=>{
	return uni.$u.http.post(`/api/order/pay/${item.userId}/${item.orderId}`,{
		description:item.description,
		
		
	})
}

// 设备开启
export const start = (id,type)=>{
	return uni.$u.http.post(`/api/order/success/${id}/${type}`)
}

//支付失败
export const fail = (id)=>{
	return uni.$u.http.post(`/api/order/fail/${id}`)
}
// 订单列表

export const getOrderList = ()=>{
	return uni.$u.http.get('/api/order/list')
}

//直播列表

export const getNowList = ({pageNum,pageSize})=>{
	return uni.$u.http.get('/api/project/playList',{params:{
		pageNum,
		pageSize
	}})
}

// 单个订单

export const detail = ({userId,orderId})=>{
	return uni.$u.http.get(`/api/order/${orderId}`)
}

//收藏订单

export const like = ({userId,orderId})=>{
	return uni.$u.http.post(`/api/user/collect/${userId}/${orderId}`)
}

//收藏列表

export const collectList = (userId)=>{
	return uni.$u.http.get(`/api/user/my/collect/${userId}`)
}

export const noLike = ({userId,orderId})=>{
	return uni.$u.http.put(`/api/user/collect/${userId}/${orderId}`)
}

// 根据用户的id查询其订单列表

export const getOrderListByUserId = (userId,pageNum,pageSize)=>{
	return uni.$u.http.get(`/api/user/my/order/${userId}?pageNum=${pageNum}&pageSize=${pageSize}`)
}
// 获取用户收藏的订单id
export const getCollectListByUserId = (userId)=>{
	return uni.$u.http.get(`/api/user/my/collect/${userId}`)
}
// 取消收藏
// export const cancleCollectByUser = (userId,orderId){
// 	// return uni.$u.http.post(`/api/user/collect/${userId}/${orderId}`)
// 	return uni.$u.http.get(`/api/user/my/collect/${userId}`)
// }
//取消收藏
export const cancleCollectByUser = (userId,orderId)=>{
	return uni.$u.http.put(`/api/user/collect/${userId}/${orderId}`)
}
//获取单个场地信息
export const getPrice = (id)=>{
	return uni.$u.http.get(`api/project/${id}`)
}
// 获取场地信息
export const getPlaceList = ()=>{
	return uni.$u.http.get(`api/project/list`)
}
// 停止直播
export const stopLiving = (orderId)=>{
	return uni.$u.http.post(`/api/order/stop/${orderId}`)
}

//加时支付成功
export const extendSuccess = (id)=>{
	return uni.$u.http.post(`/api/order/extend/${id}`)
}
//获取单条订单信息
export const getDetail = (id)=>{
	return uni.$u.http.get(`/api/order/${id}`)
}
//支付成功回调
// export const getResult = (result)=>{
// 	return uni.$u.http.get(`/api/order/${result}`)
// }