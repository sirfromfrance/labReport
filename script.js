const nav = document.getElementsByTagName("nav")[0];
const sidebar = document.getElementsByTagName("aside")[0];
const contentSpace = document.getElementById("content-space");

fetch("structure.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("somthing went wrong with json structure");
    }
    return response.json();
  })
  .then((jsonData) => {
    fillNav(jsonData);
  })
  .catch((error) => {
    let navText = document.createElement("button");
    navText.innerText = error;
    navText.style.width = "100%";
    nav.appendChild(navText);
  });


  function fillNav(data) {
    Object.entries(data).forEach(function ([button_id, button_data]) {
      let navButton = document.createElement("button");
      navButton.id = button_id;
      navButton.innerText = button_data["name"];
      nav.appendChild(navButton);
      navButton.onclick = function () {
        sidebar.innerHTML = "";
        Object.entries(button_data["sections"]).forEach(function ([section_name, filename]) {
          let asideButton = document.createElement("button");
          asideButton.innerHTML = section_name;
          sidebar.append(asideButton);
          asideButton.onclick = function () {
            const full_path = button_data["path"] + filename;
            fetch(full_path)
              .then(response => {
                if (!response.ok) {
                  throw new Error('something went wrong while uploading the file')
                }
                return response.text();
              })
              .then(htmlData => {
                document.getElementById("content-space").innerHTML = htmlData;
              })
              .catch(error => {
                document.getElementById("content-space").innerHTML = error;
              })
          }
        })
      }
    });
  }
  
