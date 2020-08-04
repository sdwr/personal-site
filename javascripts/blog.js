document.body.onload = addPosts;



function addPosts() {
    const postsElement = document.getElementById("posts");
    let fileNamePrefix = "./posts/post_";
    let file = null;
    let index = 1;
    file = loadFile(fileNamePrefix + "" + index + ".txt")
    while(file) {
        let postDiv = document.createElement("div")
        postDiv.innerHTML = marked(file)
        postsElement.prepend(postDiv)
        index++
        file = loadFile(fileNamePrefix + "" + index + ".txt")
    }
}

function loadFile(filePath) {
    let result = null;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filepath, false);
    xmlhttp.send();
    if(xmlhttp.status==200) {
        result = xmlhttp.responseText;
    }
    return result;
}


