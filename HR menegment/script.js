

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let inp = document.getElementById("inp").value;
    document.getElementById("inp").value = "";

    let sel = document.getElementById("eselect").value;
    document.getElementById("eselect").value ="";

    let emtable = document.getElementById("tbody");

    if (inp == "") {
        alert("All fields are required!");
        return;
    }

    let trnew = document.createElement("tr");
    trnew.innerHTML = `
        <td>${inp}</td>
        <td>${sel}</td>
        <td><button id="delete-btn">Delete</button></td>`;
    emtable.appendChild(trnew);

    let dbtn = document.getElementById("delete-btn")
    dbtn.addEventListener("click",()=>{
        trnew.remove()    
    });
});

let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", ()=>{
    let inp = document.getElementById("employeeN").value;
    document.getElementById("employeeN").value = "";

    let date = document.getElementById("date").value;
    document.getElementById("date").value = "";

    let status = document.getElementById("status").value;
    document.getElementById("status").value ="";

    let body = document.getElementById("tbody2");

    if(inp == "" || date == ""){
        alert("All fields are required!");
        return;
    }

    let trnew = document.createElement("tr");
    trnew.innerHTML = `
    <td>${inp}</td>
    <td>${date}</td>
    <td>${status}</td>
    <td><button id="delet-atendence">Delete</button></td>`;
    body.appendChild(trnew);

    let dbtn = document.getElementById("delet-atendence")
    dbtn.addEventListener("click",()=>{
        trnew.remove()    
    });
});
    
let btn3 = document.getElementById("btn3");

btn3.addEventListener("click", ()=>{
    let name = document.getElementById("leave-name").value.trim();
    document.getElementById("leave-name").value = "";

    let leaveType = document.getElementById("leaveType").value;
    let sdate = document.getElementById("sdate").value;
    document.getElementById("sdate").value = "";

    let edate = document.getElementById("edate").value;
    document.getElementById("edate").value = "";

    let reason = document.getElementById("reason").value.trim();
    document.getElementById("reason").value = "";

    let body = document.getElementById("tbody3");

    if (name === "" || sdate === "" || edate === "" || reason === "") {
        alert("All fields are required!");
        return;
    }

    let trnew = document.createElement("tr");
    trnew.innerHTML = `
        <td>${name}</td>
        <td>${leaveType}</td>
        <td>${sdate}</td>
        <td>${edate}</td>
        <td>${reason}</td>
        <td><button class="delete-leave">Delete</button></td>`;
    body.appendChild(trnew);

    trnew.querySelector(".delete-leave").addEventListener("click", () => {
        trnew.remove();
    });

});
