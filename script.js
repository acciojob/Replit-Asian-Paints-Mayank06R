document.getElementById("change_button").addEventListener("click", function () {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.style.backgroundColor = "transparent"; // Reset all
    });

    const blockId = document.getElementById("block_id").value.trim();
    const color = document.getElementById("colour_id").value.trim();

    if (!blockId || blockId < 1 || blockId > 9 || !color) {
        alert("Invalid inputs. Enter a valid Block ID and color.");
        return;
    }

    const selectedBlock = document.getElementById(blockId);
    if (selectedBlock) {
        selectedBlock.style.backgroundColor = color;
    } else {
        alert("Invalid Block ID.");
    }
});

document.getElementById("reset_button").addEventListener("click", function () {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
    });

    document.getElementById("block_id").value = "";
    document.getElementById("colour_id").value = "";
});