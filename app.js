let btn= document.querySelector('button');
let ol= document.querySelector('ol');
let inp= document.querySelector('input');

btn.addEventListener('click', function(){
    if(inp.value!==null && inp.value.trim()!==''){
        let item= document.createElement('li');
        item.innerText= inp.value;
        inp.value= '';
        ol.appendChild(item);
        console.log("TASK ADDED");

        let delBtn= document.createElement('button');
        let editBtn = document.createElement('button');
        delBtn.innerText= 'Delete';
        editBtn.innerText = 'Edit';
        delBtn.classList.add('delete');
        editBtn.classList.add('edit');
        item.appendChild(delBtn);
        item.appendChild(editBtn);
    }
})

ol.addEventListener('click', function(event){
    if(event.target.nodeName == 'BUTTON' && event.target.classList.contains('delete')){
            event.target.parentElement.remove();
        } else if(event.target.classList.contains('edit')) {
            let newText = prompt("Edit Task:", event.target.parentElement.firstChild.textContent);
            if(newText !== null && newText.trim() !== ''){
                event.target.parentElement.firstChild.textContent = newText;
            }
        }
    }
);




//FOLLOWING CODE WILL NOT DELETE THE NEWLY ADDED ELEMENTS SO WE USED "EVENT DELEGATION" AS CODED ABOVE
// let delBtns= document.querySelectorAll('.delete');
// for(delBtn of delBtns){
//     delBtn.addEventListener('click', function(){
//         this.parentElement.remove();
//     })
// }

//EDIT FUNCTIONALITY ADDED BY SELF