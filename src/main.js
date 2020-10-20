import Vue from 'vue';
import App from './App.vue';
import router from './router/index'; // 路由配置
import dataV from '@jiaminghi/data-view'; // DataV
import './style/common.scss'; // 公共样式

Vue.config.productionTip = false;
Vue.use(dataV);

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
