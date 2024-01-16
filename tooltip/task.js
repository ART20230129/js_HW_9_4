
const hasTooltip = document.querySelectorAll(".has-tooltip");

//создаем div с подсказкой
const tooltip = document.createElement("div");
tooltip.className = "tooltip";

hasTooltip.forEach((element) => {
       element.addEventListener('click', (e) => {
                e.preventDefault();

                // "ВСТАВЛЯЕМ" РАЗМЕТКУ СОЗДАННОГО (и НЕзаполненного!!!!) ЭЛЕМЕНТА ПОД ССЫЛКОЙ
                element.insertAdjacentElement('afterEnd', tooltip)

                if (element.title == tooltip.textContent){
                        tooltip.classList.toggle("tooltip_active") 
                } else {
                        //Считываем текст ссылки и присваиваем его созданному div элементу
                        const title = element.getAttribute("title");
                        tooltip.textContent = title;   
                        //устанавливаем расположение подсказки под сслкой
                        let coordinatesLink = element.getBoundingClientRect();
                        tooltip.style.top = coordinatesLink.bottom + 'px';
                        tooltip.style.left = coordinatesLink.left + 'px';
                        // включаем подсказку, устанавливая класс "tooltip_active"
                        tooltip.classList.add("tooltip_active")
                }
             
       }) 
});
