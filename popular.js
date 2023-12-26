let introUl = document.getElementById('intro_ul')

let footer = document.getElementById('footer')

let cartLi = document.getElementById('cart_li')

let cartDiv = document.getElementById('cart_div_main')

let closeCart = document.getElementById('close_cart')

// cart buttons

let cartA  = document.getElementById('cart_A')
let cartB  = document.getElementById('cart_B')
let cartC  = document.getElementById('cart_C')
let cartD  = document.getElementById('cart_D')
let cartE  = document.getElementById('cart_E')
let cartF  = document.getElementById('cart_F')
let cartG  = document.getElementById('cart_G')
let cartH  = document.getElementById('cart_H')
let cartI  = document.getElementById('cart_I')
let cartJ  = document.getElementById('cart_J')
let cartK  = document.getElementById('cart_K')
let cartL  = document.getElementById('cart_L')
let cartM  = document.getElementById('cart_M')
let cartN  = document.getElementById('cart_N')
let cartO  = document.getElementById('cart_O')

// cart names

let nameA = document.getElementById('name_A')
let nameB = document.getElementById('name_B')
let nameC = document.getElementById('name_C')
let nameD = document.getElementById('name_D')
let nameE = document.getElementById('name_E')
let nameF = document.getElementById('name_F')
let nameG = document.getElementById('name_G')
let nameH = document.getElementById('name_H')
let nameI = document.getElementById('name_I')
let nameJ = document.getElementById('name_J')
let nameK = document.getElementById('name_K')
let nameL = document.getElementById('name_L')
let nameM = document.getElementById('name_M')
let nameN = document.getElementById('name_N')
let nameO = document.getElementById('name_O')

// cart price

let priceA = document.getElementById('price_A')
let priceB = document.getElementById('price_B')
let priceC = document.getElementById('price_C')
let priceD = document.getElementById('price_D')
let priceE = document.getElementById('price_E')
let priceF = document.getElementById('price_F')
let priceG = document.getElementById('price_G')
let priceH = document.getElementById('price_H')
let priceI = document.getElementById('price_I')
let priceJ = document.getElementById('price_J')
let priceK = document.getElementById('price_K')
let priceL = document.getElementById('price_L')
let priceM = document.getElementById('price_M')
let priceN = document.getElementById('price_N')
let priceO = document.getElementById('price_O')



window.addEventListener('scroll', function(element) {

	

	let x = document.documentElement.scrollTop
	

    if (x  > 800) {

        footer.style.width = " 100%"

    }

    if (x  < 800) {

        footer.style.width = " 0px"

    }



})

// document.addEventListener('click', function(e) {
//     console.log(e.target.parentNode.parentNode.firstChild.nextElementSibling.firstChild.innerText)
//     console.log(e.target.parentNode)
//     // document.getElementsByClassName('cart_ray').firstChild.innerText = '+'

//     console.log( document.getElementsByClassName('cart_ray'));

//    let cartRay =  document.getElementsByClassName('cart_ray')

//    document.getElementsByClassName('cart_ray_title').innerText = '+'
//     // document.getElementsByClassName('cart_ray').children[1].innerText = 'name'
//     // document.getElementsByClassName('cart_ray').children[2].innerText = 'lastname'
// })



// cart logic


cartLi.addEventListener("click",cartfunction);


function cartfunction() {


 cartDiv.style.visibility = "visible"
 cartDiv.style.zIndex = "2"



}

closeCart.addEventListener("click",cartFunctionClose);

function cartFunctionClose() {

    cartDiv.style.visibility = "hidden"
}

document.getElementById('checkout_button').addEventListener('click',checkOutFunction);


function checkOutFunction() {

    alert("Due To Lack Of Products Please Contact Us \n \n (747)-245-9985 or phinvest@yahoo.com")
}

// A


cartA.addEventListener("click",cartAfunction);


function cartAfunction() {


    if (document.getElementById('cart_ray_A').children[0].innerText == "") {
        alert("Open Your Cart Before You Add Any Further Product's") 
        document.getElementById('cart_ray_A').children[0].innerText = "+"
        document.getElementById('cart_ray_A').children[1].innerText = nameA.innerText
        document.getElementById('cart_ray_A').children[2].innerText = priceA.innerText

    }else if (document.getElementById('cart_ray_B').children[0].innerText == "" && document.getElementById('cart_ray_A').children[0].innerText == "+" ){

        document.getElementById('cart_ray_B').children[0].innerText = "+"
        document.getElementById('cart_ray_B').children[1].innerText = nameA.innerText
        document.getElementById('cart_ray_B').children[2].innerText = priceA.innerText

    }else if (document.getElementById('cart_ray_C').children[0].innerText == "" && document.getElementById('cart_ray_B').children[0].innerText == "+") {

        document.getElementById('cart_ray_C').children[0].innerText = "+"
        document.getElementById('cart_ray_C').children[1].innerText = nameA.innerText
        document.getElementById('cart_ray_C').children[2].innerText = priceA.innerText

    }else if (document.getElementById('cart_ray_D').children[0].innerText == "" && document.getElementById('cart_ray_C').children[0].innerText == "+") {

        document.getElementById('cart_ray_D').children[0].innerText = "+"
        document.getElementById('cart_ray_D').children[1].innerText = nameA.innerText
        document.getElementById('cart_ray_D').children[2].innerText = priceA.innerText

    }else if (document.getElementById('cart_ray_E').children[0].innerText == "" && document.getElementById('cart_ray_D').children[0].innerText == "+") {

        document.getElementById('cart_ray_E').children[0].innerText = "+"
        document.getElementById('cart_ray_E').children[1].innerText = nameA.innerText
        document.getElementById('cart_ray_E').children[2].innerText = priceA.innerText

    }else if (document.getElementById('cart_ray_F').children[0].innerText == "" && document.getElementById('cart_ray_E').children[0].innerText == "+") {

        document.getElementById('cart_ray_F').children[0].innerText = "+"
        document.getElementById('cart_ray_F').children[1].innerText = nameA.innerText
        document.getElementById('cart_ray_F').children[2].innerText = priceA.innerText

    }else if (document.getElementById('cart_ray_G').children[0].innerText == "" && document.getElementById('cart_ray_F').children[0].innerText == "+") {

        document.getElementById('cart_ray_G').children[0].innerText = "+"
        document.getElementById('cart_ray_G').children[1].innerText = nameA.innerText
        document.getElementById('cart_ray_G').children[2].innerText = priceA.innerText

    }else if (document.getElementById('cart_ray_H').children[0].innerText == "" && document.getElementById('cart_ray_G').children[0].innerText == "+") {

        document.getElementById('cart_ray_H').children[0].innerText = "+"
        document.getElementById('cart_ray_H').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_H').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_I').children[0].innerText == "" && document.getElementById('cart_ray_H').children[0].innerText == "+") {

        document.getElementById('cart_ray_I').children[0].innerText = "+"
        document.getElementById('cart_ray_I').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_I').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_J').children[0].innerText == "" && document.getElementById('cart_ray_I').children[0].innerText == "+") {

        document.getElementById('cart_ray_J').children[0].innerText = "+"
        document.getElementById('cart_ray_J').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_J').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_K').children[0].innerText == "" && document.getElementById('cart_ray_J').children[0].innerText == "+") {

        document.getElementById('cart_ray_K').children[0].innerText = "+"
        document.getElementById('cart_ray_K').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_K').children[2].innerText = priceK.innerText
    }
    

    

}

// B


cartB.addEventListener("click",cartBfunction);


function cartBfunction() {


    if (document.getElementById('cart_ray_A').children[0].innerText == "") {
        alert("Open Your Cart Before You Add Any Further Product's") 
        document.getElementById('cart_ray_A').children[0].innerText = "+"
        document.getElementById('cart_ray_A').children[1].innerText = nameB.innerText
        document.getElementById('cart_ray_A').children[2].innerText = priceB.innerText

    }else if (document.getElementById('cart_ray_B').children[0].innerText == "" && document.getElementById('cart_ray_A').children[0].innerText == "+" ){

        document.getElementById('cart_ray_B').children[0].innerText = "+"
        document.getElementById('cart_ray_B').children[1].innerText = nameB.innerText
        document.getElementById('cart_ray_B').children[2].innerText = priceB.innerText

    }else if (document.getElementById('cart_ray_C').children[0].innerText == "" && document.getElementById('cart_ray_B').children[0].innerText == "+") {

        document.getElementById('cart_ray_C').children[0].innerText = "+"
        document.getElementById('cart_ray_C').children[1].innerText = nameB.innerText
        document.getElementById('cart_ray_C').children[2].innerText = priceB.innerText

    }else if (document.getElementById('cart_ray_D').children[0].innerText == "" && document.getElementById('cart_ray_C').children[0].innerText == "+") {

        document.getElementById('cart_ray_D').children[0].innerText = "+"
        document.getElementById('cart_ray_D').children[1].innerText = nameB.innerText
        document.getElementById('cart_ray_D').children[2].innerText = priceB.innerText

    }else if (document.getElementById('cart_ray_E').children[0].innerText == "" && document.getElementById('cart_ray_D').children[0].innerText == "+") {

        document.getElementById('cart_ray_E').children[0].innerText = "+"
        document.getElementById('cart_ray_E').children[1].innerText = nameB.innerText
        document.getElementById('cart_ray_E').children[2].innerText = priceB.innerText

    }else if (document.getElementById('cart_ray_F').children[0].innerText == "" && document.getElementById('cart_ray_E').children[0].innerText == "+") {

        document.getElementById('cart_ray_F').children[0].innerText = "+"
        document.getElementById('cart_ray_F').children[1].innerText = nameB.innerText
        document.getElementById('cart_ray_F').children[2].innerText = priceB.innerText

    }else if (document.getElementById('cart_ray_G').children[0].innerText == "" && document.getElementById('cart_ray_F').children[0].innerText == "+") {

        document.getElementById('cart_ray_G').children[0].innerText = "+"
        document.getElementById('cart_ray_G').children[1].innerText = nameB.innerText
        document.getElementById('cart_ray_G').children[2].innerText = priceB.innerText

    }else if (document.getElementById('cart_ray_H').children[0].innerText == "" && document.getElementById('cart_ray_G').children[0].innerText == "+") {

        document.getElementById('cart_ray_H').children[0].innerText = "+"
        document.getElementById('cart_ray_H').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_H').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_I').children[0].innerText == "" && document.getElementById('cart_ray_H').children[0].innerText == "+") {

        document.getElementById('cart_ray_I').children[0].innerText = "+"
        document.getElementById('cart_ray_I').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_I').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_J').children[0].innerText == "" && document.getElementById('cart_ray_I').children[0].innerText == "+") {

        document.getElementById('cart_ray_J').children[0].innerText = "+"
        document.getElementById('cart_ray_J').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_J').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_K').children[0].innerText == "" && document.getElementById('cart_ray_J').children[0].innerText == "+") {

        document.getElementById('cart_ray_K').children[0].innerText = "+"
        document.getElementById('cart_ray_K').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_K').children[2].innerText = priceK.innerText
    }
    
}

// C


cartC.addEventListener("click",cartCfunction);


function cartCfunction() {


    if (document.getElementById('cart_ray_A').children[0].innerText == "") {
        alert("Open Your Cart Before You Add Any Further Product's") 
        document.getElementById('cart_ray_A').children[0].innerText = "+"
        document.getElementById('cart_ray_A').children[1].innerText = nameC.innerText
        document.getElementById('cart_ray_A').children[2].innerText = priceC.innerText

    }else if (document.getElementById('cart_ray_B').children[0].innerText == "" && document.getElementById('cart_ray_A').children[0].innerText == "+" ){

        document.getElementById('cart_ray_B').children[0].innerText = "+"
        document.getElementById('cart_ray_B').children[1].innerText = nameC.innerText
        document.getElementById('cart_ray_B').children[2].innerText = priceC.innerText

    }else if (document.getElementById('cart_ray_C').children[0].innerText == "" && document.getElementById('cart_ray_B').children[0].innerText == "+") {

        document.getElementById('cart_ray_C').children[0].innerText = "+"
        document.getElementById('cart_ray_C').children[1].innerText = nameC.innerText
        document.getElementById('cart_ray_C').children[2].innerText = priceC.innerText

    }else if (document.getElementById('cart_ray_D').children[0].innerText == "" && document.getElementById('cart_ray_C').children[0].innerText == "+") {

        document.getElementById('cart_ray_D').children[0].innerText = "+"
        document.getElementById('cart_ray_D').children[1].innerText = nameC.innerText
        document.getElementById('cart_ray_D').children[2].innerText = priceC.innerText

    }else if (document.getElementById('cart_ray_E').children[0].innerText == "" && document.getElementById('cart_ray_D').children[0].innerText == "+") {

        document.getElementById('cart_ray_E').children[0].innerText = "+"
        document.getElementById('cart_ray_E').children[1].innerText = nameC.innerText
        document.getElementById('cart_ray_E').children[2].innerText = priceC.innerText

    }else if (document.getElementById('cart_ray_F').children[0].innerText == "" && document.getElementById('cart_ray_E').children[0].innerText == "+") {

        document.getElementById('cart_ray_F').children[0].innerText = "+"
        document.getElementById('cart_ray_F').children[1].innerText = nameC.innerText
        document.getElementById('cart_ray_F').children[2].innerText = priceC.innerText

    }else if (document.getElementById('cart_ray_G').children[0].innerText == "" && document.getElementById('cart_ray_F').children[0].innerText == "+") {

        document.getElementById('cart_ray_G').children[0].innerText = "+"
        document.getElementById('cart_ray_G').children[1].innerText = nameC.innerText
        document.getElementById('cart_ray_G').children[2].innerText = priceC.innerText

    }else if (document.getElementById('cart_ray_H').children[0].innerText == "" && document.getElementById('cart_ray_G').children[0].innerText == "+") {

        document.getElementById('cart_ray_H').children[0].innerText = "+"
        document.getElementById('cart_ray_H').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_H').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_I').children[0].innerText == "" && document.getElementById('cart_ray_H').children[0].innerText == "+") {

        document.getElementById('cart_ray_I').children[0].innerText = "+"
        document.getElementById('cart_ray_I').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_I').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_J').children[0].innerText == "" && document.getElementById('cart_ray_I').children[0].innerText == "+") {

        document.getElementById('cart_ray_J').children[0].innerText = "+"
        document.getElementById('cart_ray_J').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_J').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_K').children[0].innerText == "" && document.getElementById('cart_ray_J').children[0].innerText == "+") {

        document.getElementById('cart_ray_K').children[0].innerText = "+"
        document.getElementById('cart_ray_K').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_K').children[2].innerText = priceK.innerText
    }
    
}

// D


cartD.addEventListener("click",cartDfunction);


function cartDfunction() {


    if (document.getElementById('cart_ray_A').children[0].innerText == "") {
        alert("Open Your Cart Before You Add Any Further Product's") 
        document.getElementById('cart_ray_A').children[0].innerText = "+"
        document.getElementById('cart_ray_A').children[1].innerText = nameD.innerText
        document.getElementById('cart_ray_A').children[2].innerText = priceD.innerText

    }else if (document.getElementById('cart_ray_B').children[0].innerText == "" && document.getElementById('cart_ray_A').children[0].innerText == "+" ){

        document.getElementById('cart_ray_B').children[0].innerText = "+"
        document.getElementById('cart_ray_B').children[1].innerText = nameD.innerText
        document.getElementById('cart_ray_B').children[2].innerText = priceD.innerText

    }else if (document.getElementById('cart_ray_C').children[0].innerText == "" && document.getElementById('cart_ray_B').children[0].innerText == "+") {

        document.getElementById('cart_ray_C').children[0].innerText = "+"
        document.getElementById('cart_ray_C').children[1].innerText = nameD.innerText
        document.getElementById('cart_ray_C').children[2].innerText = priceD.innerText

    }else if (document.getElementById('cart_ray_D').children[0].innerText == "" && document.getElementById('cart_ray_C').children[0].innerText == "+") {

        document.getElementById('cart_ray_D').children[0].innerText = "+"
        document.getElementById('cart_ray_D').children[1].innerText = nameD.innerText
        document.getElementById('cart_ray_D').children[2].innerText = priceD.innerText

    }else if (document.getElementById('cart_ray_E').children[0].innerText == "" && document.getElementById('cart_ray_D').children[0].innerText == "+") {

        document.getElementById('cart_ray_E').children[0].innerText = "+"
        document.getElementById('cart_ray_E').children[1].innerText = nameD.innerText
        document.getElementById('cart_ray_E').children[2].innerText = priceD.innerText

    }else if (document.getElementById('cart_ray_F').children[0].innerText == "" && document.getElementById('cart_ray_E').children[0].innerText == "+") {

        document.getElementById('cart_ray_F').children[0].innerText = "+"
        document.getElementById('cart_ray_F').children[1].innerText = nameD.innerText
        document.getElementById('cart_ray_F').children[2].innerText = priceD.innerText

    }else if (document.getElementById('cart_ray_G').children[0].innerText == "" && document.getElementById('cart_ray_F').children[0].innerText == "+") {

        document.getElementById('cart_ray_G').children[0].innerText = "+"
        document.getElementById('cart_ray_G').children[1].innerText = nameD.innerText
        document.getElementById('cart_ray_G').children[2].innerText = priceD.innerText

    }else if (document.getElementById('cart_ray_H').children[0].innerText == "" && document.getElementById('cart_ray_G').children[0].innerText == "+") {

        document.getElementById('cart_ray_H').children[0].innerText = "+"
        document.getElementById('cart_ray_H').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_H').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_I').children[0].innerText == "" && document.getElementById('cart_ray_H').children[0].innerText == "+") {

        document.getElementById('cart_ray_I').children[0].innerText = "+"
        document.getElementById('cart_ray_I').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_I').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_J').children[0].innerText == "" && document.getElementById('cart_ray_I').children[0].innerText == "+") {

        document.getElementById('cart_ray_J').children[0].innerText = "+"
        document.getElementById('cart_ray_J').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_J').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_K').children[0].innerText == "" && document.getElementById('cart_ray_J').children[0].innerText == "+") {

        document.getElementById('cart_ray_K').children[0].innerText = "+"
        document.getElementById('cart_ray_K').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_K').children[2].innerText = priceK.innerText
    }
    
}

// E

cartE.addEventListener("click",cartEfunction);


function cartEfunction() {


    if (document.getElementById('cart_ray_A').children[0].innerText == "") {
        alert("Open Your Cart Before You Add Any Further Product's") 
        document.getElementById('cart_ray_A').children[0].innerText = "+"
        document.getElementById('cart_ray_A').children[1].innerText = nameE.innerText
        document.getElementById('cart_ray_A').children[2].innerText = priceE.innerText

    }else if (document.getElementById('cart_ray_B').children[0].innerText == "" && document.getElementById('cart_ray_A').children[0].innerText == "+" ){

        document.getElementById('cart_ray_B').children[0].innerText = "+"
        document.getElementById('cart_ray_B').children[1].innerText = nameE.innerText
        document.getElementById('cart_ray_B').children[2].innerText = priceE.innerText

    }else if (document.getElementById('cart_ray_C').children[0].innerText == "" && document.getElementById('cart_ray_B').children[0].innerText == "+") {

        document.getElementById('cart_ray_C').children[0].innerText = "+"
        document.getElementById('cart_ray_C').children[1].innerText = nameE.innerText
        document.getElementById('cart_ray_C').children[2].innerText = priceE.innerText

    }else if (document.getElementById('cart_ray_D').children[0].innerText == "" && document.getElementById('cart_ray_C').children[0].innerText == "+") {

        document.getElementById('cart_ray_D').children[0].innerText = "+"
        document.getElementById('cart_ray_D').children[1].innerText = nameE.innerText
        document.getElementById('cart_ray_D').children[2].innerText = priceE.innerText

    }else if (document.getElementById('cart_ray_E').children[0].innerText == "" && document.getElementById('cart_ray_D').children[0].innerText == "+") {

        document.getElementById('cart_ray_E').children[0].innerText = "+"
        document.getElementById('cart_ray_E').children[1].innerText = nameE.innerText
        document.getElementById('cart_ray_E').children[2].innerText = priceE.innerText

    }else if (document.getElementById('cart_ray_F').children[0].innerText == "" && document.getElementById('cart_ray_E').children[0].innerText == "+") {

        document.getElementById('cart_ray_F').children[0].innerText = "+"
        document.getElementById('cart_ray_F').children[1].innerText = nameE.innerText
        document.getElementById('cart_ray_F').children[2].innerText = priceE.innerText

    }else if (document.getElementById('cart_ray_G').children[0].innerText == "" && document.getElementById('cart_ray_F').children[0].innerText == "+") {

        document.getElementById('cart_ray_G').children[0].innerText = "+"
        document.getElementById('cart_ray_G').children[1].innerText = nameE.innerText
        document.getElementById('cart_ray_G').children[2].innerText = priceE.innerText

    }else if (document.getElementById('cart_ray_H').children[0].innerText == "" && document.getElementById('cart_ray_G').children[0].innerText == "+") {

        document.getElementById('cart_ray_H').children[0].innerText = "+"
        document.getElementById('cart_ray_H').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_H').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_I').children[0].innerText == "" && document.getElementById('cart_ray_H').children[0].innerText == "+") {

        document.getElementById('cart_ray_I').children[0].innerText = "+"
        document.getElementById('cart_ray_I').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_I').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_J').children[0].innerText == "" && document.getElementById('cart_ray_I').children[0].innerText == "+") {

        document.getElementById('cart_ray_J').children[0].innerText = "+"
        document.getElementById('cart_ray_J').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_J').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_K').children[0].innerText == "" && document.getElementById('cart_ray_J').children[0].innerText == "+") {

        document.getElementById('cart_ray_K').children[0].innerText = "+"
        document.getElementById('cart_ray_K').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_K').children[2].innerText = priceK.innerText
    }
    
}


// F

cartF.addEventListener("click",cartFfunction);


function cartFfunction() {


    if (document.getElementById('cart_ray_A').children[0].innerText == "") {
        alert("Open Your Cart Before You Add Any Further Product's") 
        document.getElementById('cart_ray_A').children[0].innerText = "+"
        document.getElementById('cart_ray_A').children[1].innerText = nameF.innerText
        document.getElementById('cart_ray_A').children[2].innerText = priceF.innerText

    }else if (document.getElementById('cart_ray_B').children[0].innerText == "" && document.getElementById('cart_ray_A').children[0].innerText == "+" ){

        document.getElementById('cart_ray_B').children[0].innerText = "+"
        document.getElementById('cart_ray_B').children[1].innerText = nameF.innerText
        document.getElementById('cart_ray_B').children[2].innerText = priceF.innerText

    }else if (document.getElementById('cart_ray_C').children[0].innerText == "" && document.getElementById('cart_ray_B').children[0].innerText == "+") {

        document.getElementById('cart_ray_C').children[0].innerText = "+"
        document.getElementById('cart_ray_C').children[1].innerText = nameF.innerText
        document.getElementById('cart_ray_C').children[2].innerText = priceF.innerText

    }else if (document.getElementById('cart_ray_D').children[0].innerText == "" && document.getElementById('cart_ray_C').children[0].innerText == "+") {

        document.getElementById('cart_ray_D').children[0].innerText = "+"
        document.getElementById('cart_ray_D').children[1].innerText = nameF.innerText
        document.getElementById('cart_ray_D').children[2].innerText = priceF.innerText

    }else if (document.getElementById('cart_ray_E').children[0].innerText == "" && document.getElementById('cart_ray_D').children[0].innerText == "+") {

        document.getElementById('cart_ray_E').children[0].innerText = "+"
        document.getElementById('cart_ray_E').children[1].innerText = nameF.innerText
        document.getElementById('cart_ray_E').children[2].innerText = priceF.innerText

    }else if (document.getElementById('cart_ray_F').children[0].innerText == "" && document.getElementById('cart_ray_E').children[0].innerText == "+") {

        document.getElementById('cart_ray_F').children[0].innerText = "+"
        document.getElementById('cart_ray_F').children[1].innerText = nameF.innerText
        document.getElementById('cart_ray_F').children[2].innerText = priceF.innerText

    }else if (document.getElementById('cart_ray_G').children[0].innerText == "" && document.getElementById('cart_ray_F').children[0].innerText == "+") {

        document.getElementById('cart_ray_G').children[0].innerText = "+"
        document.getElementById('cart_ray_G').children[1].innerText = nameF.innerText
        document.getElementById('cart_ray_G').children[2].innerText = priceF.innerText

    }else if (document.getElementById('cart_ray_H').children[0].innerText == "" && document.getElementById('cart_ray_G').children[0].innerText == "+") {

        document.getElementById('cart_ray_H').children[0].innerText = "+"
        document.getElementById('cart_ray_H').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_H').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_I').children[0].innerText == "" && document.getElementById('cart_ray_H').children[0].innerText == "+") {

        document.getElementById('cart_ray_I').children[0].innerText = "+"
        document.getElementById('cart_ray_I').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_I').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_J').children[0].innerText == "" && document.getElementById('cart_ray_I').children[0].innerText == "+") {

        document.getElementById('cart_ray_J').children[0].innerText = "+"
        document.getElementById('cart_ray_J').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_J').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_K').children[0].innerText == "" && document.getElementById('cart_ray_J').children[0].innerText == "+") {

        document.getElementById('cart_ray_K').children[0].innerText = "+"
        document.getElementById('cart_ray_K').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_K').children[2].innerText = priceK.innerText
    }
    
}



// G


cartG.addEventListener("click",cartGfunction);


function cartGfunction() {


    if (document.getElementById('cart_ray_A').children[0].innerText == "") {
        alert("Open Your Cart Before You Add Any Further Product's") 
        document.getElementById('cart_ray_A').children[0].innerText = "+"
        document.getElementById('cart_ray_A').children[1].innerText = nameG.innerText
        document.getElementById('cart_ray_A').children[2].innerText = priceG.innerText

    }else if (document.getElementById('cart_ray_B').children[0].innerText == "" && document.getElementById('cart_ray_A').children[0].innerText == "+" ){

        document.getElementById('cart_ray_B').children[0].innerText = "+"
        document.getElementById('cart_ray_B').children[1].innerText = nameG.innerText
        document.getElementById('cart_ray_B').children[2].innerText = priceG.innerText

    }else if (document.getElementById('cart_ray_C').children[0].innerText == "" && document.getElementById('cart_ray_B').children[0].innerText == "+") {

        document.getElementById('cart_ray_C').children[0].innerText = "+"
        document.getElementById('cart_ray_C').children[1].innerText = nameG.innerText
        document.getElementById('cart_ray_C').children[2].innerText = priceG.innerText

    }else if (document.getElementById('cart_ray_D').children[0].innerText == "" && document.getElementById('cart_ray_C').children[0].innerText == "+") {

        document.getElementById('cart_ray_D').children[0].innerText = "+"
        document.getElementById('cart_ray_D').children[1].innerText = nameG.innerText
        document.getElementById('cart_ray_D').children[2].innerText = priceG.innerText

    }else if (document.getElementById('cart_ray_E').children[0].innerText == "" && document.getElementById('cart_ray_D').children[0].innerText == "+") {

        document.getElementById('cart_ray_E').children[0].innerText = "+"
        document.getElementById('cart_ray_E').children[1].innerText = nameG.innerText
        document.getElementById('cart_ray_E').children[2].innerText = priceG.innerText

    }else if (document.getElementById('cart_ray_F').children[0].innerText == "" && document.getElementById('cart_ray_E').children[0].innerText == "+") {

        document.getElementById('cart_ray_F').children[0].innerText = "+"
        document.getElementById('cart_ray_F').children[1].innerText = nameG.innerText
        document.getElementById('cart_ray_F').children[2].innerText = priceG.innerText

    }else if (document.getElementById('cart_ray_G').children[0].innerText == "" && document.getElementById('cart_ray_F').children[0].innerText == "+") {

        document.getElementById('cart_ray_G').children[0].innerText = "+"
        document.getElementById('cart_ray_G').children[1].innerText = nameG.innerText
        document.getElementById('cart_ray_G').children[2].innerText = priceG.innerText

    }else if (document.getElementById('cart_ray_H').children[0].innerText == "" && document.getElementById('cart_ray_G').children[0].innerText == "+") {

        document.getElementById('cart_ray_H').children[0].innerText = "+"
        document.getElementById('cart_ray_H').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_H').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_I').children[0].innerText == "" && document.getElementById('cart_ray_H').children[0].innerText == "+") {

        document.getElementById('cart_ray_I').children[0].innerText = "+"
        document.getElementById('cart_ray_I').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_I').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_J').children[0].innerText == "" && document.getElementById('cart_ray_I').children[0].innerText == "+") {

        document.getElementById('cart_ray_J').children[0].innerText = "+"
        document.getElementById('cart_ray_J').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_J').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_K').children[0].innerText == "" && document.getElementById('cart_ray_J').children[0].innerText == "+") {

        document.getElementById('cart_ray_K').children[0].innerText = "+"
        document.getElementById('cart_ray_K').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_K').children[2].innerText = priceK.innerText
    }
    
}

// H

cartH.addEventListener("click",cartHfunction);


function cartHfunction() {


    if (document.getElementById('cart_ray_A').children[0].innerText == "") {
        alert("Open Your Cart Before You Add Any Further Product's") 
        document.getElementById('cart_ray_A').children[0].innerText = "+"
        document.getElementById('cart_ray_A').children[1].innerText = nameH.innerText
        document.getElementById('cart_ray_A').children[2].innerText = priceH.innerText

    }else if (document.getElementById('cart_ray_B').children[0].innerText == "" && document.getElementById('cart_ray_A').children[0].innerText == "+" ){

        document.getElementById('cart_ray_B').children[0].innerText = "+"
        document.getElementById('cart_ray_B').children[1].innerText = nameH.innerText
        document.getElementById('cart_ray_B').children[2].innerText = priceH.innerText

    }else if (document.getElementById('cart_ray_C').children[0].innerText == "" && document.getElementById('cart_ray_B').children[0].innerText == "+") {

        document.getElementById('cart_ray_C').children[0].innerText = "+"
        document.getElementById('cart_ray_C').children[1].innerText = nameH.innerText
        document.getElementById('cart_ray_C').children[2].innerText = priceH.innerText

    }else if (document.getElementById('cart_ray_D').children[0].innerText == "" && document.getElementById('cart_ray_C').children[0].innerText == "+") {

        document.getElementById('cart_ray_D').children[0].innerText = "+"
        document.getElementById('cart_ray_D').children[1].innerText = nameH.innerText
        document.getElementById('cart_ray_D').children[2].innerText = priceH.innerText

    }else if (document.getElementById('cart_ray_E').children[0].innerText == "" && document.getElementById('cart_ray_D').children[0].innerText == "+") {

        document.getElementById('cart_ray_E').children[0].innerText = "+"
        document.getElementById('cart_ray_E').children[1].innerText = nameH.innerText
        document.getElementById('cart_ray_E').children[2].innerText = priceH.innerText

    }else if (document.getElementById('cart_ray_F').children[0].innerText == "" && document.getElementById('cart_ray_E').children[0].innerText == "+") {

        document.getElementById('cart_ray_F').children[0].innerText = "+"
        document.getElementById('cart_ray_F').children[1].innerText = nameH.innerText
        document.getElementById('cart_ray_F').children[2].innerText = priceH.innerText

    }else if (document.getElementById('cart_ray_G').children[0].innerText == "" && document.getElementById('cart_ray_F').children[0].innerText == "+") {

        document.getElementById('cart_ray_G').children[0].innerText = "+"
        document.getElementById('cart_ray_G').children[1].innerText = nameH.innerText
        document.getElementById('cart_ray_G').children[2].innerText = priceH.innerText

    }else if (document.getElementById('cart_ray_H').children[0].innerText == "" && document.getElementById('cart_ray_G').children[0].innerText == "+") {

        document.getElementById('cart_ray_H').children[0].innerText = "+"
        document.getElementById('cart_ray_H').children[1].innerText = nameH.innerText
        document.getElementById('cart_ray_H').children[2].innerText = priceH.innerText

    }else if (document.getElementById('cart_ray_I').children[0].innerText == "" && document.getElementById('cart_ray_H').children[0].innerText == "+") {

        document.getElementById('cart_ray_I').children[0].innerText = "+"
        document.getElementById('cart_ray_I').children[1].innerText = nameH.innerText
        document.getElementById('cart_ray_I').children[2].innerText = priceH.innerText

    }else if (document.getElementById('cart_ray_J').children[0].innerText == "" && document.getElementById('cart_ray_I').children[0].innerText == "+") {

        document.getElementById('cart_ray_J').children[0].innerText = "+"
        document.getElementById('cart_ray_J').children[1].innerText = nameH.innerText
        document.getElementById('cart_ray_J').children[2].innerText = priceH.innerText

    }else if (document.getElementById('cart_ray_K').children[0].innerText == "" && document.getElementById('cart_ray_J').children[0].innerText == "+") {

        document.getElementById('cart_ray_K').children[0].innerText = "+"
        document.getElementById('cart_ray_K').children[1].innerText = nameH.innerText
        document.getElementById('cart_ray_K').children[2].innerText = priceH.innerText
    }
    
}

// I


cartI.addEventListener("click",cartIfunction);


function cartIfunction() {


    if (document.getElementById('cart_ray_A').children[0].innerText == "") {
        alert("Open Your Cart Before You Add Any Further Product's") 
        document.getElementById('cart_ray_A').children[0].innerText = "+"
        document.getElementById('cart_ray_A').children[1].innerText = nameI.innerText
        document.getElementById('cart_ray_A').children[2].innerText = priceI.innerText

    }else if (document.getElementById('cart_ray_B').children[0].innerText == "" && document.getElementById('cart_ray_A').children[0].innerText == "+" ){

        document.getElementById('cart_ray_B').children[0].innerText = "+"
        document.getElementById('cart_ray_B').children[1].innerText = nameI.innerText
        document.getElementById('cart_ray_B').children[2].innerText = priceI.innerText

    }else if (document.getElementById('cart_ray_C').children[0].innerText == "" && document.getElementById('cart_ray_B').children[0].innerText == "+") {

        document.getElementById('cart_ray_C').children[0].innerText = "+"
        document.getElementById('cart_ray_C').children[1].innerText = nameI.innerText
        document.getElementById('cart_ray_C').children[2].innerText = priceI.innerText

    }else if (document.getElementById('cart_ray_D').children[0].innerText == "" && document.getElementById('cart_ray_C').children[0].innerText == "+") {

        document.getElementById('cart_ray_D').children[0].innerText = "+"
        document.getElementById('cart_ray_D').children[1].innerText = nameI.innerText
        document.getElementById('cart_ray_D').children[2].innerText = priceI.innerText

    }else if (document.getElementById('cart_ray_E').children[0].innerText == "" && document.getElementById('cart_ray_D').children[0].innerText == "+") {

        document.getElementById('cart_ray_E').children[0].innerText = "+"
        document.getElementById('cart_ray_E').children[1].innerText = nameI.innerText
        document.getElementById('cart_ray_E').children[2].innerText = priceI.innerText

    }else if (document.getElementById('cart_ray_F').children[0].innerText == "" && document.getElementById('cart_ray_E').children[0].innerText == "+") {

        document.getElementById('cart_ray_F').children[0].innerText = "+"
        document.getElementById('cart_ray_F').children[1].innerText = nameI.innerText
        document.getElementById('cart_ray_F').children[2].innerText = priceI.innerText

    }else if (document.getElementById('cart_ray_G').children[0].innerText == "" && document.getElementById('cart_ray_F').children[0].innerText == "+") {

        document.getElementById('cart_ray_G').children[0].innerText = "+"
        document.getElementById('cart_ray_G').children[1].innerText = nameI.innerText
        document.getElementById('cart_ray_G').children[2].innerText = priceI.innerText

    }else if (document.getElementById('cart_ray_H').children[0].innerText == "" && document.getElementById('cart_ray_G').children[0].innerText == "+") {

        document.getElementById('cart_ray_H').children[0].innerText = "+"
        document.getElementById('cart_ray_H').children[1].innerText = nameI.innerText
        document.getElementById('cart_ray_H').children[2].innerText = priceI.innerText

    }else if (document.getElementById('cart_ray_I').children[0].innerText == "" && document.getElementById('cart_ray_H').children[0].innerText == "+") {

        document.getElementById('cart_ray_I').children[0].innerText = "+"
        document.getElementById('cart_ray_I').children[1].innerText = nameI.innerText
        document.getElementById('cart_ray_I').children[2].innerText = priceI.innerText

    }else if (document.getElementById('cart_ray_J').children[0].innerText == "" && document.getElementById('cart_ray_I').children[0].innerText == "+") {

        document.getElementById('cart_ray_J').children[0].innerText = "+"
        document.getElementById('cart_ray_J').children[1].innerText = nameI.innerText
        document.getElementById('cart_ray_J').children[2].innerText = priceI.innerText

    }else if (document.getElementById('cart_ray_K').children[0].innerText == "" && document.getElementById('cart_ray_J').children[0].innerText == "+") {

        document.getElementById('cart_ray_K').children[0].innerText = "+"
        document.getElementById('cart_ray_K').children[1].innerText = nameI.innerText
        document.getElementById('cart_ray_K').children[2].innerText = priceI.innerText
    }
    
}

// J


cartJ.addEventListener("click",cartJfunction);


function cartJfunction() {


    if (document.getElementById('cart_ray_A').children[0].innerText == "") {
        alert("Open Your Cart Before You Add Any Further Product's") 
        document.getElementById('cart_ray_A').children[0].innerText = "+"
        document.getElementById('cart_ray_A').children[1].innerText = nameJ.innerText
        document.getElementById('cart_ray_A').children[2].innerText = priceJ.innerText

    }else if (document.getElementById('cart_ray_B').children[0].innerText == "" && document.getElementById('cart_ray_A').children[0].innerText == "+" ){

        document.getElementById('cart_ray_B').children[0].innerText = "+"
        document.getElementById('cart_ray_B').children[1].innerText = nameJ.innerText
        document.getElementById('cart_ray_B').children[2].innerText = priceJ.innerText

    }else if (document.getElementById('cart_ray_C').children[0].innerText == "" && document.getElementById('cart_ray_B').children[0].innerText == "+") {

        document.getElementById('cart_ray_C').children[0].innerText = "+"
        document.getElementById('cart_ray_C').children[1].innerText = nameJ.innerText
        document.getElementById('cart_ray_C').children[2].innerText = priceJ.innerText

    }else if (document.getElementById('cart_ray_D').children[0].innerText == "" && document.getElementById('cart_ray_C').children[0].innerText == "+") {

        document.getElementById('cart_ray_D').children[0].innerText = "+"
        document.getElementById('cart_ray_D').children[1].innerText = nameJ.innerText
        document.getElementById('cart_ray_D').children[2].innerText = priceJ.innerText

    }else if (document.getElementById('cart_ray_E').children[0].innerText == "" && document.getElementById('cart_ray_D').children[0].innerText == "+") {

        document.getElementById('cart_ray_E').children[0].innerText = "+"
        document.getElementById('cart_ray_E').children[1].innerText = nameJ.innerText
        document.getElementById('cart_ray_E').children[2].innerText = priceJ.innerText

    }else if (document.getElementById('cart_ray_F').children[0].innerText == "" && document.getElementById('cart_ray_E').children[0].innerText == "+") {

        document.getElementById('cart_ray_F').children[0].innerText = "+"
        document.getElementById('cart_ray_F').children[1].innerText = nameJ.innerText
        document.getElementById('cart_ray_F').children[2].innerText = priceJ.innerText

    }else if (document.getElementById('cart_ray_G').children[0].innerText == "" && document.getElementById('cart_ray_F').children[0].innerText == "+") {

        document.getElementById('cart_ray_G').children[0].innerText = "+"
        document.getElementById('cart_ray_G').children[1].innerText = nameJ.innerText
        document.getElementById('cart_ray_G').children[2].innerText = priceJ.innerText

    }else if (document.getElementById('cart_ray_H').children[0].innerText == "" && document.getElementById('cart_ray_G').children[0].innerText == "+") {

        document.getElementById('cart_ray_H').children[0].innerText = "+"
        document.getElementById('cart_ray_H').children[1].innerText = nameJ.innerText
        document.getElementById('cart_ray_H').children[2].innerText = priceJ.innerText

    }else if (document.getElementById('cart_ray_I').children[0].innerText == "" && document.getElementById('cart_ray_H').children[0].innerText == "+") {

        document.getElementById('cart_ray_I').children[0].innerText = "+"
        document.getElementById('cart_ray_I').children[1].innerText = nameJ.innerText
        document.getElementById('cart_ray_I').children[2].innerText = priceJ.innerText

    }else if (document.getElementById('cart_ray_J').children[0].innerText == "" && document.getElementById('cart_ray_I').children[0].innerText == "+") {

        document.getElementById('cart_ray_J').children[0].innerText = "+"
        document.getElementById('cart_ray_J').children[1].innerText = nameJ.innerText
        document.getElementById('cart_ray_J').children[2].innerText = priceJ.innerText

    }else if (document.getElementById('cart_ray_K').children[0].innerText == "" && document.getElementById('cart_ray_J').children[0].innerText == "+") {

        document.getElementById('cart_ray_K').children[0].innerText = "+"
        document.getElementById('cart_ray_K').children[1].innerText = nameJ.innerText
        document.getElementById('cart_ray_K').children[2].innerText = priceJ.innerText
    }
    
}

// K




cartK.addEventListener("click",cartKfunction);


function cartKfunction() {

  


    if (document.getElementById('cart_ray_A').children[0].innerText == "") {
        alert("Open Your Cart Before You Add Any Further Product's") 
        document.getElementById('cart_ray_A').children[0].innerText = "+"
        document.getElementById('cart_ray_A').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_A').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_B').children[0].innerText == "" && document.getElementById('cart_ray_A').children[0].innerText == "+" ){

        document.getElementById('cart_ray_B').children[0].innerText = "+"
        document.getElementById('cart_ray_B').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_B').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_C').children[0].innerText == "" && document.getElementById('cart_ray_B').children[0].innerText == "+") {

        document.getElementById('cart_ray_C').children[0].innerText = "+"
        document.getElementById('cart_ray_C').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_C').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_D').children[0].innerText == "" && document.getElementById('cart_ray_C').children[0].innerText == "+") {

        document.getElementById('cart_ray_D').children[0].innerText = "+"
        document.getElementById('cart_ray_D').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_D').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_E').children[0].innerText == "" && document.getElementById('cart_ray_D').children[0].innerText == "+") {

        document.getElementById('cart_ray_E').children[0].innerText = "+"
        document.getElementById('cart_ray_E').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_E').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_F').children[0].innerText == "" && document.getElementById('cart_ray_E').children[0].innerText == "+") {

        document.getElementById('cart_ray_F').children[0].innerText = "+"
        document.getElementById('cart_ray_F').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_F').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_G').children[0].innerText == "" && document.getElementById('cart_ray_F').children[0].innerText == "+") {

        document.getElementById('cart_ray_G').children[0].innerText = "+"
        document.getElementById('cart_ray_G').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_G').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_H').children[0].innerText == "" && document.getElementById('cart_ray_G').children[0].innerText == "+") {

        document.getElementById('cart_ray_H').children[0].innerText = "+"
        document.getElementById('cart_ray_H').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_H').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_I').children[0].innerText == "" && document.getElementById('cart_ray_H').children[0].innerText == "+") {

        document.getElementById('cart_ray_I').children[0].innerText = "+"
        document.getElementById('cart_ray_I').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_I').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_J').children[0].innerText == "" && document.getElementById('cart_ray_I').children[0].innerText == "+") {

        document.getElementById('cart_ray_J').children[0].innerText = "+"
        document.getElementById('cart_ray_J').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_J').children[2].innerText = priceK.innerText

    }else if (document.getElementById('cart_ray_K').children[0].innerText == "" && document.getElementById('cart_ray_J').children[0].innerText == "+") {

        document.getElementById('cart_ray_K').children[0].innerText = "+"
        document.getElementById('cart_ray_K').children[1].innerText = nameK.innerText
        document.getElementById('cart_ray_K').children[2].innerText = priceK.innerText
    }
    
};

// L


cartL.addEventListener("click",cartLfunction);


function cartLfunction() {


    if (document.getElementById('cart_ray_A').children[0].innerText == "") {
        alert("Open Your Cart Before You Add Any Further Product's") 
        document.getElementById('cart_ray_A').children[0].innerText = "+"
        document.getElementById('cart_ray_A').children[1].innerText = nameL.innerText
        document.getElementById('cart_ray_A').children[2].innerText = priceL.innerText

    }else if (document.getElementById('cart_ray_B').children[0].innerText == "" && document.getElementById('cart_ray_A').children[0].innerText == "+" ){

        document.getElementById('cart_ray_B').children[0].innerText = "+"
        document.getElementById('cart_ray_B').children[1].innerText = nameL.innerText
        document.getElementById('cart_ray_B').children[2].innerText = priceL.innerText

    }else if (document.getElementById('cart_ray_C').children[0].innerText == "" && document.getElementById('cart_ray_B').children[0].innerText == "+") {

        document.getElementById('cart_ray_C').children[0].innerText = "+"
        document.getElementById('cart_ray_C').children[1].innerText = nameL.innerText
        document.getElementById('cart_ray_C').children[2].innerText = priceL.innerText

    }else if (document.getElementById('cart_ray_D').children[0].innerText == "" && document.getElementById('cart_ray_C').children[0].innerText == "+") {

        document.getElementById('cart_ray_D').children[0].innerText = "+"
        document.getElementById('cart_ray_D').children[1].innerText = nameL.innerText
        document.getElementById('cart_ray_D').children[2].innerText = priceL.innerText

    }else if (document.getElementById('cart_ray_E').children[0].innerText == "" && document.getElementById('cart_ray_D').children[0].innerText == "+") {

        document.getElementById('cart_ray_E').children[0].innerText = "+"
        document.getElementById('cart_ray_E').children[1].innerText = nameL.innerText
        document.getElementById('cart_ray_E').children[2].innerText = priceL.innerText

    }else if (document.getElementById('cart_ray_F').children[0].innerText == "" && document.getElementById('cart_ray_E').children[0].innerText == "+") {

        document.getElementById('cart_ray_F').children[0].innerText = "+"
        document.getElementById('cart_ray_F').children[1].innerText = nameL.innerText
        document.getElementById('cart_ray_F').children[2].innerText = priceL.innerText

    }else if (document.getElementById('cart_ray_G').children[0].innerText == "" && document.getElementById('cart_ray_F').children[0].innerText == "+") {

        document.getElementById('cart_ray_G').children[0].innerText = "+"
        document.getElementById('cart_ray_G').children[1].innerText = nameL.innerText
        document.getElementById('cart_ray_G').children[2].innerText = priceL.innerText

    }else if (document.getElementById('cart_ray_H').children[0].innerText == "" && document.getElementById('cart_ray_G').children[0].innerText == "+") {

        document.getElementById('cart_ray_H').children[0].innerText = "+"
        document.getElementById('cart_ray_H').children[1].innerText = nameL.innerText
        document.getElementById('cart_ray_H').children[2].innerText = priceL.innerText

    }else if (document.getElementById('cart_ray_I').children[0].innerText == "" && document.getElementById('cart_ray_H').children[0].innerText == "+") {

        document.getElementById('cart_ray_I').children[0].innerText = "+"
        document.getElementById('cart_ray_I').children[1].innerText = nameL.innerText
        document.getElementById('cart_ray_I').children[2].innerText = priceL.innerText

    }else if (document.getElementById('cart_ray_J').children[0].innerText == "" && document.getElementById('cart_ray_I').children[0].innerText == "+") {

        document.getElementById('cart_ray_J').children[0].innerText = "+"
        document.getElementById('cart_ray_J').children[1].innerText = nameL.innerText
        document.getElementById('cart_ray_J').children[2].innerText = priceL.innerText

    }else if (document.getElementById('cart_ray_K').children[0].innerText == "" && document.getElementById('cart_ray_J').children[0].innerText == "+") {

        document.getElementById('cart_ray_K').children[0].innerText = "+"
        document.getElementById('cart_ray_K').children[1].innerText = nameL.innerText
        document.getElementById('cart_ray_K').children[2].innerText = priceL.innerText
    }
    
};


// M

cartM.addEventListener("click",cartMfunction);


function cartMfunction() {


    if (document.getElementById('cart_ray_A').children[0].innerText == "") {
        alert("Open Your Cart Before You Add Any Further Product's") 
        document.getElementById('cart_ray_A').children[0].innerText = "+"
        document.getElementById('cart_ray_A').children[1].innerText = nameM.innerText
        document.getElementById('cart_ray_A').children[2].innerText = priceM.innerText

    }else if (document.getElementById('cart_ray_B').children[0].innerText == "" && document.getElementById('cart_ray_A').children[0].innerText == "+" ){

        document.getElementById('cart_ray_B').children[0].innerText = "+"
        document.getElementById('cart_ray_B').children[1].innerText = nameM.innerText
        document.getElementById('cart_ray_B').children[2].innerText = priceM.innerText

    }else if (document.getElementById('cart_ray_C').children[0].innerText == "" && document.getElementById('cart_ray_B').children[0].innerText == "+") {

        document.getElementById('cart_ray_C').children[0].innerText = "+"
        document.getElementById('cart_ray_C').children[1].innerText = nameM.innerText
        document.getElementById('cart_ray_C').children[2].innerText = priceM.innerText

    }else if (document.getElementById('cart_ray_D').children[0].innerText == "" && document.getElementById('cart_ray_C').children[0].innerText == "+") {

        document.getElementById('cart_ray_D').children[0].innerText = "+"
        document.getElementById('cart_ray_D').children[1].innerText = nameM.innerText
        document.getElementById('cart_ray_D').children[2].innerText = priceM.innerText

    }else if (document.getElementById('cart_ray_E').children[0].innerText == "" && document.getElementById('cart_ray_D').children[0].innerText == "+") {

        document.getElementById('cart_ray_E').children[0].innerText = "+"
        document.getElementById('cart_ray_E').children[1].innerText = nameM.innerText
        document.getElementById('cart_ray_E').children[2].innerText = priceM.innerText

    }else if (document.getElementById('cart_ray_F').children[0].innerText == "" && document.getElementById('cart_ray_E').children[0].innerText == "+") {

        document.getElementById('cart_ray_F').children[0].innerText = "+"
        document.getElementById('cart_ray_F').children[1].innerText = nameM.innerText
        document.getElementById('cart_ray_F').children[2].innerText = priceM.innerText

    }else if (document.getElementById('cart_ray_G').children[0].innerText == "" && document.getElementById('cart_ray_F').children[0].innerText == "+") {

        document.getElementById('cart_ray_G').children[0].innerText = "+"
        document.getElementById('cart_ray_G').children[1].innerText = nameM.innerText
        document.getElementById('cart_ray_G').children[2].innerText = priceM.innerText

    }else if (document.getElementById('cart_ray_H').children[0].innerText == "" && document.getElementById('cart_ray_G').children[0].innerText == "+") {

        document.getElementById('cart_ray_H').children[0].innerText = "+"
        document.getElementById('cart_ray_H').children[1].innerText = nameM.innerText
        document.getElementById('cart_ray_H').children[2].innerText = priceM.innerText

    }else if (document.getElementById('cart_ray_I').children[0].innerText == "" && document.getElementById('cart_ray_H').children[0].innerText == "+") {

        document.getElementById('cart_ray_I').children[0].innerText = "+"
        document.getElementById('cart_ray_I').children[1].innerText = nameM.innerText
        document.getElementById('cart_ray_I').children[2].innerText = priceM.innerText

    }else if (document.getElementById('cart_ray_J').children[0].innerText == "" && document.getElementById('cart_ray_I').children[0].innerText == "+") {

        document.getElementById('cart_ray_J').children[0].innerText = "+"
        document.getElementById('cart_ray_J').children[1].innerText = nameM.innerText
        document.getElementById('cart_ray_J').children[2].innerText = priceM.innerText

    }else if (document.getElementById('cart_ray_K').children[0].innerText == "" && document.getElementById('cart_ray_J').children[0].innerText == "+") {

        document.getElementById('cart_ray_K').children[0].innerText = "+"
        document.getElementById('cart_ray_K').children[1].innerText = nameM.innerText
        document.getElementById('cart_ray_K').children[2].innerText = priceM.innerText
    }
    
};

// N


cartN.addEventListener("click",cartNfunction);


function cartNfunction() {


    if (document.getElementById('cart_ray_A').children[0].innerText == "") {
        alert("Open Your Cart Before You Add Any Further Product's") 
        document.getElementById('cart_ray_A').children[0].innerText = "+"
        document.getElementById('cart_ray_A').children[1].innerText = nameN.innerText
        document.getElementById('cart_ray_A').children[2].innerText = priceN.innerText

    }else if (document.getElementById('cart_ray_B').children[0].innerText == "" && document.getElementById('cart_ray_A').children[0].innerText == "+" ){

        document.getElementById('cart_ray_B').children[0].innerText = "+"
        document.getElementById('cart_ray_B').children[1].innerText = nameN.innerText
        document.getElementById('cart_ray_B').children[2].innerText = priceN.innerText

    }else if (document.getElementById('cart_ray_C').children[0].innerText == "" && document.getElementById('cart_ray_B').children[0].innerText == "+") {

        document.getElementById('cart_ray_C').children[0].innerText = "+"
        document.getElementById('cart_ray_C').children[1].innerText = nameN.innerText
        document.getElementById('cart_ray_C').children[2].innerText = priceN.innerText

    }else if (document.getElementById('cart_ray_D').children[0].innerText == "" && document.getElementById('cart_ray_C').children[0].innerText == "+") {

        document.getElementById('cart_ray_D').children[0].innerText = "+"
        document.getElementById('cart_ray_D').children[1].innerText = nameN.innerText
        document.getElementById('cart_ray_D').children[2].innerText = priceN.innerText

    }else if (document.getElementById('cart_ray_E').children[0].innerText == "" && document.getElementById('cart_ray_D').children[0].innerText == "+") {

        document.getElementById('cart_ray_E').children[0].innerText = "+"
        document.getElementById('cart_ray_E').children[1].innerText = nameN.innerText
        document.getElementById('cart_ray_E').children[2].innerText = priceN.innerText

    }else if (document.getElementById('cart_ray_F').children[0].innerText == "" && document.getElementById('cart_ray_E').children[0].innerText == "+") {

        document.getElementById('cart_ray_F').children[0].innerText = "+"
        document.getElementById('cart_ray_F').children[1].innerText = nameN.innerText
        document.getElementById('cart_ray_F').children[2].innerText = priceN.innerText

    }else if (document.getElementById('cart_ray_G').children[0].innerText == "" && document.getElementById('cart_ray_F').children[0].innerText == "+") {

        document.getElementById('cart_ray_G').children[0].innerText = "+"
        document.getElementById('cart_ray_G').children[1].innerText = nameN.innerText
        document.getElementById('cart_ray_G').children[2].innerText = priceN.innerText

    }else if (document.getElementById('cart_ray_H').children[0].innerText == "" && document.getElementById('cart_ray_G').children[0].innerText == "+") {

        document.getElementById('cart_ray_H').children[0].innerText = "+"
        document.getElementById('cart_ray_H').children[1].innerText = nameN.innerText
        document.getElementById('cart_ray_H').children[2].innerText = priceN.innerText

    }else if (document.getElementById('cart_ray_I').children[0].innerText == "" && document.getElementById('cart_ray_H').children[0].innerText == "+") {

        document.getElementById('cart_ray_I').children[0].innerText = "+"
        document.getElementById('cart_ray_I').children[1].innerText = nameN.innerText
        document.getElementById('cart_ray_I').children[2].innerText = priceN.innerText

    }else if (document.getElementById('cart_ray_J').children[0].innerText == "" && document.getElementById('cart_ray_I').children[0].innerText == "+") {

        document.getElementById('cart_ray_J').children[0].innerText = "+"
        document.getElementById('cart_ray_J').children[1].innerText = nameN.innerText
        document.getElementById('cart_ray_J').children[2].innerText = priceN.innerText

    }else if (document.getElementById('cart_ray_K').children[0].innerText == "" && document.getElementById('cart_ray_J').children[0].innerText == "+") {

        document.getElementById('cart_ray_K').children[0].innerText = "+"
        document.getElementById('cart_ray_K').children[1].innerText = nameN.innerText
        document.getElementById('cart_ray_K').children[2].innerText = priceN.innerText
    }
    
};

// O

cartO.addEventListener("click",cartOfunction);


function cartOfunction() {


    if (document.getElementById('cart_ray_A').children[0].innerText == "") {
        alert("Open Your Cart Before You Add Any Further Product's") 
        document.getElementById('cart_ray_A').children[0].innerText = "+"
        document.getElementById('cart_ray_A').children[1].innerText = nameO.innerText
        document.getElementById('cart_ray_A').children[2].innerText = priceO.innerText

    }else if (document.getElementById('cart_ray_B').children[0].innerText == "" && document.getElementById('cart_ray_A').children[0].innerText == "+" ){

        document.getElementById('cart_ray_B').children[0].innerText = "+"
        document.getElementById('cart_ray_B').children[1].innerText = nameO.innerText
        document.getElementById('cart_ray_B').children[2].innerText = priceO.innerText

    }else if (document.getElementById('cart_ray_C').children[0].innerText == "" && document.getElementById('cart_ray_B').children[0].innerText == "+") {

        document.getElementById('cart_ray_C').children[0].innerText = "+"
        document.getElementById('cart_ray_C').children[1].innerText = nameO.innerText
        document.getElementById('cart_ray_C').children[2].innerText = priceO.innerText

    }else if (document.getElementById('cart_ray_D').children[0].innerText == "" && document.getElementById('cart_ray_C').children[0].innerText == "+") {

        document.getElementById('cart_ray_D').children[0].innerText = "+"
        document.getElementById('cart_ray_D').children[1].innerText = nameO.innerText
        document.getElementById('cart_ray_D').children[2].innerText = priceO.innerText

    }else if (document.getElementById('cart_ray_E').children[0].innerText == "" && document.getElementById('cart_ray_D').children[0].innerText == "+") {

        document.getElementById('cart_ray_E').children[0].innerText = "+"
        document.getElementById('cart_ray_E').children[1].innerText = nameO.innerText
        document.getElementById('cart_ray_E').children[2].innerText = priceO.innerText

    }else if (document.getElementById('cart_ray_F').children[0].innerText == "" && document.getElementById('cart_ray_E').children[0].innerText == "+") {

        document.getElementById('cart_ray_F').children[0].innerText = "+"
        document.getElementById('cart_ray_F').children[1].innerText = nameO.innerText
        document.getElementById('cart_ray_F').children[2].innerText = priceO.innerText

    }else if (document.getElementById('cart_ray_G').children[0].innerText == "" && document.getElementById('cart_ray_F').children[0].innerText == "+") {

        document.getElementById('cart_ray_G').children[0].innerText = "+"
        document.getElementById('cart_ray_G').children[1].innerText = nameO.innerText
        document.getElementById('cart_ray_G').children[2].innerText = priceO.innerText

    }else if (document.getElementById('cart_ray_H').children[0].innerText == "" && document.getElementById('cart_ray_G').children[0].innerText == "+") {

        document.getElementById('cart_ray_H').children[0].innerText = "+"
        document.getElementById('cart_ray_H').children[1].innerText = nameO.innerText
        document.getElementById('cart_ray_H').children[2].innerText = priceO.innerText

    }else if (document.getElementById('cart_ray_I').children[0].innerText == "" && document.getElementById('cart_ray_H').children[0].innerText == "+") {

        document.getElementById('cart_ray_I').children[0].innerText = "+"
        document.getElementById('cart_ray_I').children[1].innerText = nameO.innerText
        document.getElementById('cart_ray_I').children[2].innerText = priceO.innerText

    }else if (document.getElementById('cart_ray_J').children[0].innerText == "" && document.getElementById('cart_ray_I').children[0].innerText == "+") {

        document.getElementById('cart_ray_J').children[0].innerText = "+"
        document.getElementById('cart_ray_J').children[1].innerText = nameO.innerText
        document.getElementById('cart_ray_J').children[2].innerText = priceO.innerText

    }else if (document.getElementById('cart_ray_K').children[0].innerText == "" && document.getElementById('cart_ray_J').children[0].innerText == "+") {

        document.getElementById('cart_ray_K').children[0].innerText = "+"
        document.getElementById('cart_ray_K').children[1].innerText = nameO.innerText
        document.getElementById('cart_ray_K').children[2].innerText = priceO.innerText
    }
    
};