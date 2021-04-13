// var danhGia = [{
//     id: "dg1",
//     name: " thuy",
//     img: "img_breakfast/mi-quang.jpg",
//     note: "mon an cua nha hang ngon, phuc vu chu dao"
// },
// {
//     id: "dg1",
//     name: " thuy",
//     img: "img_breakfast/mi-quang.jpg",
//     note: "mon an cua nha hang ngon, phuc vu chu dao"
// },
// {
//     id: "dg1",
//     name: " thuy",
//     img: "img_breakfast/mi-quang.jpg",
//     note: "mon an cua nha hang ngon, phuc vu chu dao"
// }
// ];
// function save() {
//     localStorage.setItem('listDanhGia', JSON.stringify(danhGia))
// }

// function load() {
//     danhGia = JSON.parse(localStorage.getItem('listDanhGia'))
// }

// if (localStorage.getItem('listDanhGia') != null) {
//     load();
// }

// function listLocal() {
//     var listProduct = '';
//     for (var i in danhGia) {
//         var data = JSON.parse(JSON.stringify(danhGia[i]))
//         listProduct = '<div class="col-lg-12 col-md-6 col-sm-6 col-6 mt-3">';
//         listProduct += ` <span class="fa fa-star checket-small-color"></span>
//         <span class="fa fa-star checket-small-color"></span>
//         <span class="fa fa-star checket-small-color"></span>
//         <span class="fa fa-star checket-small-color"></span>
//         <span class="fa fa-star checket-small-color"></span>`;
//         listProduct += '<p>'+"by"+data.name+'</p>';
//         listProduct += '<p>'+"by"+data.note+'</p>';
//         listProduct += '<img style="height: 100px; width: 200px; "src = "' + data.img +'">';
//         listProduct += '<hr style="height: 2%; width: 100%;color: black;">';
//         document.getElementById('banchay').innerHTML += listProduct;
//     }
//     save();
// }