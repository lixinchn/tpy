import {SubmitGuessResult, StockPrice, Result} from '../../api/log'


const log = {
  state: {
    logs: [],
    toggle_more_log: false,
    toggle_new_log: false,
    gt_time: '',
    lt_time: '',
  },
  mutations: {
  },

  actions: {
    // 提交结果
    SubmitGuessResult({commit}, data) {
      return new Promise((resolve, reject) => {
        SubmitGuessResult(data).then(response => {
          resolve(response.data)
        })
      })
    },

    // 提交开盘价
    StockPrice({commit}, data) {
      return new Promise((resolve, reject) => {
        StockPrice(data).then(response => {
          resolve(response.data)
        })
      })
    },

    // 获取结果
    Result({commit}, data) {
      return new Promise((resolve, reject) => {
        Result().then(response => {
          resolve(response.data)
        })
      })
    }
  }
}

export default log
