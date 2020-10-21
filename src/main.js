import Vue from 'vue';
import App from './App.vue';
import router from './router/index'; // 路由配置
import dataV from '@jiaminghi/data-view'; // DataV
import VCharts from 'v-charts'; // v-charts
import './style/common.scss'; // 公共样式

Vue.config.productionTip = false;
Vue.use(dataV);
Vue.use(VCharts);

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
