import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller.vue';

Vue.use(Router);
Vue.use(VueResource);

const routers = new Router({
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: goods
        },
        {
            path: '/goods',
            name: 'goods',
            component: goods
        },
        {
            path: '/ratings',
            name: 'ratings',
            component: ratings
        },
        {
            path: '/seller',
            name: 'seller',
            component: seller
        }]
});

export default routers;
