// navigtion mouse over

const nav = document.getElementById('hover');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const option5 = document.getElementById('option5');
const option6 = document.getElementById('option6');
const active = document.getElementById('active');

option1.addEventListener('mouseover', ()=> {
    nav.classList.add('hover1');
    active.classList.add('handover');
})
option1.addEventListener('mouseout', ()=> {
    nav.classList.remove('hover1');
    active.classList.remove('handover');
})

option2.addEventListener('mouseover', ()=> {
    nav.classList.add('hover2');
    active.classList.add('handover');
})
option2.addEventListener('mouseout', ()=> {
    nav.classList.remove('hover2');
    active.classList.remove('handover');
})

option3.addEventListener('mouseover', ()=> {
    nav.classList.add('hover3');
    active.classList.add('handover');
})
option3.addEventListener('mouseout', ()=> {
    nav.classList.remove('hover3');
    active.classList.remove('handover');
})

option4.addEventListener('mouseover', ()=> {
    nav.classList.add('hover4');
    active.classList.add('handover');
})
option4.addEventListener('mouseout', ()=> {
    nav.classList.remove('hover4');
    active.classList.remove('handover');
})

option5.addEventListener('mouseover', ()=> {
    nav.classList.add('hover5');
    active.classList.add('handover');
})
option5.addEventListener('mouseout', ()=> {
    nav.classList.remove('hover5');
    active.classList.remove('handover');
})

option6.addEventListener('mouseover', ()=> {
    nav.classList.add('hover6');
    active.classList.add('handover');
})
option6.addEventListener('mouseout', ()=> {
    nav.classList.remove('hover6');
    active.classList.remove('handover');
})

// ######################################################################################

// Add data to the tables

// data from input box for order list
const order_date = document.getElementById('order-date').value;
const order_customer = document.getElementById('order-customer').value;
const order_time = document.getElementById('order-time').value;
const order_quantity = document.getElementById('order-quantity').value;
const order_item = document.getElementById('order-item').value;
const order_remark = document.getElementById('order-remark').value;
const order_add = document.getElementById('order-add');

//--------------Created Json Object as database using with localstorage--------------

let order_LIST,order_id;

// get item from localstorage and will be string format
let data = AddOrderValue();

//check if data is empty or not
if(data){// data get
    order_LIST = JSON.parse(data); // convert JSON datatype
    order_id = order_LIST.length; // set the id to last one in the list becacuse length means fequency of the list item
}
else{
    order_LIST= [];// nothing data; noting list
    order_id = 1;//nothing in list
};

// Function : Adding data to the orderlist table

function AddtoOrderlist(id,date,time,customer,item,quantity,remark,trash){
    if(trash){
        return;
    };

    const order_data = `
    <div class="orderlist-table-data" id="${id}">
        <div class="id">
            <p>${id}.</p>
        </div>
        <div class="date">
            <p>${date}</p>
            <p>${time}</p>
        </div>
        <div class="customer">
            <p>${customer}</p>
        </div>
        <div class="item">
            <p>${item}</p>
        </div>
        <div class="quantity">
            <p>${quantity}</p>
        </div>
        <div class="remark">
            <p>${remark}</p>
        </div>
        <div class="edit_delete">
            <svg class="edit" id="${id}" job="edit" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/></svg>
            <svg class="delete" id="${id}" job="delete" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
        </div>
    </div>
    `;

    ordertable.insertAdjacentHTML('beforeend',order_data);
}

// CLear input Value function

function ClearInputFromOrder(){
    document.getElementById('order-date').value = "";
    document.getElementById('order-customer').value ="";
    document.getElementById('order-time').value = "";
    document.getElementById('order-quantity').value = "";
    document.getElementById('order-item').value = "";
    document.getElementById('order-remark').value = "";
}

// Funtion : When click add value;

function AddOrderValue(){
    const order_date = document.getElementById('order-date').value;
    const order_customer = document.getElementById('order-customer').value;
    const order_time = document.getElementById('order-time').value;
    const order_quantity = document.getElementById('order-quantity').value;
    const order_item = document.getElementById('order-item').value;
    const order_remark = document.getElementById('order-remark').value;

    if(order_date && order_customer && order_time && order_quantity && order_item && order_remark){
        AddtoOrderlist(order_id,order_date,order_time,order_customer,order_item,order_quantity,order_remark,false);

        order_LIST.push({
            id: order_id,
            date: order_date,
            time: order_time,
            customer: order_customer,
            item: order_item,
            quantity: order_quantity,
            remark: order_remark,
            trash: false
        });

        // add item to localstorage
        // List need to update everytime whenever new data inserted
        order_id++;
        ClearInputFromOrder();
        return order_LIST;
    }
}

order_add.addEventListener('click',AddOrderValue);

//-----------------------Remove to ordertable----------------

function removeToorderlist(element) {
    const orderId = element.id;
    const orderData = element.parentNode.parentNode;
    orderData.parentNode.removeChild(orderData);
    order_LIST = order_LIST.filter(order => order.id != orderId);

    order_id--;

    // Reassign IDs to remaining elements
    ordertable.querySelectorAll('.orderlist-table-data').forEach((order, index) => {
        order.querySelector('.id p').textContent = id + '.';
    });

    console.log(order_LIST);
}

//----------------------------target the items created dynamically----------------

ordertable.addEventListener('click',(event)=>{
    const element = event.target;
    const elementJob = element.getAttribute('job');

    if (elementJob === 'delete') {
        removeToorderlist(element);
    }
})