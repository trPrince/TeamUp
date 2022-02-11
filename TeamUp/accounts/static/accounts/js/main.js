// window.onload = function(){
// 	var getNavi = document.getElementById('navigation');

// 	var mobile = document.createElement("span");
// 	mobile.setAttribute("id","mobile-navigation");
// 	getNavi.parentNode.insertBefore(mobile,getNavi);

// 	document.getElementById('mobile-navigation').onclick = function(){
// 		var a = getNavi.getAttribute('style');
// 		if(a){
// 			getNavi.removeAttribute('style');
// 			document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile/mobile-menu.png)';
// 		} else {
// 			getNavi.style.display='block';
// 			document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile/mobile-close.png)';
// 		}
// 	};
// 	var getElm = getNavi.getElementsByTagName("LI");
// 	for(var i=0;i<getElm.length;i++){
// 		if(getElm[i].children.length>1){
// 			var smenu = document.createElement("span");
// 			smenu.setAttribute("class","mobile-submenu");
// 			smenu.setAttribute("OnClick","submenu("+i+")");
// 			getElm[i].appendChild(smenu);
// 		};
// 	};
// 	submenu = function (i){
// 		var sub = getElm[i].children[1];
// 		var b = sub.getAttribute('style');
// 		if(b){
// 			sub.removeAttribute('style');
// 			getElm[i].lastChild.style.backgroundImage='url(images/mobile/mobile-expand.png)';
// 			getElm[i].lastChild.style.backgroundColor='rgba(121, 101, 102, 0.91)';
// 		} else {
// 			sub.style.display='block';
// 			getElm[i].lastChild.style.backgroundImage='url(images/mobile/mobile-collapse.png)';
// 			getElm[i].lastChild.style.backgroundColor='rgba(204, 60, 104, 0.91)';
// 		}
// 	};
// };

// function myfunction(){
//     var email= document.forms[][];
//     var psw = document.getElementById("psw");
//     var psw_repeat = document.getElementById("psw-repeat");

    

// }

// if(email!=""&&psw!=""&&psw_repeat!=""){
//     document.getElementById("signupbnt").onclick = function () {
//     location.href = "profileComplete.html";
// };

// }

// document.getElementById("hbutton").onclick = function () {
//     location.href = "profileComplete.html"
// };

// function myFunction() {
//     var x = document.getElementById("date").value;
//     document.getElementById("demo").innerHTML = x;
//   }

  
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

