function exchangeMoney(){
    let a = document.getElementById("Amount").value;
    let f = document.getElementById("fromcurrency").value;
    let t = document.getElementById("tocurrency").value;
    let money;
    if (f == "VND") {
        if (t == "USD") money = a / 23000 + " USD"
    }
if(f=="USD"){
    if(t=="VND")money= a*23000+ " VND"
}
    document.getElementById('result').innerText = "Result:" + money ;
}