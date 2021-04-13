var dessert = [{
    id: "SP1",
    name: "Pho bo of Viet Nam",
    img: "img_desserts/1.jpg",
    price: 200,
    ingredients: "pho, broth, beef, chicken",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP2",
    name: "Pho bo of Viet Nam",
    img: "img_desserts/2.jpg",
    price: 200,
    ingredients: "pho, broth, beef, chicken",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP3",
    name: "Pho bo of Viet Nam",
    img: "img_desserts/3.jpg",
    price:  200,
    ingredients: "pho, broth, beef, chicken",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP4",
    name: "Pho bo of Viet Nam",
    img: "img_desserts/4.jpg",
    price:   200,
    ingredients: "pho, broth, beef, chicken",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP5",
    name: "Pho bo of Viet Nam",
    img: "img_desserts/5.jpg",
    price:   200,
    ingredients: "pho, broth, beef, chicken",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP6",
    name: "Pho bo of Viet Nam",
    img: "img_desserts/6.jpg",
    price:   200,
    ingredients: "pho, broth, beef, chicken",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP7",
    name: "Pho bo of Viet Nam",
    img: "img_desserts/7.jpg",
    price:   200,
    ingredients: "pho, broth, beef, chicken",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP8",
    name: "Pho bo of Viet Nam",
    img: "img_desserts/8.jpg",
    price:   200,
    ingredients: "pho, broth, beef, chicken",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
}
];

function saveDessert() {
    localStorage.setItem('listDessert', JSON.stringify(dessert))
}

function loadDessert() {
    dessert = JSON.parse(localStorage.getItem('listDessert'))
}

if (localStorage.getItem('listDessert') != null) {
    loadDessert();
}

function listDessert() {
    var listDesserts = '';
    for (var i in dessert) {
        var data = JSON.parse(JSON.stringify(dessert[i]))
        listDesserts = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-6" >';
        listDesserts += '<div class="card-deck text-center">';
        listDesserts += '<div class= card col-lg-3 col-md-6 col-sm-6 col-6 mt-6 style="width: 17rem; >';
        listDesserts += '<div class = "card-body" >';
        listDesserts += '<img class = "card-img-top image" src = "' + data.img + '">';
        listDesserts += '</div>';
        listDesserts += '</div>';
        listDesserts += '</div>';
        listDesserts += '<div class="card-deck">';
        listDesserts += '<div class= card col-lg-3 col-md-6 col-sm-6 col-6 mt-6 style="width: 17rem; >';
        listDesserts += '<div class = "card-body" >';
        listDesserts += '<div class = "card-title canle" >' + data.name + '</div>';
        listDesserts += '<div class = "card-text canle" >';
        listDesserts += data.ingredients + "<br>";
        listDesserts += '<br>';
        listDesserts += '<div class = "price" >';
        listDesserts += "$" + data.price + '</div>';
        listDesserts += '</div>';
        listDesserts += '<br>';
        listDesserts += `<div><button class = "detail" onclick = "getDessert('${data.id}')"> Detail </button>`;
        listDesserts += '</div>';
        listDesserts += '</div>';
        document.getElementById('doNgot').innerHTML += listDesserts;
    }
    saveDessert();
    // listDessert();
}
function getDessert(id) {
    location.href = 'detailDessert.html';
    let allDessert = JSON.parse(localStorage.getItem('listDessert'));
    let dessert = allDessert.filter(dessert => {
        return dessert.id == id;
    });
    localStorage.setItem('detailDessert', JSON.stringify(dessert));
}
function showDessert() {
    let arr = JSON.parse(localStorage.getItem('detailDessert'))
    var listDessert = '';
    for (var i in arr) {
        var data = JSON.parse(JSON.stringify(arr[i]))
        listDessert = '<div class="col-lg-8 col-md-6 col-sm-6 col-6 mt-6" >';
        listDessert += '<div class="card-deck">';
        listDessert += '<div class= card col-lg-8 col-md-6 col-sm-6 col-6 mt-6 style="width: 18rem; >';
        listDessert += '<div class = "card-body" >';
        listDessert += '<img class = "card-img-top imgDetail" src = "' + data.img + '">';
        listDessert += '</div>';
        listDessert += '</div>';
        listDessert += '</div>';
        listDessert += '<div class="col-lg-8 col-md-6 col-sm-6 col-6 mt-6" >';
        listDessert += '<div class="card-deck">';
        listDessert += '<div class= card col-lg-8 col-md-6 col-sm-6 col-6 mt-6 style="width: 17rem; >';
        listDessert += '<div class = "card-body" >';
        listDessert += '<div class = "card-title text-center" >' + data.name + '</div>';
        listDessert +=  '<div class = "card-text canle" > ' + data.note + '</div>';
        listDessert += '<div class = "card-text canle" >';
        listDessert += "Ingredients: &nbsp" + data.ingredients + "<br>";
        listDessert += '<br>';
        listDessert += '<div class = "price" >';
        listDessert +=  '<div class="h23">' + "Price: &nbsp" +"$"+ data.price + '</div>';
        listDessert += '</div>';
        listDessert += '<br>';
        listDessert += '<span class="text-center add-to-cart btn btn-outline-warning add-cart">';
        listDessert += '<a>' + '<i class="fa fa-cart-plus"> </i>' + '</a> </span>';
        listDessert += '&nbsp &nbsp<button class = "detail" onclick = "#">Order</button></div>';
        listDessert += '</divsws>';
        listDessert += '</div>';
        listDessert += '</div>'; 
        document.getElementById('chiTietDessert').innerHTML = listDessert;
    }
    // save();
}
function getReview(id) {
    let detail = JSON.parse(localStorage.getItem('detailDessert'));
    for (var i in detail) {
        var data = JSON.parse(JSON.stringify(detail[i]))
        if (data.id == id) {
            localStorage.setItem('listDanhGia2', JSON.stringify(danhGia2));
            break;
        }
    }
}
var danhGia3 = [{
    id: "sp1",
    name: "thuy",
    img: "img_breakfast/pho-bo.jpg",
    message: "Good food, quality chat, fast delivery",
}
];

function load() {
    danhGia3 = JSON.parse(localStorage.getItem('listDanhGia2'))
}
if (localStorage.getItem('listDanhGia2') != null) {
    load();
}
var AddRecomment = function () {
    var contactPro =
    {
        id: "SP" + parseInt(danhGia3.length + 1),
        name: document.getElementById('name').value,
        img: document.getElementById('img').value,
        message: document.getElementById('message').value,
    };
    danhGia3.push(contactPro);
    localStorage.setItem("listDanhGia2", JSON.stringify(danhGia3));
    window.location.reload();
}
function listLocal2() {
    var listProduct = '';
    var danhGia3 = JSON.parse(localStorage.getItem('listDanhGia2'));
    for (var i in danhGia3) {
        var data = JSON.parse(JSON.stringify(danhGia3[i]))
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
