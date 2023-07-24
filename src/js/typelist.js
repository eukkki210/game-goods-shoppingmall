function alinker(){
    let arrayAhref = $(".Goods > a")
    console.log(arrayAhref)
    for(let i=0; i<arrayAhref.length;i++){
        let a =$(arrayAhref[i])
        $(a).attr("href",`${i+1}.html`)
    }
}
alinker();