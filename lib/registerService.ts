const registerService = (name: string, initFn: () => void) => {
   if (process.env.NODE_ENV === 'development') {
      if (!(name in global)) {
         global[name] = initFn()
      }
      return global[name]
   }
   return initFn()
}

export default registerService
