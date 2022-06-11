let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

// window.localStorage.clear();

lis.foreach((li) => {
  li.addEventListener("click", (e) => {
    //   console.log(e.currentTarget.dataset.color);
    // remove Active classe from all Lis
  });
});

if (window.localStorage.getItem("color")) { // If there is color in local storage
  exp.style.backgroundColor = e.currentTarget.dataset.color;
}else{ // If no color in local storage
    console.log("No")
}

lis.foreach("No");
}

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        //console.log(e.currentTarget.dataset.color);
        // remove Active classe from all Lis

    })
});