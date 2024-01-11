var test;

test = prompt("Nhập vào một số bất kì");

if(isNaN(test)){
    console.log("ko hợp lệ");
}else if(test %2 ==0){
    console.log("số chẵn");
}else{
    console.log("số lẻ");
}
