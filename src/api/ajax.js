import axios from 'axios'
import Vue from 'vue'
// import router from '../router/index.js'


//请求路径配置
window.config = {
  Host: {
    production: 'http://www.dawaki.com.cn/tonglejc',
    // development: 'http://www.dawaki.com.cn//tonglejc-beta',
    development: '/api',
    test: 'http://www.dawaki.com.cn/tonglejc'
  }
}



/**
 * 获取一个新的自定义的axios实例
 */
const ajaxUrl =
  process.env.NODE_ENV === 'development' ?
  window.config.Host.development // 开发环境中的后端地址
  :
  process.env.NODE_ENV === 'production' ?
  window.config.Host.production // 生产环境中的后端地址
  :
  window.config.Host.test // 测试环境的后端地址


axios.defaults.timeout = 10000;
axios.defaults.baseURL = '';
axios.defaults.withCredentials = true;

//http request 拦截器
axios.interceptors.request.use(
  config => {
    if (typeof config.url === 'object' && config.url.url) {
      config.url = config.url.url;
    } else {
      config.url = ajaxUrl + config.url;
    }
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/json',
      // "Access-Control-Allow-Origin": "http://ec2-52-83-199-126.cn-northwest-1.compute.amazonaws.com.cn"
    };
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.msg == "NEED_LOGIN") {
      alert('请先登录！！！');
      window.vm.$router.push({
          name: 'Login',
          params: {
            needLogin: true
          }
        });
    } else {
      return response;
    }
  },
  error => {
    return Promise.reject(error)
  }
);


/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(response => {
      resolve(response.data);
    }).catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(response => {
      resolve(response.data);
    }, err => {
      reject(err)
    })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(response => {
      resolve(response.data);
    }, err => {
      reject(err)
    })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(response => {
      resolve(response.data);
    }, err => {
      reject(err)
    })
  })
}
