const item_data = () =>{

}

const currency_sign = () =>{
    let lst = document.querySelectorAll(".cart-slider--list--item__price")
    for(let i = 0; i < lst.length; i++){
        lst[i].innerHTML = lst[i].innerHTML + "$"
    }
}
currency_sign()