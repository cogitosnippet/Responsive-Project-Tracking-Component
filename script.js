document.body.style.position = 'relative';

let background = document.createElement('div');
let mobile_background = document.createElement('div');
let mobile_menu = document.getElementById('mobile-menu-id');
let mobile_menu_close = document.getElementById('mobile-menu-close-id');
let mobile_ham_menu = document.getElementById('mobile-ham-menu-id'); 


document.getElementById('container-id').append(background);
document.getElementById('container-id').append(mobile_background);

background.classList.add('desktop-background');
mobile_background.classList.add('mobile-background');

background.style.position = 'absolute';
background.style.height = '25rem';
background.style.top = '0';
background.style.right = '0';
background.style.width = '45rem';
background.style.background = 'hsl(207, 33%, 95%)';
background.style.borderBottomLeftRadius = '4rem';
background.style.zIndex = '-1';

mobile_background.style.position = 'absolute';
mobile_background.style.height = '26rem';
mobile_background.style.top = '0';
mobile_background.style.right = '0';
mobile_background.style.width = '10rem';
mobile_background.style.background = 'hsl(207, 33%, 95%)';
mobile_background.style.borderBottomLeftRadius = '4rem';
mobile_background.style.zIndex = '-1';




mobile_menu.addEventListener('click',()=>{
  mobile_menu.style.display = 'none';
  mobile_menu_close.style.display = 'block';
  mobile_ham_menu.style.display = 'block';

})

mobile_menu_close.addEventListener('click',()=>{
  mobile_menu.style.display = 'block';
  mobile_menu_close.style.display = 'none';
  mobile_ham_menu.style.display = 'none';
})

