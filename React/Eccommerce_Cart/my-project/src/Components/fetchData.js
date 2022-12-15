export const getData=async()=>{

let res=await fetch("  http://localhost:8080/products");
res=await res.json();
return res;

}