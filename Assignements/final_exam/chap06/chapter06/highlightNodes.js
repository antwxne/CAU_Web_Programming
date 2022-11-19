window.onload = function () {
    let all_nodes = document.getElementsByTagName("*");
    for (let i = 0; i < all_nodes.length; i++) {
        if (all_nodes[i].nodeType != 3) {
            let new_node = document.createElement("p");
            new_node.className = "hoverNode";
            new_node.innerHTML = all_nodes[i].tagName;
            all_nodes[i].appendChild(new_node);
            new_node.addEventListener("click", function () {
                alert("id: " + all_nodes[i].tagName + "\ninnerHtml: " + new_node.innerHTML);
            });
        }
        i++;
    }
};