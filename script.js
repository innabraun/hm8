document.addEventListener("DOMContentLoaded", ()=>{

    let input = document.createElement("input");
    input.classList.add("bg")

    let spanText=document.createElement("span")
    spanText.textContent="price"
    spanText.classList.add("text")
    document.body.append(input,spanText)

    let span=document.createElement("span");
    span.classList.add("span")
    document.body.append(span);

    function ourBlur(){
        input.classList.replace("focus", "blur")

        let newValue=Number(input.value.trim())
        console.log(typeof newValue)

        if(isNaN(newValue) || newValue <= 0){
            this.classList.add("error");
            //newValue.focus()
            span.innerHTML = 'Please enter correct price'
        } else {
            this.classList.remove("error");
            span.innerHTML="";
            ourFocus();
            let spanValueX=document.createElement("span");
            spanValueX.classList.add("content")
            spanValueX.innerHTML = "x"

            let spanValue=document.createElement("span");
            spanValue.classList.add("spanValue")
            spanValue.innerHTML = `${"Текущая цена:"}` + newValue
            document.body.append(spanValueX, spanValue)
            input.classList.add("green")

            spanValueX.addEventListener("click", (e) => {
                spanValueX.remove();
                spanValue.remove();
                input.value = null;
                input.classList.remove("green")
            })
        }
    }
    input.addEventListener("blur",ourBlur)

        function ourFocus () {
            input.classList.add("focus")
                }
        input.addEventListener("focus",ourFocus)
});


