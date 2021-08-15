const groups = document.getElementById("group_select");
const checkValue = groups.options[groups.selectedIndex].value;
const checkText = groups.options[groups.selectedIndex].text;

groups.addEventListener("change", (e) => {
    const value = e.target.value;
    const text = groups.options[groups.selectedIndex].text;
   
    if (value) {
      document.getElementById("add-to-group").classList.add("active");
      document.getElementById("submit-to-group").classList.add("active");
    } 

});