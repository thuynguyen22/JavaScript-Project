var dinner = [{
    id: "SP1",
    name: "Sweet beans stir-fried with chicken heart",
    img: "img_dinner/dau-ngot-xao-long.jpg",
    price:   700,
    ingredients: "sweet pea,young corn,chicken gizzard,chicken heart",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP2",
    name: "Delicious sweet and sour pork ribs",
    img: "img_dinner/suon-xao-chua-ngot.jpg",
    price:   500,
    ingredients: "ribs, chili Dalat, Sa Te, lemongrass, coriander",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."

},
{
    id: "SP3",
    name: "Stir-fried squid with celery",
    img: "img_dinner/muc-xao-can-toi.jpg",
    price:   300,
    ingredients: "Squid, onion, celery",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP4",
    name: "Steamed lobster with beer",
    img: "img_dinner/tom-hap-bia.jpg",
    price:   700,
    ingredients: "lobster, beer, salt",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP5",
    name: "Shark fin soup",
    img: "img_lunch/sup-vi-ca-map.jpg",
    price:  2000,
    ingredients: "Shark fin, pork bones, crab meat, eggs, cornstarch, chicken thighs",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP6",
    name: "French fatty foie gras",
    img: "img_lunch/gan-ngong-phap.jpg",
    price:  4000,
    ingredients: "French foie gras, Himalayan pink salt, white wine, black pepper",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP8",
    name: "stewed pork",
    img: "img_lunch/dui-ga-nuong-mat-ong.jpg",
    price:  500,
    ingredients: "Bacon, Coca cola, cinnamon, cucumber, shallot, garlic,",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP8",
    name: "stewed pork",
    img: "img_lunch/thit-heo-ham.jpg",
    price: 500,
    ingredients: "Bacon, Coca cola, cinnamon, cucumber, shallot, garlic,",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
}
];

function saveDinner() {
    localStorage.setItem('listDinner', JSON.stringify(dinner))
}

function loadDinner() {
    dinner = JSON.parse(localStorage.getItem('listDinner'))
}

if (localStorage.getItem('listDinner') != null) {
    loadDinner();
}

function listDinner() {
    var listDinner = '';
    for (var i in dinner) {
        var data = JSON.parse(JSON.stringify(dinner[i]))
        listDinner = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-6" >';
        listDinner += '<div class="card-deck text-center">';
        listDinner += '<div class= card col-lg-3 col-md-6 col-sm-6 col-6 mt-6 style="width: 17rem; >';
        listDinner += '<div class = "card-body" >';
        listDinner += '<img class = "card-img-top image" src = "' + data.img + '">';
        listDinner += '</div>';
        listDinner += '</div>';
        listDinner += '</div>';
        listDinner += '<div class="card-deck">';
        listDinner += '<div class= card col-lg-3 col-md-6 col-sm-6 col-6 mt-6 style="width: 17rem;>';
        listDinner += '<div class = "card-body canle" >';
        listDinner += '<div class = "card-title canle" >' + data.name + '</div>';
        listDinner += '<div class = "card-text canle" >';
        listDinner += data.ingredients + "<br>";
        listDinner += '<div class = "price" >';
        listDinner +=  "$" + data.price + '</div>';
        listDinner += '</div>';
        listDinner += `<div><button class = "detail" onclick = "getDinner('${data.id}')"> Detail </button>`;
        listDinner += '</div>';
        listDinner += '</div>';
        document.getElementById('buaToi').innerHTML += listDinner;
    }
    saveDinner();
    // listDinner();
}
function getDinner(id) {
    location.href = 'detailDinner.html';
    let allDinner = JSON.parse(localStorage.getItem('listDinner'));
    let dinner = allDinner.filter(dinner => {
        return dinner.id == id;
    });
    localStorage.setItem('detailDinner', JSON.stringify(dinner));
}
function showDinner() {
    let arr = JSON.parse(localStorage.getItem('detailDinner'))
    var listDinner = '';
    for (var i in arr) {
        var data = JSON.parse(JSON.stringify(arr[i]))
        listDinner = '<div class="col-lg-8 col-md-6 col-sm-6 col-6 mt-6" >';
        listDinner += '<div class="card-deck">';
        listDinner += '<div class= card col-lg-8 col-md-6 col-sm-6 col-6 mt-6 style="width: 18rem; >';
        listDinner += '<div class = "card-body" >';
        listDinner += '<img class = "card-img-top imgDetail" src = "' + data.img + '">';
        listDinner += '</div>';
        listDinner += '</div>';
        listDinner += '</div>';
        listDinner += '<div class="col-lg-8 col-md-6 col-sm-6 col-6 mt-6" >';
        listDinner += '<div class="card-deck">';
        listDinner += '<div class= card col-lg-8 col-md-6 col-sm-6 col-6 mt-6 style="width: 17rem; >';
        listDinner += '<div class = "card-body" >';
        listDinner += '<div class = "card-title text-center" >' + data.name + '</div>';
        listDinner +=  '<div class = "card-text canle" > ' + data.note + '</div>';
        listDinner += '<div class = "card-text canle" >';
        listDinner += "Ingredients: &nbsp" + data.ingredients + "<br>";
        listDinner += '<br>';
        listDinner += '<div class = "price" >';
        listDinner +=  '<div class="h23">' + "Price: &nbsp" +"$"+ data.price + '</div>';
        listDinner += '</div>';
        listDinner += '<br>';
        listDinner += '<span class="text-center add-to-cart btn btn-outline-warning add-cart">';
        listDinner += '<a>' + '<i class="fa fa-cart-plus"> </i>' + '</a> </span>';
        listDinner += '&nbsp &nbsp<button class = "detail" onclick = "#">Order</button></div>';
        listDinner += '</divsws>';
        listDinner += '</div>';
        listDinner += '</div>'; 
        document.getElementById('chiTietDinner').innerHTML = listDinner;
    }
    // save();
}
function getReview(id) {
    let detail = JSON.parse(localStorage.getItem('detailDinner'));
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
