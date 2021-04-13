var drink = [{
    id: "SP1",
    name: "Pho bo of Viet Nam",
    img: "img_drink/1.jpg",
    price:    200,
    ingredients: "pho, broth, beef, chicken",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP2",
    name: "Pho bo of Viet Nam",
    img: "img_drink/2.jpg",
    price:    200,
    ingredients: "pho, broth, beef, chicken",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP3",
    name: "Pho bo of Viet Nam",
    img: "img_drink/3.jpg",
    price:    200,
    ingredients: "pho, broth, beef, chicken",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP4",
    name: "Pho bo of Viet Nam",
    img: "img_drink/4.jpg",
    price:    200,
    ingredients: "pho, broth, beef, chicken",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP5",
    name: "Pho bo of Viet Nam",
    img: "img_drink/5.jpg",
    price:    200,
    ingredients: "pho, broth, beef, chicken",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP6",
    name: "Pho bo of Viet Nam",
    img: "img_drink/6.jpg",
    price:    200,
    ingredients: "pho, broth, beef, chicken",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP7",
    name: "Pho bo of Viet Nam",
    img: "img_drink/7.jpg",
    price:    200,
    ingredients: "pho, broth, beef, chicken",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP8",
    name: "Pho bo of Viet Nam",
    img: "img_drink/8.jpg",
    price:    200,
    ingredients: "pho, broth, beef, chicken",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
}
];

function saveDrink() {
    localStorage.setItem('listDrink', JSON.stringify(drink))
}

function loadDrink() {
    drink = JSON.parse(localStorage.getItem('listDrink'))
}

if (localStorage.getItem('listDrink') != null) {
    loadDrink();
}

function listDrink() {
    var listDrink = '';
    for (var i in drink) {
        var data = JSON.parse(JSON.stringify(drink[i]))
        listDrink = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-6" >';
        listDrink += '<div class="card-deck text-center">';
        listDrink += '<div class= card col-lg-3 col-md-6 col-sm-6 col-6 mt-6 style="width: 17rem; >';
        listDrink += '<div class = "card-body" >';
        listDrink += '<img class = "card-img-top image" src = "' + data.img + '">';
        listDrink += '</div>';
        listDrink += '</div>';
        listDrink += '</div>';
        listDrink += '<div class="card-deck">';
        listDrink += '<div class= card col-lg-3 col-md-6 col-sm-6 col-6 mt-6 style="width: 17rem; >';
        listDrink += '<div class = "card-body" >';
        listDrink += '<div class = "card-title canle" >' + data.name + '</div>';
        listDrink += '<div class = "card-text canle" >';
        listDrink += data.ingredients + "<br>";
        listDrink += '<br>';
        listDrink += '<div class = "price" >';
        listDrink += "$"+ data.price + '</div>';
        listDrink += '</div>';
        listDrink += '<br>';
        listDrink += `<div><button class = "detail" onclick = "getDrink('${data.id}')"> Detail </button>`;
        listDrink += '</div>';
        listDrink += '</div>';
        document.getElementById('doUong').innerHTML += listDrink;
    }
    saveDrink();
    // listDrink();
}
function getDrink(id) {
    location.href = 'detailDrink.html';
    let allDrink = JSON.parse(localStorage.getItem('listDrink'));
    let drinks = allDrink.filter(drinks => {
        return drinks.id == id;
    });
    localStorage.setItem('detailDrink', JSON.stringify(drinks));
}
function showDrink() {
    let arr = JSON.parse(localStorage.getItem('detailDrink'))
    var listDrink = '';
    for (var i in arr) {
        var data = JSON.parse(JSON.stringify(arr[i]))
        listDrink = '<div class="col-lg-8 col-md-6 col-sm-6 col-6 mt-6" >';
        listDrink += '<div class="card-deck">';
        listDrink += '<div class= card col-lg-8 col-md-6 col-sm-6 col-6 mt-6 style="width: 18rem; >';
        listDrink += '<div class = "card-body" >';
        listDrink += '<img class = "card-img-top imgDetail" src = "' + data.img + '">';
        listDrink += '</div>';
        listDrink += '</div>';
        listDrink += '</div>';
        listDrink += '<div class="col-lg-8 col-md-6 col-sm-6 col-6 mt-6" >';
        listDrink += '<div class="card-deck">';
        listDrink += '<div class= card col-lg-8 col-md-6 col-sm-6 col-6 mt-6 style="width: 17rem; >';
        listDrink += '<div class = "card-body" >';
        listDrink += '<div class = "card-title text-center" >' + data.name + '</div>';
        listDrink +=  '<div class = "card-text canle" > ' + data.note + '</div>';
        listDrink += '<div class = "card-text canle" >';
        listDrink += "Ingredients: &nbsp" + data.ingredients + "<br>";
        listDrink += '<br>';
        listDrink += '<div class = "price" >';
        listDrink +=  '<div class="h23">' + "Price: &nbsp" +"$"+ data.price + '</div>';
        listDrink += '</div>';
        listDrink += '<br>';
        listDrink += '<span class="text-center add-to-cart btn btn-outline-warning add-cart">';
        listDrink += '<a>' + '<i class="fa fa-cart-plus"> </i>' + '</a> </span>';
        listDrink += '&nbsp &nbsp<button class = "detail" onclick = "#">Order</button></div>';
        listDrink += '</divsws>';
        listDrink += '</div>';
        listDrink += '</div>';
        document.getElementById('chiTietDrink').innerHTML = listDrink;
    }
    // save();
}
function getReview(id) {
    let detail = JSON.parse(localStorage.getItem('detailDrink'));
    for (var i in detail) {
        var data = JSON.parse(JSON.stringify(detail[i]))
        if (data.id == id) {
            localStorage.setItem('listDanhGia2', JSON.stringify(danhGia2));
            break;
        }
    }
}
var danhGia2 = [{
    id: "sp1",
    name: "thuy",
    img: "img_breakfast/pho-bo.jpg",
    message: "Good food, quality chat, fast delivery",
}
];

function load() {
    danhGia2 = JSON.parse(localStorage.getItem('listDanhGia2'))
}
if (localStorage.getItem('listDanhGia2') != null) {
    load();
}
var AddRecomment = function () {
    var contactPro =
    {
        id: "SP" + parseInt(recomment.length + 1),
        name: document.getElementById('name').value,
        img: document.getElementById('img').value,
        message: document.getElementById('message').value,
    };
    danhGia2.push(contactPro);
    localStorage.setItem("listDanhGia2", JSON.stringify(danhGia2));
    window.location.reload();
}
function listLocal2() {
    var listProduct = '';
    var danhGia2 = JSON.parse(localStorage.getItem('listDanhGia2'));
    for (var i in danhGia2) {
        var data = JSON.parse(JSON.stringify(danhGia2[i]))
        listProduct = '<div class="col-lg-12 col-md-6 col-sm-6 col-6 mt-3">';
        listProduct += ` <span class="fa fa-star checket-small-color-1"></span>
        <span class="fa fa-star checket-small-color-1"></span>
        <span class="fa fa-star checket-small-color-1"></span>
        <span class="fa fa-star checket-small-color-1"></span>
        <span class="fa fa-star checket-small-color-1"></span>`;
        listProduct += '<p>'+"by"+data.name+'</p>';
        listProduct += '<p>'+data.message+'</p>';
        listProduct += '<img style="height: 100px; width: 200px; "src = "' + data.img +'">';
        listProduct += '<hr style="height: 2%; width: 100%;color: black;">';
        document.getElementById('banchay').innerHTML += listProduct;
    }
}
