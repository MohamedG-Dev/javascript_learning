function regexVar(){
    let re = new RegExp('(Mr?s|[MDE]r)\\.\\w+$')
    return re;
}

const str = "Mr.X";
const regexp = regexVar();
console.log(!!str.match(regexp));