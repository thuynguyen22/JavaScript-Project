var breakfast = [{
    id: "SP1",
    name: "Pho bo of Viet Nam",
    img: "img_breakfast/pho-bo.jpg",
    price: 200,
    ingredients: "pho, broth, beef, chicken",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP2",
    name: "fried egg bread",
    img: "img_breakfast/banh-mi-trung.jpg",
    price: 1000,
    ingredients: "fried eggs, toast",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."

},
{
    id: "SP3",
    name: "Grilled Beef with potatoes",
    img: "img_breakfast/bo-nuong-khoai-tay.jpg",
    price: 300,
    ingredients: "beef, potatoes",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP4",
    name: "Banh Mi of Viet Nam",
    img: "img_breakfast/banh-mi.jpg",
    price: 100,
    ingredients: "bread",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP5",
    name: "milk with cereal",
    img: "img_breakfast/ngu-coc.jpg",
    price: 300,
    ingredients: "milk, cereal",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP6",
    name: "Chicken sticky rice",
    img: "img_breakfast/xoi.jpg",
    price: 500,
    ingredients: "sticky rice, chicken",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP7",
    name: "Quang Noodles",
    img: "img_breakfast/mi-quang.jpg",
    price: 700,
    ingredients: " toasted grilled rice paper, noodles,chicken",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
},
{
    id: "SP8",
    name: "chicken soup",
    img: "img_breakfast/soup.jpg",
    price: 500,
    ingredients: "chicken, rice, spices, mushrooms, eggs",
    note: "Pho is a traditional Vietnamese dish, originating from Hanoi and Nam Dinh, and is considered one of the typical dishes for Vietnamese cuisine. The main ingredients of pho are rice noodles and broth with sliced ​​beef or chicken."
}
];

function saveBreakfast() {
    localStorage.setItem('listBreakfast', JSON.stringify(breakfast))
}

function loadBreakfast() {
    breakfast = JSON.parse(localStorage.getItem('listBreakfast'))
}

if (localStorage.getItem('listBreakfast') != null) {
    loadBreakfast();
}
function listBreakfast() {
    var listBreakfast = '';
    for (var i in breakfast) {
        var data = JSON.parse(JSON.stringify(breakfast[i]))
        listBreakfast = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-6" >';
        listBreakfast += '<div class="card-deck text-center">';
        listBreakfast += '<div class= card col-lg-3 col-md-6 col-sm-6 col-6 mt-6 style="width: 17rem; >';
        listBreakfast += '<div class = "card-body" >';
        listBreakfast += '<img class = "card-img-top image" src = "' + data.img + '">';
        listBreakfast += '</div>';
        listBreakfast += '</div>';
        listBreakfast += '</div>';
        listBreakfast += '<div class="card-deck">';
        listBreakfast += '<div class= card col-lg-3 col-md-6 col-sm-6 col-6 mt-6 style="width: 17rem; >';
        listBreakfast += '<div class = "card-body" >';
        listBreakfast += '<div class = "card-title canle" >' + data.name + '</div>';
        listBreakfast += '<div class = "card-text canle" >';
        listBreakfast += data.ingredients + "<br>";
        listBreakfast += '<br>';
        listBreakfast += '<div class = "price" >';
        listBreakfast += "$" + data.price + '</div>';
        listBreakfast += '</div>';
        listBreakfast += '<br>';
        listBreakfast += `<div><button class = "detail" onclick = "getBreafast('${data.id}')"> Detail </button>`;
        listBreakfast += '</div>';
        listBreakfast += '</div>';
        getReview(data.id);
        document.getElementById('buaSang').innerHTML += listBreakfast;
    }
    saveBreakfast();

}


function getBreafast(id) {
    location.href = 'detailBreakfast.html';
    let allBreakfast = JSON.parse(localStorage.getItem('listBreakfast'));
    let breakfast = allBreakfast.filter(breakfast => {
        return breakfast.id == id;
    });
    localStorage.setItem('detailBreakfast', JSON.stringify(breakfast));
    // for (key in allBreakfast){
    //     if(allBreakfast.id = id){
    //         localStorage.setItem('listDanhGia2',JSON.stringify(danhGia2));
    //     }
    // }
}
function showBreakfast() {
    let arr = JSON.parse(localStorage.getItem('detailBreakfast'))
    var listBreakfast = '';
    for (var i in arr) {
        var data = JSON.parse(JSON.stringify(arr[i]))
        listBreakfast = '<div class="col-lg-8 col-md-6 col-sm-6 col-6 mt-6" >';
        listBreakfast += '<div class="card-deck">';
        listBreakfast += '<div class= card col-lg-8 col-md-6 col-sm-6 col-6 mt-6 style="width: 18rem; >';
        listBreakfast += '<div class = "card-body" >';
        listBreakfast += '<img class = "card-img-top imgDetail" src = "' + data.img + '">';
        listBreakfast += '</div>';
        listBreakfast += '</div>';
        listBreakfast += '</div>';
        listBreakfast += '<div class="col-lg-8 col-md-6 col-sm-6 col-6 mt-6" >';
        listBreakfast += '<div class="card-deck">';
        listBreakfast += '<div class= card col-lg-8 col-md-6 col-sm-6 col-6 mt-6 style="width: 17rem; >';
        listBreakfast += '<div class = "card-body" >';
        listBreakfast += '<div class = "card-title text-center" >' + data.name + '</div>';
        listBreakfast += '<div class = "card-text canle" > ' + data.note + '</div>';
        listBreakfast += '<div class = "card-text canle" >';
        listBreakfast += "Ingredients: &nbsp" + data.ingredients + "<br>";
        listBreakfast += '<br>';
        listBreakfast += '<div class = "price" >';
        listBreakfast += '<div class="h23">' + "Price: &nbsp" + "$" + data.price + '</div>';
        listBreakfast += '</div>';
        listBreakfast += '<br>';
        listBreakfast += '<span class="text-center add-to-cart btn btn-outline-warning add-cart">';
        listBreakfast += '<a>' + '<i class="fa fa-cart-plus"> </i>' + '</a> </span>';
        listBreakfast += '&nbsp &nbsp<button class = "detail" onclick = "#">Order</button></div>';
        listBreakfast += '</divsws>';
        listBreakfast += '</div>';
        listBreakfast += '</div>';
        document.getElementById('chiTietBreakfast').innerHTML = listBreakfast;
    }
}
function getReview(id) {
    let allBreakfast = JSON.parse(localStorage.getItem('listBreakfast'));
    for (var i in allBreakfast) {
        var data = JSON.parse(JSON.stringify(allBreakfast[i]))
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
        id: "SP" + parseInt(danhGia2.length + 1),
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
