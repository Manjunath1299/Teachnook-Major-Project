let products = [
    {
        id: 1,
        name: 'Kids jeans',
        image: 'images/kidsjeans.jpg',
        price: 800
    },
    {
        id: 2,
        name: 'Mens Cotton Jeans',
        image: 'images/mencottonjeans.jpg',
        price: 1000
    },
    {
        id: 3,
        name: 'Men Premium Jeans',
        image: 'images/premiumjeans.jpg',
        price: 1500
    },
    {
        id: 4,
        name: 'Female Kids Jeans',
        image: 'images/femalekidjeans.jpg',
        price: 800
    },
    {
        id: 5,
        name: 'Women Cotton Jeans',
        image: 'images/womencottonjeans.jpg',
        price: 1000
    },
    {
        id: 6,
        name: 'Women Premium Jeans',
        image: 'images/womenjeans1.jpg',
        price: 1500
    },
    {
        id: 7,
        name: 'Kids Men Tshirt',
        image: 'images/maletshirt.jpg',
        price: 800
    },
    {
        id: 8,
        name: 'Mens T-shirt',
        image: 'images/mencottontshirt.jpg',
        price: 1000
    },
    {
        id: 9,
        name: 'Men Premium T-Shirt',
        image: 'images/premiummentshirt.jpg',
        price: 1500
    },
    {
        id: 10,
        name: 'Female Kids T-Shirt',
        image: 'images/kidswomentshirt.jpg',
        price: 800
    },
    {
        id: 11,
        name: 'Women Cotton T-Shirt',
        image: 'images/womentshirt.jpg',
        price: 1000
    },
    {
        id: 12,
        name: 'Women Premium T-shirt',
        image: 'images/premiumwomentshirt.jpg',
        price: 1500
    },
    {
        id: 13,
        name: 'Kids Men shirt',
        image: 'images/kidsshirt.jpg',
        price: 800
    },
    {
        id: 14,
        name: 'Mens Cotton shirt',
        image: 'images/mencasualshirt.jpg',
        price: 1000
    },
    {
        id: 15,
        name: 'Men Print Shirt',
        image: 'images/menprintshirt.jpg',
        price: 1500
    },
    {
        id: 16,
        name: 'Kids Shoes',
        image: 'images/kidsmenshoes.jpg',
        price: 800
    },
    {
        id: 17,
        name: 'Men Casual Shoes',
        image: 'images/menscasualshoes.jpg',
        price: 1000
    },
    {
        id: 18,
        name: 'Men Sports Shoes',
        image: 'images/mensportshoes.jpg',
        price: 1500
    },
    {
        id: 19,
        name: 'Female Kids Shoes',
        image: 'images/kidsfemaleshoes.jpg',
        price: 800
    },
    {
        id: 20,
        name: 'Women Casual Shoes',
        image: 'images/womencasualshoes.jpg',
        price: 1000
    },
    {
        id: 21,
        name: 'Women Sports Shoes',
        image: 'images/womensportshoes.jpg',
        price: 1500
    }
    
];
let listCards=[]
function clickhere(k){

    if(listCards[k] == null){
        // copy product form list to list card
        listCards[k] = JSON.parse(JSON.stringify(products[k]));
        
    }
    //listCards.forEach((e)=>(

        document.getElementById("cartitems").innerHTML +='<div class="menu-item-tile col-lg-10">'+
        ' <div class="row">'+
           '<div class="col-sm-5 col-9">'+
             '<div class="menu-item-photo text-center">'+
               '<div>'+
               products[k].price+
               ' INR </div>'+
               '<img class="img-fluid menu-img" width="250" height="150" src='+products[k].image+' alt="Item">'+
             '</div>'+
             '<!-- <div class="menu-item-price">$10.95<span> (pint)</span> $14.95 <span>(quart)</span></div> -->'+
           '</div>'+
           '<div class="menu-item-description col-sm-7">'+
             '<h3 class="menu-item-title">'+products[k].name+' </h3>'+
             '<p class="menu-item-details"> Blue Men Jeans which is suitable for kids  </p>'+
             '<p>Available only in 6 size ,soon will add other size </p>'+
             '<p><button id="mks" value="Kids Shoes-800" onclick="removecart(0)"> Remove from Cart</button></p>'+
           '</div>'+
        '</div>'+
         '<hr class="d-block d-md-none">'+
    '</div>',
    console.log(e.price)//))



    console.log(listCards);
}
