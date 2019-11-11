import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import HomeToDoList from './components/pages/HomeToDoList'
import ContactToDoList from './components/pages/ContactToDoList'
import AboutToDoList from './components/pages/AboutToDoList'

/* routes  */
const routes = [
	{
		path: '/',
		component: HomeToDoList
	}
	,
	{
		path: '/contact',
		component: ContactToDoList
	}
	,
	{
		path: '/about',
		component: AboutToDoList
	}
	,
];

/* router */
const router = new VueRouter({
	// mode: 'history',
	routes
});

export default router