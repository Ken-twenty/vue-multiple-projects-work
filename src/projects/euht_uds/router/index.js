import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import ChildrenRoutes from './children-routes';

Vue.use(Router);

export default new Router({
  routes: [
    ...routes,
    ...ChildrenRoutes,
  ],
});
