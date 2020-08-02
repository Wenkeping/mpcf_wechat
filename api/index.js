import categories from './categories.js'
import orders from './orders.js'
import storeOrders from './storeOrders.js'
import scores from './scores.js'
import hotSearch from './hotSearch.js'
import historySearch from './historySearch.js'
import orderDetail from './orderDetail.js'


const json = {
	categories,
	orders,
	storeOrders,
	scores,
	hotSearch,
	historySearch,
	orderDetail

}

export default (name, loading = true) => {
	if(loading) {
		uni.showLoading()
	}
	
	return new Promise(resolve => {
		setTimeout(() => {
			uni.hideLoading()
			resolve(json[name])
		}, 500)
	})
}