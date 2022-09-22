export default function prepareToSerializeJSON(obj) {
   console.log('obj1', obj)
   Object.keys(obj).forEach((key) => obj[key] === undefined && delete obj[key])
   console.log('obj2', obj)
   return JSON.parse(JSON.stringify(obj))
}
