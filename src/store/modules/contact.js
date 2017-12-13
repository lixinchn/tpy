import {CONTACT_GetYoutubeVideoInfo} from '../../api/contact'


const contact = {
  state: {
    youtubeVideoInfo: {},
  },
  mutations: {
    SET_YOUTUBE_VIDEO_INFO: (state, youtubeVideoInfo) => {
      state.youtubeVideoInfo = youtubeVideoInfo
    },
  },

  actions: {
    // get youtube info
    CONTACT_GetYoutubeVideoInfo({commit}, data) {
      return new Promise((resolve, reject) => {
        CONTACT_GetYoutubeVideoInfo(data).then(response => {
          resolve(response.data)
        })
      })
    },
  }
}

export default contact
