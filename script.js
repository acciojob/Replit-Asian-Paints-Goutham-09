//your JS code here. If required.
let changeButton = document.getElementById("change_button");
let resetButton = document.getElementById("Reset");

changeButton.addEventListener("click", function () {

let blockId = document.getElementById("block_id").value;
let colour = document.getElementById("colour_id").value;

for (let i = 1; i <= 9; i++) {
     document.getElementById(i).style.backgroundColor = "transparent";
}

let block = document.getElementById(blockId);
if (block) {
         block.style.backgroundColor = colour;
            } else {
                alert("Enter a valid block ID from 1 to 9");
            }
        });


        resetButton.addEventListener("click", function () {
            for (let i = 1; i <= 9; i++) {
                document.getElementById(i).style.backgroundColor = "transparent";
            }
        });

