import React from 'react'

const RegisterContext = React.createContext({
  topicsList: [],
  isRegister: null,
  onSuccessRegister: () => {},
  name: '',
  topic: '',
})

export default RegisterContext
