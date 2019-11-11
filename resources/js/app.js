
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'

// import App from './App.vue'

/* router */
import VueRouter from 'vue-router'

/* axios */
import axios from 'axios'
import VueAxios from 'vue-axios'

/* validation */
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full';
import { ValidationObserver } from 'vee-validate/dist/vee-validate.full';

window.axios = require('axios')
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

import router from './routes.js'

import Headertodolist from './components/layouts/HeaderToDoList.vue'
import Footertodolist from './components/layouts/FooterToDoList.vue'
	
const app = new Vue({
    el: '#app',
    router,
    components: {
    	Headertodolist, Footertodolist
    }
});