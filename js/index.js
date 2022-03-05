console.log("Script running....");
let footer = document.querySelector('.footerdiv');
document.querySelector('.cros').style.display = 'none';
document.querySelector('.hamburger').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');//toggle: agr .sidebar class ke andr agr sidebarGo lga hua h to use hta dega nahi to lga dega on an each click.
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'; 
        document.querySelector('.cros').style.display = 'none';
    }
    else{
        setTimeout(() => {
            document.querySelector('.cros').style.display = 'inline'; 
        }, 400);//set time delay in showing
        document.querySelector('.ham').style.display = 'none';
    }
}); 

// services page working js:
let service1 = document.getElementById('service1');
let descp=document.getElementById('description')
let count = 0;
service1.addEventListener('click',function(){
    let description = document.createElement('p');
    description.innerText=`Website Building
    We build the best in design class and fully responsive website with 3 months free trial(that includes the hosting and domain on 0 cost),you can just try it, because try isn't paid.`;
    if(count == 0){
        descp.appendChild(description);
    }
    count=count+1;
    console.log(count);
});