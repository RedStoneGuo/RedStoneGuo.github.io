var arr1 = new Array("这是一段话：","这个网页写了很久","学会了很多知识","我觉得还不错","你呢？")
for(const element of arr1){
    console.log(element)
}

for(var prop in arr1){
    console.log("前缀"+prop+arr1[prop])
}

arr1.forEach((a,b)=>{
    console.log(a+" "+b)
})