let totalprice = document.getElementById('totalprice')
let price = document.getElementById('price')
let tva = document.getElementById('tva')
let discount = document.getElementById('discount')
let ads = document.getElementById('ads')
let total = document.getElementById('total')
let title = document.getElementById('titelp')
let btn = document.getElementById('submet')
let count = document.getElementById('count')
let category = document.getElementById('category')
let search = document.getElementById("search")
let body = document.body
let tbody = document.querySelector("table tbody")
let btntitle = document.getElementById("titlesearch")


let searchmode ="title";
let mode;
mode = 'creat';
let currentIndex; // تعريف currentIndex



//           حساب المجمع


let inputtotal = [
    price,
    tva,
    discount,
    ads,
]

for (let index = 0; index < inputtotal.length; index++) {
    const element = inputtotal[index];
    element.addEventListener('input', calculTotal);
}
function calculTotal() {

    let totall = (Number(price.value) + Number(tva.value) + Number(ads.value)) - Number(discount.value);

    total.innerText = totall
    total.style.backgroundColor = 'green'

}





//    تخزين المعلومات  في بروجي  

let pro;

if (localStorage.prodact != null) {
    pro = JSON.parse(localStorage.prodact)



}
else {
    pro = [];
}







function saveproduct() {
    let data = {
        id: "1",
        title: title.value,
        price: price.value,
        tva: tva.value,
        disc: discount.value,
        ads: ads.value,
        total: total.innerText,
        count: count.value,
        category: category.value,
    }




    //  loop four creat items by count num


    if (count.value > 0) {
        for (let index = 0; index < count.value; index++) {

            pro.push(data)
            localStorage.setItem('prodact', JSON.stringify(pro))
        }
    } else {
        pro.push(data)
        localStorage.setItem('prodact', JSON.stringify(pro))
    }

}





//   استعادة المعلومات وعرضها في القائمة 




function redandrestor() {

    let tbody = document.querySelector("table tbody")
    tbody.innerHTML = "";

    // let showdata;
    for (let index = 0; index < pro.length; index++) {
        let row = document.createElement("tr")

        row.innerHTML += ` 
                            <td>${index + 1}</td>
                            <td>${pro[index].title}</td>
                            <td>${pro[index].price}</td>
                            <td>${pro[index].tva}</td>
                            <td>${pro[index].disc}</td>
                            <td>${pro[index].total}</td>
                            <td>${pro[index].category}</td>
                            <td><button   class= "update" >update</button></td>
                            <td><button class="delet"  >delet</button></td>
                        `

        tbody.appendChild(row);


        // استخدام querySelector للحصول على الزر داخل كل صف
        let deleteButton = row.querySelector(".delet");
        deleteButton.addEventListener("click", function () {
            pro.splice(index, 1); // حذف العنصر المحدد من المصفوفة
            localStorage.setItem('prodact', JSON.stringify(pro)); // تحديث localStorage
            redandrestor(); // إعادة تحميل الجدول بعد الحذف

        })


        // for (let iup = 0; iup < array.length; iup++) {)
        let updatebtn = row.querySelector(".update")
        updatebtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // هذا يجعل التمرير سلسًا
            });
            

            title.value = pro[index].title,
                price.value = pro[index].price,
                tva.value = pro[index].tva,
                discount.value = pro[index].disc,
                ads.value = pro[index].ads,
                total.innerText = pro[index].total,
                count.value = pro[index].count,
                category.value = pro[index].category
            btn.style.backgroundColor = "green"
            btn.innerText = 'update'
            mode = 'update';
            currentIndex = index;
            count.style.display = 'none'



        })

        // }

        // function updatebtncreat() {title.value = pro[index].title,


        // }

    }



}


function deletall2() {


    if (pro.length > 0) {
        let deletallbtn = document.getElementById("deletallbtn")
        deletallbtn.innerHTML = ` <button>delet all </button>   `;

    }
}
deletall2();



// search 
function searchbar () {

    if (search.value.length > 0) {
        if (searchmode === "title") {


            btntitle.style.backgroundColor = "red"
            btncategory.style.backgroundColor = ""


            tbody.innerHTML = "";

            // let showdata;
            for (let index = 0; index < pro.length; index++) {

                if (pro[index].title.includes(search.value)) {
                    let row = document.createElement("tr")
                    row.innerHTML += ` 
                            <td>${index + 1}</td>
                            <td>${pro[index].title}</td>
                            <td>${pro[index].price}</td>
                            <td>${pro[index].tva}</td>
                            <td>${pro[index].disc}</td>
                            <td>${pro[index].total}</td>
                            <td>${pro[index].category}</td>
                            <td><button  class= "update" >update</button></td>
                            <td><button class="delet"  >delet</button></td>
                        `
                    tbody.appendChild(row);
                }
            }


        } else if (searchmode === "category") {

            tbody.innerHTML = "";
            btncategory.style.backgroundColor = "red"

            for (let index = 0; index < pro.length; index++) {
            if (pro[index].category.includes(search.value)) {
                let row = document.createElement("tr")
                row.innerHTML += ` 
                                    <td>${index + 1}</td>
                                    <td>${pro[index].title}</td>
                                    <td>${pro[index].price}</td>
                                    <td>${pro[index].tva}</td>
                                    <td>${pro[index].disc}</td>
                                    <td>${pro[index].total}</td>
                                    <td>${pro[index].category}</td>
                                    <td><button  class= "update" >update</button></td>
                                    <td><button class="delet"  >delet</button></td>
                                `
                tbody.appendChild(row);

            }}


        }

        // btntitle.style.backgroundColor = ""

    } else {
        for (let index = 0; index < pro.length; index++) {
            let row = document.createElement("tr")

            row.innerHTML += ` 
                            <td>${index + 1}</td>
                            <td>${pro[index].title}</td>
                            <td>${pro[index].price}</td>
                            <td>${pro[index].tva}</td>
                            <td>${pro[index].disc}</td>
                            <td>${pro[index].total}</td>
                            <td>${pro[index].category}</td>
                            <td><button  class= "update" >update</button></td>
                            <td><button class="delet"  >delet</button></td>
                        `

            tbody.appendChild(row);
        }
        btncategory.style.backgroundColor = ""
        btntitle.style.backgroundColor = ""
    }
}

search.addEventListener('input', searchbar)


    let btncategory = document.getElementById("categorysearch")

    btntitle.addEventListener("click", function () {
        searchmode = "title"
        btntitle.style.backgroundColor = "green"
        btncategory.style.backgroundColor = ""
        search.focus();
        if(search.value.length > 0 ){
        searchbar();
        }

    })




    btncategory.addEventListener("click", function () {
        searchmode = "category"
        btncategory.style.backgroundColor = "green"
        btntitle.style.backgroundColor = ""
        search.focus();
if(search.value.length > 0 ){

        searchbar();

}
    }
    )











//  عند الضغط 


btn.addEventListener("click", function () {

    if (mode === 'creat') {
        saveproduct()

        redandrestor();

        deletall2();



        total.style.backgroundColor = 'rgb(136, 11, 28)'
        total.innerText = '';
        // اخلاء الخانات 

        title.value = "";
        price.value = "";
        tva.value = "";
        ads.value = "";
        count.value = "";
        category.value = "";
        discount.value = "";

    } else if (mode === 'update') {



        let data = {
            id: currentIndex + 1, // تحديث ID
            title: title.value,
            price: price.value,
            tva: tva.value,
            disc: discount.value,
            ads: ads.value,
            total: total.innerText,
            count: count.value,
            category: category.value,
        };

        pro[currentIndex] = data; // تحديث العنصر في الفهرس الحالي
        localStorage.setItem('prodact', JSON.stringify(pro));


        localStorage.setItem('prodact', JSON.stringify(pro))


        count.style.display = ''

        btn.style.backgroundColor = ""
        btn.innerText = 'creat'
        mode = 'creat';

        redandrestor();
        title.value = "";
        price.value = "";
        tva.value = "";
        ads.value = "";
        count.value = "";
        category.value = "";
        discount.value = "";
        total.innerText = '';
    }
}

)












redandrestor();




let deletall = document.getElementById("inputs")




let deletallbtn = document.getElementById("deletallbtn")
deletallbtn.addEventListener('click', function deletitems() {


    pro = [];

    localStorage.setItem('prodact', JSON.stringify(pro));
    let tbody = document.querySelector("table tbody")

    tbody.innerHTML = '';

    (function deleboton() {
        if (pro.length < 1) {
            let deletallbtn = document.getElementById("deletallbtn")
            deletallbtn.innerHTML = '';

        }

    })();

})



document.addEventListener("click", function (event) {
    if (search.value.length === 0){
    // تحقق مما إذا كانت النقرة على الزر أو حقل الإدخال
    if (!btntitle.contains(event.target) && !btncategory.contains(event.target) && !search.contains(event.target)) {
        btntitle.style.backgroundColor = "";
        btncategory.style.backgroundColor = "";
        search.blur(); // إزالة التركيز من حقل الإدخال
    }}
});
