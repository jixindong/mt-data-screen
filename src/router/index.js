import Vue from "vue";
import VueRouter from "vue-router";

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return routerPush.call(this, location).catch(error => error);
};
Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		// 首页
		{
			path: '/',
			name: 'index',
			component: () => import('@/views/index'),
			meta: {
				title: '魔推精选数据中心'
			}
		},
		// 404
		{
			path: '*',
			name: '404',
			component: () => import('@/views/Error'),
			meta: {
				title: '404',
				favicon: require('@/assets/images/404.png')
			}
		}
	]
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
	// 设置 title
	if (to.meta.title) {
		document.title = to.meta.title;
	} else {
		document.title = '魔推精选数据中心';
	}
	// 设置 favicon
	let favicon = document.querySelector('link[rel="icon"]');
	if (to.meta.favicon) {
		favicon.href = to.meta.favicon;
	} else {
		favicon.href = require('@/assets/images/favicon.png');
	}
	next();
});

// 全局后置钩子
router.afterEach(() => {
	window.scrollTo(0, 0);
});

// 抛出 router 实例
export default router;
