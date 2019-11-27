function billFor(month, activeSubscription, users) {
    // your code here!
  }
  
  /*******************
  * Helper functions *
  *******************/
  
  /**
    Takes a Date instance and returns a Date which is the first day
    of that month. For example:
  
    firstDayOfMonth(new Date(2019, 2, 7)) // => new Date(2019, 2, 1)
  
    Input type: Date
    Output type: Date
  **/
  function firstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1)
  }

  console.log(firstDayOfMonth(2019-01))
  
  /**
    Takes a Date object and returns a Date which is the last day
    of that month. For example:
  
    lastDayOfMonth(new Date(2019, 2, 7)) // => new Date(2019, 2, 28)
  
    Input type: Date
    Output type: Date
  **/
  function lastDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0)
  }
  
  /**
    Takes a Date object and returns a Date which is the next day.
    For example:
  
    nextDay(new Date(2019, 2, 7))  // => new Date(2019, 2, 8)
    nextDay(new Date(2019, 2, 28)) // => new Date(2019, 3, 1)
  
    Input type: Date
    Output type: Date
  **/
  function nextDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
  }