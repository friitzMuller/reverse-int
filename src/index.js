module.exports = function reverse (arr) {
    if(arr < 0){
        arr = arr * -1
        } else if(arr.length -1 == 0){
        String(arr).slice(0,-1)
        console.log(arr)
        }
        let arrOne = []
            let z = String(arr).split('')
          z.reverse()
            z.map((item)=>{
                    arrOne.push(+item)
            })
            return +arrOne.join('')
}
