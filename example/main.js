import Vue from 'vue';
import VueRouter from 'vue-router';
import Resource from 'vue-resource';
// 开发环境
import XXBUI from '../src/xxb-ui.js';

// 生产环境
// import '../dist/xxb-ui.flexible.js';
// import '../dist/xxb-ui.base.css';
// import XXBUI from '../dist/xxb-ui.js';


import App from './app.vue';

import Index from './routers/index.vue';
import NotFound from './routers/404.vue';
import Sticky from './routers/sticky.vue';
import BackTop from './routers/backTop.vue';
import Slider from './routers/slider.vue';
import Navbar from './routers/navbar.vue';
import Tabbar from './routers/tabbar.vue';
import Cell from './routers/cell.vue';
import Popup from './routers/popup.vue';
import Button from './routers/button.vue';
import JsBridge from './routers/jsBridge.vue';
import InfiniteScroll from './routers/infiniteScroll.vue';
import Dialog from './routers/dialog.vue';
import Picker from './routers/picker.vue';
import DatePicker from './routers/datePicker.vue';
import Clip from './routers/clip.vue';
import ScrollItem from './routers/scrollItem.vue';
import Checkbox from './routers/checkbox.vue'
import ImagePreview from './routers/imagePreview.vue'
import Switch from './routers/switch.vue'
import Textarea from './routers/textarea.vue'

Vue.use(VueRouter);
Vue.use(XXBUI);
Vue.use(Resource);

// 点击延迟
import FastClick from 'fastclick'
// FastClick.attach(document.body)

document.addEventListener('DOMContentLoaded', function () {
	typeof FastClick == 'function' && FastClick.attach(document.body);
}, false);

const router = new VueRouter({
	routes: [{
		  path: '/', component: Index
	},{
		  path: '/sticky', component: Sticky
  },{
		  path: '/backTop', component: BackTop
  },{
		  path: '/slider', component: Slider
	},{
      path: '/navbar', component: Navbar
  },{
		  path: '/tabbar', component: Tabbar
	},{
      path: '/cell', component: Cell
  },{
      path: '/popup', component: Popup
  },{
      path: '/button', component: Button
  },{
      path: '/dialog', component: Dialog
  },{
      path: '/jsBridge', component: JsBridge
  },{
      path: '/infiniteScroll', component: InfiniteScroll
  },{
      path: '/picker', component: Picker
  },{
      path: '/datePicker', component: DatePicker
  },{
      path: '/clip', component: Clip
  },{
      path: '/scrollItem', component: ScrollItem
  },{
      path: '/checkbox', component: Checkbox
  },{
      path: '/imagePreview', component: ImagePreview
  },{
      path: '/switch', component: Switch
  },{
    path: '/textarea', component: Textarea
  },{
		path: '*', component: NotFound
	}]
});

const app = new Vue({
	router: router,
	render: v => v(App)
}).$mount('#app');

let scrollTop = 0;

router.beforeEach((route, redirect, next) => {
    if (redirect.path === '/') {
        scrollTop = document.getElementById('scrollView').scrollTop;
    }
    document.title = 'XXBUI ' + (route.path.split('/')[1]  ? ' - ' + route.path.split('/')[1] : '') ;
    next();
});

router.afterEach(route => {
    if (route.path === '/') {
        Vue.nextTick(() => {
            document.getElementById('scrollView').scrollTop = scrollTop;
        });
    } else {
        document.getElementById('scrollView').scrollTop = 0;
    }
});
