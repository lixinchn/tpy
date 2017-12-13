import fetch from '../utils/fetch'


export function CONTACT_GetYoutubeVideoInfo(data) {
  return fetch({
    url: 'vtitle.php?' + data,
    method: 'get',
  })
}
