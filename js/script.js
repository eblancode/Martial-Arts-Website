// Material Select Initialization
// $(document).ready(function() {
//     $(function() {
//         $('.selectpicker').selectpicker();
//     });
// });

function typing() {
    var input, filter, ul, li, a, i, txtValue, found;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("ma_UL");
    li = ul.getElementsByTagName("li");
    found = false;
    
    if(filter != "") {
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
              found = true;
          } else {
              li[i].style.display = "none";
          }
      }
      
      if (found) {
          ul.style.display = "";
      }
    }
    else {
        ul.style.display = "none";
    }
}