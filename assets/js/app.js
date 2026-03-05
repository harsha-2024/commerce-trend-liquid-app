
(function(){
  const $ = (sel,ctx=document)=>ctx.querySelector(sel);
  const $$ = (sel,ctx=document)=>Array.from(ctx.querySelectorAll(sel));
  function toast(msg){
    const box = document.getElementById('toast');
    if(!box) return; const el = document.createElement('div');
    el.className='toast align-items-center text-bg-dark border-0 show mb-2';
    el.role='status'; el.ariaLive='polite';
    el.innerHTML=`<div class="d-flex"><div class="toast-body">${msg}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button></div>`;
    box.appendChild(el); setTimeout(()=>el.remove(),3000);
  }
  function updateCartBadge(){
    const badge = document.getElementById('cart-badge');
    const items = JSON.parse(localStorage.getItem('cart')||'[]');
    const n = items.reduce((a,b)=>a+b.qty,0); if(badge) badge.textContent=`Cart (${n})`;
  }
  document.addEventListener('click', e=>{
    const btn = e.target.closest('[data-add-to-cart]');
    if(btn){
      e.preventDefault();
      const id = btn.getAttribute('data-add-to-cart');
      const title = btn.getAttribute('data-title');
      const price = parseFloat(btn.getAttribute('data-price'))||0;
      const cart = JSON.parse(localStorage.getItem('cart')||'[]');
      const existing = cart.find(x=>x.id===id);
      if(existing) existing.qty+=1; else cart.push({id,title,price,qty:1});
      localStorage.setItem('cart', JSON.stringify(cart));
      toast(`Added “${title}” to cart`);
      updateCartBadge();
    }
  });
  updateCartBadge();
})();
