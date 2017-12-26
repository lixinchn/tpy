import fetch from '../utils/fetch'


export function GetSliceInfo() {
  return fetch({
    url: 'slice.php',
    method: 'get',
  })
}
