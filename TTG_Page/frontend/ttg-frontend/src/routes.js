import HomeComponent from './components/client/Home.vue';
const Bar = { template: '<div>bar</div>' }

export const routes = [
    { path: '/bar', component: Bar },
    { path: '/home', component: HomeComponent }
];