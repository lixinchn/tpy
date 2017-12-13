import {CONTACT_GetYoutubeVideoInfo, CONTACT_Contact} from '../../api/contact'


const contact = {
  state: {
    youtubeVideoInfo: {},
    textareaVideoInfo: {},
    closeVideoForm: false,
    closeImageForm: false,
  },
  mutations: {
    SET_YOUTUBE_VIDEO_INFO: (state, youtubeVideoInfo) => {
      state.youtubeVideoInfo = youtubeVideoInfo
    },

    SET_CLOSE_VIDEO_FORM: (state) => {
      state.closeVideoForm = !state.closeVideoForm
    },
    SET_TEXTAREA_VIDEO_INFO: (state) => {
      state.textareaVideoInfo = state.youtubeVideoInfo
      state.youtubeVideoInfo = {}
    },
    REMOVE_TEXTAREA_VIDEO_INFO: (state) => {
      state.textareaVideoInfo = {}
    },

    SET_CLOSE_IMAGE_FORM: (state) => {
      state.closeImageForm = !state.closeImageForm
    },
  },

  actions: {
    // get youtube info
    CONTACT_GetYoutubeVideoInfo({commit}, data) {
      return new Promise((resolve, reject) => {
        CONTACT_GetYoutubeVideoInfo(data).then(response => {
          commit('SET_YOUTUBE_VIDEO_INFO', response.data.data)
          resolve(response.data)
        })
      })
    },

    CONTACT_CloseVideoForm({commit}) {
      return new Promise((resolve, reject) => {
        commit('SET_CLOSE_VIDEO_FORM')
        resolve()
      })
    },

    CONTACT_CloseImageForm({commit}) {
      return new Promise((resolve, reject) => {
        commit('SET_CLOSE_IMAGE_FORM')
        resolve()
      })
    },

    CONTACT_SetTextareaVideoInfo({commit}) {
      return new Promise((resolve, reject) => {
        commit('SET_TEXTAREA_VIDEO_INFO')
        resolve()
      })
    },

    CONTACT_RemoveTextareaVideoInfo({commit}) {
      return new Promise((resolve, reject) => {
        commit('REMOVE_TEXTAREA_VIDEO_INFO')
        resolve()
      })
    },

    CONTACT_Contact({commit}, data) {
      return new Promise((resolve, reject) => {
        CONTACT_Contact(data).then(response => {
          resolve(response.data)
        })
      })
    },
  }
}

export default contact
