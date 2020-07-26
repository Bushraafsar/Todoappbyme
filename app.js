var lst=document.getElementById("list");
function addtodo(){
    var item=document.getElementById("todoitem").value;
   
    var li=document.createElement("li");
    var litext=document.createTextNode(item);
    li.appendChild(litext);
    
 
    
    
    var editbtn =document.createElement("button");
    var edittext =document.createTextNode("Edit");
    editbtn.appendChild(edittext)
    editbtn.setAttribute("class","btn");
    editbtn.setAttribute("onclick","onEdit(this)");
    li.appendChild(editbtn);
    
    
    todoitem.value="";
    console.log(li)
    var delbtn =document.createElement("button");
    var deltext =document.createTextNode("Delete");
    delbtn.appendChild(deltext)
    delbtn.setAttribute("class","btnn");
    delbtn.setAttribute("onclick","onDelete(this)");
    li.appendChild(delbtn);
    
    todoitem.value="";
    console.log(li)
    
    
    if(item!==""){
        lst.appendChild(li);
    }
    else{
       
        alert("Please be filled this field!!")
    }


}
function delall(){
    lst.innerHTML="";
    

}
function onDelete(e){
    //e.parentNodes.remove()
    e.parentNode.remove();
    
}





function onEdit(e){
    var val=prompt("What to do next?",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue=val;

    



}

