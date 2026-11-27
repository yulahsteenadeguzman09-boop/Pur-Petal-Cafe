<script> 
function showPage(pageId, clickedBtn) { 
  document.querySelectorAll('.page').forEach(function (page) { 
    page.classList.remove('active'); 
  }); 
  document.querySelectorAll('.nav-btn').forEach(function (btn) { 
    btn.classList.remove('active'); 
  }); 
  document.getElementById(pageId).classList.add('active'); 
  clickedBtn.classList.add('active'); 
  document.body.classList.toggle('home-active', pageId === 'home');
} 
</script> 
