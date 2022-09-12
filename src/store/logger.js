const logger = store => next => action => {


    let result = next(action)
    console.groupEnd()
    return result
  }
  
  export default logger