var currentList = ["adobestock", "thuman"];
var currentId = 0;

function ChangeData(idx){
    var li_list = document.getElementById("sim-view-ul").children;
    console.log(idx);
    console.log(li_list);

    for (var i = 0; i < li_list.length; i++) {
        li_list[i].classList.remove("active");
    }

    li_list[idx].classList.add("active");

    currentId = idx;

    for (var i = 0; i < currentList.length; i++) {
        var section = document.getElementById(currentList[i]);
        section.style.display = 'none';
    }

    var section = document.getElementById(currentList[currentId]);
    section.style.display = 'block';
}
