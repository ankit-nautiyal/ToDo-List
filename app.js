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
        let doneBtn = document.createElement('button');


        delBtn.innerText= 'Delete❎';
        delBtn.style.backgroundColor = '#f80b0b';
        editBtn.innerText = 'Edit✍🏻';
        editBtn.style.backgroundColor = '#00a3e4';
        doneBtn.innerText = 'Done✅';
        doneBtn.style.backgroundColor = 'yellow';


        delBtn.classList.add('delete');
        editBtn.classList.add('edit');
        doneBtn.classList.add('done');
        
        item.appendChild(doneBtn);
        item.appendChild(editBtn);
        item.appendChild(delBtn);
        
    }
})

ol.addEventListener('click', function(event){
    if(event.target.nodeName == 'BUTTON' && event.target.classList.contains('delete')){
            event.target.parentElement.remove(); // Deletes one task
        } else if(event.target.classList.contains('edit')) {
            let newText = prompt("Edit Task:", event.target.parentElement.firstChild.textContent);
            if(newText !== null && newText.trim() !== ''){
                event.target.parentElement.firstChild.textContent = newText;
            }
        } else if(event.target.classList.contains('done')){
            event.target.parentElement.style.textDecoration= "line-through";  // ✅ Marks one task as done
        }
    }
);

// "Delete All" button logic
document.getElementById('delAllBtn').addEventListener('click', function(){
    ol.innerHTML = ''; // Clears the entire todo list
});

// "✅Mark All As Done" button logic
document.getElementById('doneAllBtn').addEventListener('click', function(){
    document.querySelectorAll('ol li').forEach(li => {
        li.style.textDecoration = "line-through"; // Marks all tasks as done✅
    });
});




//FOLLOWING CODE WILL NOT DELETE THE NEWLY ADDED ELEMENTS SO WE USED "EVENT DELEGATION" AS CODED ABOVE
// let delBtns= document.querySelectorAll('.delete');
// for(delBtn of delBtns){
//     delBtn.addEventListener('click', function(){
//         this.parentElement.remove();
//     })
// }

//EDIT FUNCTIONALITY ADDED BY SELF