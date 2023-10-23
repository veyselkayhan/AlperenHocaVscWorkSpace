/*
User nesnesi yaratalım json bir obje olucak.İçerisinde 
User->
Name->
Surname->
Age->
UserName->
password->
İnterest [] array -> birden fazla ilgi alanı olacak
expenses [] -> 1 den fazla harcaması olacak.
address-> adres isminde bir nesne içericek 
country->
city->
*/


let user = {
   
        Name: "Veysel",
        Surname: "Kayhan",
        Age: 25,
        UserName: "veyselkayhan",
        Password: "123",
        Interest: ["Futbol", "F1"],
        Expenses: [250, 350,600,87,57,69,55,70,58,478],
        Address: {
            Country: "Turkiye",
            City: "Mugla"
        }
    
};

let userJSON = JSON.stringify(user,null,2);
console.log(userJSON);
console.log(user.Address.City)

//harcamalar toplamını getiren fonskiyonu yazalım.

function getExpenses() {
    let toplam = 0;
    user.Expenses.forEach((x) => {
        toplam += x; 
    });
    return toplam;
}

console.log(getExpenses()); 

const sumExpenses=()=>{
    let sum=user.Expenses.reduce((x,y)=>x+y);
    return sum;
}
console.log(sumExpenses())

const sumExpenses2=(array)=>{
    let sum = array.reduce((x,y)=>x+y);
    return sum;
}

console.log(sumExpenses2(user.Expenses));

function getLastTwoExp(){
    let index=user.Expenses.length-2;
    return user.Expenses.slice(index);
}

console.log(getLastTwoExp())

function getLastTwoExp2(){
    return user.Expenses.slice(-2);
}

console.log(getLastTwoExp2());


//interest listesine 1.elemandan itibaren dışardan girdiğim 2 ilgi alanını eklemek istiyorum



function addInterest(Interest1,Interest2){
    user.Interest.splice(1,0,Interest1,Interest2);
}

addInterest("motoGp","WWE");
user.Interest.push("Basketball")
console.log(user.Interest);


function login(){
    let username=document.getElementById("myusername").value;
    let password=document.getElementById("mypassword").value;

    if(username===user.UserName && password===user.Password){
        setTimeout(getHomePage,3000);
        setTimeout(()=>{
            window.location.href="/html_Ornek7/home.html"
        },3000);
    }else{
        alert("Giriş Başarisiz")
    }
}

const getHomePage = () =>{
    window.location.href="/html_Ornek7/home.html"
}

function login2(){
    let form = document.querySelector("form")
    console.log(form)

    if(
     form.username.value===user.UserName && 
      form.password.value=== user.Password
    ){
        alert("giriş başarılı");
        setTimeout(getHomePage,5000);
    }else{
        alert("Giriş Başarısız")
    }
}


