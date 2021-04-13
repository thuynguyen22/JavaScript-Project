var lunch = [{
    id: "SP1",
    name: "Beefsteak",
    img: "img_lunch/mon-bo-bit-tet.jpg",
    price:    400,
    ingredients: "beef, tomato, potato, thyme leaf",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP2",
    name: "Pan-fried salmon",
    img: "img_lunch/ca-hoi-ap-chao.jpg",
    price:    500,
    ingredients: "Salmon fillet, Ginger, Lemon",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."

},
{
    id: "SP3",
    name: "Beef stew",
    img: "img_lunch/bo-kho.jpg",
    price:    300,
    ingredients: "beef, Carrot,onion,Cilantro, basil, chili, tomato sauce",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP4",
    name: "Spaghetti with salmon",
    img: "img_lunch/mi-y.jpg",
    price:    700,
    ingredients: "pasta, salmon, tomato, cauliflower, onion, scallion",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP5",
    name: "Shark fin soup",
    img: "img_lunch/sup-vi-ca-map.jpg",
    price:    2000,
    ingredients: "Shark fin, pork bones, crab meat, eggs, cornstarch, chicken thighs",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP6",
    name: "French fatty foie gras",
    img: "img_lunch/gan-ngong-phap.jpg",
    price:    4000,
    ingredients: "French foie gras, Himalayan pink salt, white wine, black pepper",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP7",
    name: "grilled chicken drumstick with honey",
    img: "img_lunch/dui-ga-nuong-mat-ong.jpg",
    price:    900,
    ingredients: "Chicken thigh, dried onion, garlic, honey, oyster oil, white pepper",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP8",
    name: "stewed pork",
    img: "img_lunch/thit-heo-ham.jpg",
    price:    500,
    ingredients: "Bacon, Coca cola, cinnamon, cucumber, shallot, garlic,",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
}];

function saveLunch() {
    localStorage.setItem('listLunch', JSON.stringify(lunch))
}

function loadLunch() {
    lunch = JSON.parse(localStorage.getItem('listLunch'))
}

if (localStorage.getItem('listLunch') != null) {
    loadLunch();
}

function listLunch() {
    var listLunch = '';
    for (var i in lunch) {
        var data = JSON.parse(JSON.stringify(lunch[i]))
        listLunch = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-6" >';
        listLunch += '<div class="card-deck text-center">';
        listLunch += '<div class= card col-lg-3 col-md-6 col-sm-6 col-6 mt-6 style="width: 17rem; >';
        listLunch += '<div class = "card-body" >';
        listLunch += '<img class = "card-img-top image" src = "' + data.img + '">';
        listLunch += '</div>';
        listLunch += '</div>';
        listLunch += '</div>';
        listLunch += '<div class="card-deck">';
        listLunch += '<div class= card col-lg-3 col-md-6 col-sm-6 col-6 mt-6 style="width: 17rem; >';
        listLunch += '<div class = "card-body" >';
        listLunch += '<div class = "card-title canle" >' + data.name + '</div>';
        listLunch += '<div class = "card-text canle" >';
        listLunch += data.ingredients + "<br>";
        listLunch += '<br>';
        listLunch += '<div class = "price" >';
        listLunch += "$"+ data.price + '</div>';
        listLunch += '</div>';
        listLunch += `<div><button class = "detail" onclick = "getLunch('${data.id}')"> Detail </button>`;
        listLunch += '</div>';
        listLunch += '</div>';
        document.getElementById('buaTrua').innerHTML += listLunch;
    }
    saveLunch();
    // listLunch();
    // getLunch();
}
function getLunch(id) {
    location.href = 'detailLunch.html';
    let allLunch = JSON.parse(localStorage.getItem('listLunch'));
    let lunch = allLunch.filter(lunch => {
        return lunch.id == id;
    });
    localStorage.setItem('detailLunch', JSON.stringify(lunch));
}
function showLunch() {
    let arr = JSON.parse(localStorage.getItem('detailLunch'))
    var listLunch = '';
    for (var i in arr) {
        var data = JSON.parse(JSON.stringify(arr[i]))
        listLunch = '<div class="col-lg-8 col-md-6 col-sm-6 col-6 mt-6" >';
        listLunch += '<div class="card-deck">';
        listLunch += '<div class= card col-lg-8 col-md-6 col-sm-6 col-6 mt-6 style="width: 18rem; >';
        listLunch += '<div class = "card-body" >';
        listLunch += '<img class = "card-img-top imgDetail" src = "' + data.img + '">';
        listLunch += '</div>';
        listLunch += '</div>';
        listLunch += '</div>';
        listLunch += '<div class="col-lg-8 col-md-6 col-sm-6 col-6 mt-6" >';
        listLunch += '<div class="card-deck">';
        listLunch += '<div class= card col-lg-8 col-md-6 col-sm-6 col-6 mt-6 style="width: 17rem; >';
        listLunch += '<div class = "card-body" >';
        listLunch += '<div class = "card-title text-center" >' + data.name + '</div>';
        listLunch +=  '<div class = "card-text canle" > ' + data.note + '</div>';
        listLunch += '<div class = "card-text canle" >';
        listLunch += "Ingredients: &nbsp" + data.ingredients + "<br>";
        listLunch += '<br>';
        listLunch += '<div class = "price" >';
        listLunch +=  '<div class="h23">' + "Price: &nbsp" +"$"+ data.price + '</div>';
        listLunch += '</div>';
        listLunch += '<br>';
        listLunch += '<span class="text-center add-to-cart btn btn-outline-warning add-cart">';
        listLunch += '<a>' + '<i class="fa fa-cart-plus"> </i>' + '</a> </span>';
        listLunch += '&nbsp &nbsp<button class = "detail" onclick = "#">Order</button></div>';
        listLunch += '</divsws>';
        listLunch += '</div>';
        listLunch += '</div>'; 
        document.getElementById('chiTietLunch').innerHTML = listLunch;
    }
    // save();
    // showLunch();
}
function getReview(id) {
    let detail = JSON.parse(localStorage.getItem('detailLunch'));
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
