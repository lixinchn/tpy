import fetch from '../utils/fetch'


export function BLOG_GetBlogList(data) {
  return fetch({
    url: 'bloglist.php?' + data,
    method: 'get',
  })
}

export function BLOG_GetBlogCategory() {
  return fetch({
    url: 'blogcat.php',
    method: 'get',
  })
}

 export function BLOG_SearchByKey(data) {
  return fetch({
    url: 'search.php?' + data,
    method: 'get',
  })
 }

 export function BLOG_GetBlogInfo(data) {
  return fetch({
    url: 'bloginfo.php?' + data,
    method: 'get',
  })
 }
