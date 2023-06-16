import React from 'react'

const MeetupContext = React.createContext({
  name: '',
  activeTopic: 'Arts and Culture',
  isShowRegisteredView: false,
  isShowErrorMsg: false,
  onChangeInput: () => {},
  onChangeTopic: () => {},
  onChangeIsShowRegisteredView: () => {},
  onChangeIsShowErrorMsg: () => {},
})

export default MeetupContext
