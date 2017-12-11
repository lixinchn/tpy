import fetch from '../utils/fetch'


export function SubmitGuessResult(data) {
  return fetch({
    url: 'addUser?' + data,
    method: 'get',
  })
}

export function StockPrice(data) {
  return fetch({
    url: 'insertRightPrice?' + data,
    method: 'get',
  })
}

export function Result(data) {
  return fetch({
    url: 'getUserList',
    method: 'get'
  })
}
