//your JS code here. If required.
document.getElementById("change_button").addEventListener("click", function() {
    // Reset all grid item colors to transparent
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
    });

    // Get the input values
    const blockId = document.getElementById("block_id").value;
    const color = document.getElementById("colour_id").value;

    // Change the color of the specified block
    if (blockId && color) {
        const selectedBlock = document.getElementById(blockId);
        if (selectedBlock) {
            selectedBlock.style.backgroundColor = color;
        } else {
            alert("Invalid block ID");
        }
    } else {
        alert("Please enter both block ID and color");
    }
});

document.getElementById("reset_button").addEventListener("click", function() {
    // Reset all grid item colors to transparent
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
    });
});
