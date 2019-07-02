import Vue from 'vue'
import Router from 'vue-router'
import City from '@/components/city'
import Site from '@/components/site'
import Login from '@/components/login'
import Mine from '@/components/mine'
import TakeOut from '@/components/takeOut'
import Order from '@/components/order'
import Grabble from '@/components/grabble'
import Classify from '@/components/classify'


// 
import Restaurant from '@/components/restaurant'
import Shopdetail from '@/components/shopdetail'
import SafeInfo from '@/components/safeInfo'
import Fooddetail from '@/components/fooddetail'

//
import Adress from '@/components/adress'
import Account from '@/components/account'
import Amend from '@/components/amend'
import Reset from '@/components/reset'
import Wallet from '@/components/wallet'
import Issue from '@/components/issue'
import Integral from '@/components/integral'
import Problem from '@/components/problem'
import Members from '@/components/members'
import Preferential from '@/components/preferential'
import Pay from '@/components/pay'
import Mall from '@/components/mall'
import Exchange from '@/components/exchange'
import Record from '@/components/record'
import Download from '@/components/download'
import Service from '@/components/service'
import Public from '@/components/public'
import Discounts from '@/components/discounts'
import Vouchers from '@/components/vouchers'
import History from '@/components/history'
import Barter from '@/components/barter'
import Recommended from '@/components/recommended'
import Envelopes from '@/components/envelopes'
import Envelopesed from '@/components/envelopesed'
import City1 from '@/components/city1'
import Take from '@/components/take'
import Newaddress from '@/components/newaddress'
import Searchaddress from '@/components/Searchaddress'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'city',
      component: City
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/Searchaddress',
      name: 'Searchaddress',
      component: Searchaddress
    },
    {
      path: '/newaddress',
      name: 'newaddress',
      component: Newaddress
    },
    {
      path: '/take',
      name: 'take',
      component: Take
    },
    {
      path: '/city1',
      name: 'city1',
      component: City1
    },
    {
      path: '/envelopes',
      name: 'envelopes',
      component: Envelopes
    },
    {
      path: '/envelopesed',
      name: 'envelopesed',
      component: Envelopesed
    },
    {
      path: '/recommended',
      name: 'recommended',
      component: Recommended
    },
    {
      path: '/barter',
      name: 'barter',
      component: Barter
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/vouchers',
      name: 'vouchers',
      component: Vouchers
    },
    {
      path: '/discounts',
      name: 'discounts',
      component: Discounts
    },
    {
      path: '/public',
      name: 'public',
      component: Public
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    },
    {
      path: '/record',
      name: 'record',
      component: Record
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: Exchange
    },
    {
      path: '/mall',
      name: 'mall',
      component: Mall
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay
    },
    {
      path: '/preferential',
      name: 'preferential',
      component: Preferential
    },
    {
      path: '/members',
      name: 'members',
      component: Members
    },
    {
      path: '/problem',
      name: 'problem',
      component: Problem
    },
    {
      path: '/issue',
      name: 'issue',
      component: Issue
    },
    {
      path: '/integral',
      name: 'integral',
      component: Integral
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: Wallet
    },
    {
      path: '/reset',
      name: 'reset',
      component: Reset
    },
    {
      path: '/amend',
      name: 'amend',
      component: Amend
    },{
      path: '/adress',
      name: 'adress',
      component: Adress
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },



    {
      path:'/site',
      name:'site',
      component:Site
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/restaurant',
      name:'restaurant',
      component:Restaurant      
    },
    {
      path:'/fooddetail',
      name:'fooddetail',
      component:Fooddetail      
    },
    {
      path:'/shopdetail',
      name:'shopdetail',
      component:Shopdetail
    },
    {
      path:'/safeInfo',
      name:'safeInfo',
      component:SafeInfo
    },
    
        {
          path:'/mine',
          name:'mine',
          component:Mine
        },
        {
          path:'/takeOut',
          name:'takeOut',
          component:TakeOut
        },
        {
          path:'/order',
          name:'order',
          component:Order
        },
        {
          path:'/grabble',
          name:'grabble',
          component:Grabble
        },
        {
          path:'/classify',
          name:'classify',
          component:Classify,
        },
      
    


  ]
})
