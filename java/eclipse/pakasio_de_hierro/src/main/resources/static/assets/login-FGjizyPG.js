import{n as l}from"./navbar-app-BsLDXIwH.js";import{d as m}from"./domainName-BqwKdE-m.js";const c=async r=>{const s=`${m()}/api/v1/login`,a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},t=await fetch(s,a);if(t.status!==200)throw(await t.json()).message;const e=await t.json();return console.log(e),e};document.querySelector("#navbar-app").innerHTML=l();const n=document.forms.loginForm;n.addEventListener("submit",async r=>{r.preventDefault();const s=n.elements.email,a=n.elements.password;s.value=s.value.trim().toLowerCase();const t={email:s.value,password:a.value};try{const e=await c(t),o={user:e,isAdmin:e.roles.some(i=>i.name==="ADMIN"),expiration:0};localStorage.setItem("userSesion",JSON.stringify(o)),n.reset(),alert("Hola "+e.firstName),o.isAdmin?window.location.href="/src/pages/admin/admin.html":window.location.href="/index.html"}catch(e){const o=document.getElementById("post-error-message");o.innerHTML=e,o.style.display="block",setTimeout(()=>o.style.display="none",5e3)}});
