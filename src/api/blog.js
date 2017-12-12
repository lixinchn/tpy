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
