const leftside = document.querySelector(".left")
const rightside = document.querySelector(".right")
const paragraph = document.querySelectorAll('.firstContent')



for (para of paragraph){

    para.setAttribute('draggable', true);
    para.addEventListener("dragstart",function(e){
        let selected = e.target;

        rightside.addEventListener('dragover',function(e){
            e.preventDefault();
        });

        rightside.addEventListener('drop',function(e){
            e.preventDefault()
            rightside.appendChild(selected);
            selected = null;
            console.log(rightside)
        })

        leftside.addEventListener('dragover',function(e){
            e.preventDefault();
        });

        leftside.addEventListener('drop',function(e){
            e.preventDefault()
            leftside.appendChild(selected);
            // selected = null;
            console.log(leftside)
        })
    })
}
