import _ from 'lodash'

export const findUser = (list, id) => _.find(list, (o) => o.id === id);

export const findSearchText = (list, text) => _.filter(list, (item) =>

  item.userName.toLowerCase().indexOf(text.toLowerCase()) >= 0 || item.postTitle.toLowerCase().indexOf(text.toLowerCase()) >= 0
)
