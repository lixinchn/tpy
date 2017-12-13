const getters = {
  blogList: state => state.blog.blogList,
  hasSearchResults: state => state.blog.hasSearchResults,
  youtubeVideoInfo: state => state.contact.youtubeVideoInfo,
  closeVideoForm: state => state.contact.closeVideoForm,
  textareaVideoInfo: state => state.contact.textareaVideoInfo,
}

export default getters
