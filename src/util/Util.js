export function createDataList(stringList, name, id){
  let array = []
  for (let i = 0; i < stringList.length; i++){
    array.push(
      {
        id : i,
        text : stringList[i]
      }
    )
  }
  return {mediaID:id,
  name : name,
  data:array}
}
