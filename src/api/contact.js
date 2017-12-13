import fetch from '../utils/fetch'


export function CONTACT_GetYoutubeVideoInfo(data) {
  return fetch({
    url: 'vtitle.php?' + data,
    method: 'get',
  })
}

export function CONTACT_Contact(data) {
  return fetch({
    url: 'joinus.php',
    method: 'post',
    data,
  })
}
