import React from 'react'
// import { useDispatch } from 'react-redux'
import { addSuccessFlashMessage, addErrorFlashMessage, addInfoFlashMessage } from './service'

const useAddFlashMessage = () => {
  // const dispatch = useDispatch()

  // const addFlashMessage = React.useCallback(
  //   (flashMessage) => dispatch(
  //     addFlashMessage()
  //   ),
  //   [dispatch]
  // )

  return { addSuccessFlashMessage, addErrorFlashMessage, addInfoFlashMessage }
}

export default useAddFlashMessage