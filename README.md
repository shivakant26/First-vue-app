# kripa-app
# feature
1. how to make state in vuejs
export default {
data() {
    return {
      showLogin: true,
      state : {
        fullname:"",
        email:"",
        password:"",
      }
    };
  },
  }
2. how to make method is vuejs
methods: {
    handleToggle() {
      this.showLogin = !this.showLogin;
    },
    handleRegister(e){
      e.preventDefault();
      console.log(this.state)
    },
    handleLogin(e){
      e.preventDefault();
      console.log(this.state)
    }
  },

3. Api Calling useEffect type mounted(life cycle method)

mounted() {
    this.fetchData();
  },

4. routerout let used look like this
    <RouterView />

5. conditionl statement
    v-if , v-else , v-for    

6. click event performed like
    @click = "method()"
    and define it method section of <script></script>

7. for routing it provided seprate folder during installtion time
        history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundVue,
    },
  ]

9. for makeing page it provide view folder here you make your pages
    syntax - AboutView.vue

10. flow of working vuejs
    index.html--->(main.js)---->(app.vue)--->all coponent(c1 ,c2 ,c3.....Cn)   

11. global css flow
    main.css---->base.css---->component level css

12. perform onChange operation in vuejs
    v-model    
