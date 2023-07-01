const wishListinputElement= document.querySelector(".input");
const addwishlistbutton= document.querySelector(".button");
let wishlistvalue="";
const parentwishlistcontainer= document.querySelector(".wishlist-container");
let wishlist=[];
const form= document.querySelector(".form");
wishListinputElement.addEventListener('keyup',(event) => {wishlistvalue=event.target.value;});
form.addEventListener('submit',(event) => { event.preventDefault();
wishlist=[...wishlist,wishlistvalue];wishListinputElement.value="";parentwishlistcontainer.innerHTML=""; showwishlist(wishlist);})

const showwishlist = (wishlist) => {
    for (let item of wishlist){
        const containerelement= document.createElement('div');
        const checkboxelement =document.createElement('input');
        checkboxelement.setAttribute('type','checkbox');
        containerelement.appendChild(checkboxelement);
        const wishlisttextelement = document.createElement('span');
        wishlisttextelement.innerText = item;
        containerelement.appendChild(wishlisttextelement);
        const deletebuttonelement= document.createElement('button');
        deletebuttonelement.innerText= 'delete';
        deletebuttonelement.setAttribute('name',item);
        containerelement.appendChild(deletebuttonelement);
        parentwishlistcontainer.appendChild(containerelement);
    }
} 
parentwishlistcontainer.addEventListener('click',(event) => {
    const itemtodelete=event.target.name;
    wishlist=wishlist.filter(i => i!==itemtodelete);
    parentwishlistcontainer.innerHTML='';
    showwishlist(wishlist);
})