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
let service2 = document.getElementById('service2');
let service3 = document.getElementById('service3');
let descp=document.getElementById('description')
let count1 = 0;
let count2 = 0;
let count3 = 0;

service1.addEventListener('click',function(){
    let description = document.createElement('div');
    description.className='divitems';
    description.innerText=`Website Building
    We build the best in design class and fully responsive website with 3 months free trial(that includes the hosting and domain on 0 cost),you can just try it, because try isn't paid.`;
    if(count1 == 0){
        descp.appendChild(description);
    }
    count1=count1+1;
});
service2.addEventListener('click',function(){
    let description = document.createElement('div');
    description.className='divitems';
    description.innerText=`Programming Solutions
            We give the programming solutions for the competetive programmers based on the languages c++.This will help you in maintaing your ranks on the portals lik GFG, Hackerrank, Hackerearth,etc.`;
    if(count2 == 0){
        descp.appendChild(description);
    }
    count2=count2+1;
});
service3.addEventListener('click',function(){
    let description = document.createElement('div');
    description.className='divitems';
    description.innerText=`Special Talks
    This is for one to one mentorship, first 20 minutes are free. You can ask your queries to me.`;
    if(count3 == 0){
        descp.appendChild(description);
    }
    count3=count3+1;
});
// Contact page
// Response from the server