const table = document.getElementById("table");
const table2 = document.getElementById("table2");
const change_color_button = document.getElementById("change_color_button");
let current_background = "url('../table images/images.jpeg')";//נועד עבור לקבוע משתני גלובלי עבור
let current_background_text = document.getElementById("current_text_button");
function change_color() {
    const background = ["url('../table images/images.jpeg')", "url('../table images/images (1).jpeg')", "url('../table images/background 3.jpeg')", "url('../table images/background 4.jpeg')"];
    const current_names = [];
    for (let i = 0; i < background.length; i++) {
        current_names.push(i + 1);
    }
    while (true) {
        chosen = background[Math.floor(Math.random() * background.length)];
        let index = background.indexOf(chosen);
        if (chosen != current_background) {
            current_background = chosen;
            table.style.backgroundImage = chosen;
            table2.style.backgroundImage = chosen;
            change_color_button.style.backgroundImage = chosen;
            current_background_text.innerHTML = "current: " + current_names[index];
            break;
        }
        else if (index == background.length - 1) {
            chosen = background[index - 1];
        }
        else {
            chosen = background[index + 1];
        }
        let index_2 = background.indexOf(chosen);
        current_background_text.innerHTML = "current: " + current_names[index_2];
        table.style.backgroundImage = chosen;
        table2.style.backgroundImage = chosen;
        change_color_button.style.backgroundImage = chosen;
        current_background = chosen;
        break;
    }
    console.log(table);
    

    //document.getElementByClassName("table").style.backgroundColor = "lightblue";
}