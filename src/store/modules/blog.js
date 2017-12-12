import {BLOG_GetBlogList, BLOG_GetBlogCategory, BLOG_SearchByKey, BLOG_GetBlogInfo} from '../../api/blog'


const log = {
  state: {
    blogList: [],
  },
  mutations: {
    SET_BLOG_LIST: (state, blogList) => {
      state.blogList = blogList
    }
  },

  actions: {
    // 获取 blog list
    BLOG_GetBlogList({commit}, data) {
      return new Promise((resolve, reject) => {
        BLOG_GetBlogList(data).then(response => {
          if (response.data.data.list)
            commit('SET_BLOG_LIST', response.data.data.list)
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

    BLOG_SearchByKey({commit}, data) {
      return new Promise((resolve, reject) => {
        BLOG_SearchByKey(data).then(response => {
          if (response.data.data.list)
            commit('SET_BLOG_LIST', response.data.data.list)
          resolve(response.data)
        })
      })
    },

    BLOG_GetBlogInfo({commit}, data) {
      return new Promise((resolve, reject) => {
        BLOG_GetBlogInfo(data).then(response => {
          resolve(response.data)
        })
      })
    }
  }
}

export default log
