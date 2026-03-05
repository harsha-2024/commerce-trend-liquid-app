
(function(){
  const root = document.getElementById('cart-root');
  if(!root) return;
  const currency = root.getAttribute('data-currency')||'$';
  function line(item){
    return `<tr>
      <td>${item.title}</td>
      <td class="text-end">${currency}${item.price.toFixed(2)}</td>
      <td class="text-center">
        <button class="btn btn-sm btn-outline-secondary" data-dec="${item.id}">−</button>
        <span class="mx-2">${item.qty}</span>
        <button class="btn btn-sm btn-outline-secondary" data-inc="${item.id}">+</button>
      </td>
      <td class="text-end">${currency}${(item.price*item.qty).toFixed(2)}</td>
      <td class="text-center"><button class="btn btn-sm btn-link text-danger" data-del="${item.id}">Remove</button></td>
    </tr>`;
  }
  function render(){
    const items = JSON.parse(localStorage.getItem('cart')||'[]');
    const subtotal = items.reduce((a,b)=>a+b.price*b.qty,0);
    root.innerHTML = `
      <div class="table-responsive">
        <table class="table align-middle">
          <thead><tr><th>Item</th><th class="text-end">Price</th><th class="text-center">Qty</th><th class="text-end">Total</th><th></th></tr></thead>
          <tbody>${items.map(line).join('')}</tbody>
          <tfoot><tr><th colspan="3" class="text-end">Subtotal</th><th class="text-end">${currency}${subtotal.toFixed(2)}</th><th></th></tr></tfoot>
        </table>
      </div>`;
    document.dispatchEvent(new Event('cart:updated'));
  }
  function save(items){ localStorage.setItem('cart', JSON.stringify(items)); render(); }
  root.addEventListener('click', e=>{
    const items = JSON.parse(localStorage.getItem('cart')||'[]');
    const inc = e.target.closest('[data-inc]');
    const dec = e.target.closest('[data-dec]');
    const del = e.target.closest('[data-del]');
    if(inc||dec||del){ e.preventDefault(); }
    if(inc){ const id = inc.getAttribute('data-inc'); const it = items.find(x=>x.id===id); if(it){ it.qty++; save(items);} }
    if(dec){ const id = dec.getAttribute('data-dec'); const it = items.find(x=>x.id===id); if(it){ it.qty=Math.max(1,it.qty-1); save(items);} }
    if(del){ const id = del.getAttribute('data-del'); const idx = items.findIndex(x=>x.id===id); if(idx>-1){ items.splice(idx,1); save(items);} }
  });
  render();
})();
