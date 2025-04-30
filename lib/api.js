export const sendArrangeVisitForm = async(data)=>fetch('/api/arrangevisit',  {
method:'POST',
body:JSON.stringify(data),
headers:{
    "Content-Type":"aplication/json", 
    Accept:"application/json",
}
}); 