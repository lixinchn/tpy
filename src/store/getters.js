const getters = {
  logs: state => state.log.logs,
  toggle_more_log: state => state.log.toggle_more_log,
  toggle_new_log: state => state.log.toggle_new_log,
  gt_time: state => state.log.gt_time,
  lt_time: state => state.log.lt_time,
}

export default getters
