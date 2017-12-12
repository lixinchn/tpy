export function createGetParams(data) {
  let arrParams = []
  Object.keys(data).forEach(key => {
    arrParams.push(key + '=' + data[key])
  })
  return arrParams.join('&')
}
