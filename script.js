document.getElementById("change_button").addEventListener("click", function () {
    // Reset all grid item colors to transparent
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
    });

    // Get the input values
    const blockId = document.getElementById("block_id").value.trim();
    const color = document.getElementById("colour_id").value.trim();

    // Validate block ID
    if (!blockId || isNaN(blockId) || blockId < 1 || blockId > 9) {
        alert("Please enter a valid Block ID between 1 and 9.");
        return;
    }

    // Validate color input
    if (!color) {
        alert("Please enter a valid color.");
        return;
    }

    // Change the color of the specified block
    const selectedBlock = document.getElementById(blockId);
    if (selectedBlock) {
        selectedBlock.style.backgroundColor = color;
    } else {
        alert("Invalid block ID");
    }
});

document.getElementById("reset_button").addEventListener("click", function () {
    // Reset all grid item colors to transparent
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
    });

    // Clear input fields
    document.getElementById("block_id").value = "";
    document.getElementById("colour_id").value = "";
});
