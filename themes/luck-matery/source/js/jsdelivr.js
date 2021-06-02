var name = "0cmg";
var repository = "cmg.githua.io";
if(document.domain != 'localhost'){
    for (var key in document.getElementById("articleContent").getElementsByTagName('img')){
        if (isNaN(key)){
            break;
        }
        document.getElementById("articleContent").getElementsByTagName('img')[key].src = document.getElementById("articleContent").getElementsByTagName('img')[key].src.replace(document.domain,"cdn.jsdelivr.net/gh/" + name + "/" + repository)
    }
}