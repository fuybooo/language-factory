import Vue from 'vue'
import {prefix, urlType} from '@/util/project/urls/url-util'

// 该接口与urls保持一致，保证使用this.$urls时能够通过"."得到提示
export interface Urls {
  demo: {
    table: {
      get: urlType,
      getById: urlType,
      create: urlType,
      edit: urlType,
      del: urlType,
    },
  },
  login: {
    login: urlType,
    hasLogin: urlType,
    forgot: urlType,
    register: urlType,
    logout: urlType,
  },
  // user: {
  //   getCrt: urlType,
  // },
  message: {
    list: urlType,
    changeStatus: urlType,
  },
}

const urls: Urls = {
  demo: {
    table: {
      get: {url: 'table/get', isStatic: true, prefix: prefix.demo},
      getById: {url: 'table/getById', isStatic: true, prefix: prefix.demo},
      create: {url: 'table/create', isStatic: true, prefix: prefix.demo},
      edit: {url: 'table/edit', isStatic: true, prefix: prefix.demo},
      del: {url: 'table/del', isStatic: true, prefix: prefix.demo},
    },
  },
  login: {
    // 登录
    login: {url: 'login', isStatic: true, prefix: prefix.login},
    // 根据token判断是否已经登录，若已登陆，则返回用户的登录信息
    hasLogin: {url: 'hasLogin', isStatic: true, prefix: prefix.login},
    forgot: {url: 'forgot', isStatic: true, prefix: prefix.login},
    register: {url: 'register'},
    logout: {url: 'logout', isStatic: true, prefix: prefix.login},
  },
  message: {
    list: {url: 'list', isStatic: true, prefix: prefix.message},
    changeStatus: {url: 'changeStatus', isStatic: true, prefix: prefix.message},
  },
}
Vue.prototype.$urls = urls
