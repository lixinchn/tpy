import {BLOG_GetBlogList, BLOG_GetBlogCategory} from '../../api/blog'


const log = {
  state: {
  },
  mutations: {
  },

  actions: {
    // 获取 blog list
    BLOG_GetBlogList({commit}, data) {
      return new Promise((resolve, reject) => {
        BLOG_GetBlogList(data).then(response => {
          resolve(response.data)
        })
      })
    },

    // 获取 blog category
    BLOG_GetBlogCategory({commit}) {
      return new Promise((resolve, reject) => {
        BLOG_GetBlogCategory().then(response => {
          resolve(response.data)
        })
      })
    },
  }
}

export default log
