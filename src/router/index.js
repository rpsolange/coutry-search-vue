import Vue from 'vue'
import Router from 'vue-router'
import countriesFinder from '@/components/countriesFinder'
import countriesHome from '@/components/countriesHome'
import countryDetail from '@/components/countryDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'countriesFinder',
      component: countriesFinder
    },
    {
      path: '/countries',
      name: 'countriesHome',
      component: countriesHome
    },
    {
      path: '/countries/detail/:countryName',
      name: 'countryDetail',
      component: countryDetail
    }
  ]
})
