const registerRetrieveService = (name: string, initFn: () => void) => {
   if (!(name in global)) {
      global[name] = initFn()
   }
   return global[name]
}

export default registerRetrieveService
