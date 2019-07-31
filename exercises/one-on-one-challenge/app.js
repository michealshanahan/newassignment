const repeat = (arr) => {
    const x = arr.split('');
    const indexArray = [[]];
    for(i = 0; i < x.length; i++){
        for(j = 0; j < indexArray.length; j++){
            return x.filter((value, index, self)=> {
                return self.indexOf(value) === index;
            })
            }  
        }
}


let string = "Thish thish the string"
console.log(repeat(string))