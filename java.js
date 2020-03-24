let btn = document.getElementsByClassName("btn-add");
let input =document.getElementsByClassName("input-text");
btn[0].addEventListener("click",function()
{
    if(input[0].value === "")
    {
        alert("you have no item entred ! ")
    }
    else 
    {
      let btnComplete = document.createElement("BUTTON");
      btnComplete.innerHTML="complete";
      btnComplete.setAttribute("class","btn-complete")
      btnComplete.setAttribute("style","height:30px;background-color:#F8F8F8")
      document.body.appendChild(btnComplete);


      let btnDelete = document.createElement("BUTTON");
      btnDelete.innerHTML="delete";
      btnDelete.setAttribute("class","btn-delete")
      btnDelete.setAttribute("style","margin:3px;height:30px;background-color:#F8F8F8")
      document.body.appendChild(btnDelete);

      let label = document.createElement("label");
      label.innerHTML = input[0].value;
      label.setAttribute("class","label")
      label.setAttribute("style", "color:gray;font-family: Arial, Helvetica, sans-serif;font-size: 25px;padding-left:20px;");
      document.body.appendChild(label);

      let breakline = document.createElement("br");
      document.body.appendChild(breakline);
     
      input[0].value = "";

     btnDelete.addEventListener("click",function()
     {
         btnComplete.parentNode.removeChild(btnComplete)
         btnDelete.parentNode.removeChild(btnDelete)
         label.parentNode.removeChild(label)
     })     
     btnComplete.addEventListener("click",function()
     {
         if(btnComplete.innerHTML!=="UNDO")
         {
         btnComplete.innerHTML="UNDO";
         label.setAttribute("style","text-decoration:line-through;color:gray;font-family: Arial, Helvetica, sans-serif;font-size: 25px")
        }
        else{
            btnComplete.innerHTML="complete";
         label.setAttribute("style","text-decoration:line-none;color:gray;font-family: Arial, Helvetica, sans-serif;font-size: 25px")
        }
     })      

    }
})

