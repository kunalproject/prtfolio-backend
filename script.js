let flag =0;
let len =document.getElementsByClassName("slide").length;
slideshow(flag);

document.getElementById("prev").addEventListener("click",function(){
    slideclose(flag);
    if(flag>0){
        flag--;

    }
    else{
        flag=len-1
    }
    slideshow(flag)
})
document.getElementById("next").addEventListener("click",function(){
    slideclose(flag);
    if(flag<len-1){
        flag++;

    }
    else{
        flag=0;
        

    }
    slideshow(flag)
})

function slideshow(num){
    let slides =document.getElementsByClassName("slide");
    slides[num].style.display="block";


}
function slideclose(num){
    let slides = document.getElementsByClassName("slide");
    slides[num].style.display="none";

}
document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form data
    const formData = {
        "name": document.getElementById('name_user').value,
        "mail": document.getElementById('email').value,
        "msg": document.getElementById('message').value
    };
    console.log("form data is ", formData)

    try {
        // Send POST request
        const response = await fetch('https://portfolio-backend-1-bn70.onrender.com/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData) // Convert form data to JSON
        });

        // Check if the response is successful
        if (response.ok) {
            const result = await response.json();
            alert('Form submitted successfully!');
            console.log('Response:', result);
        } else {
            throw new Error('Form submission failed!');
        }
    } catch (error) {
        alert(error.message);
        console.error('Error:', error);
    }
});

async function get_leetcode_data(){
try{
    const response= await fetch('https://leetcode-api-faisalshohag.vercel.app/kunalgambhir210',{
        method:'GET',
        headers: {
        'Content-Type': 'application/json'
         }
    
    });

    const leetcode_obj = await response.json()
    
     const stats={
       "total":( leetcode_obj.totalSolved),
       "easy":( leetcode_obj.easySolved),
       "medium": (leetcode_obj.mediumSolved),
       "hard": (leetcode_obj.hardSolved)
    



    }
    console.log("stats is ", stats)
    return stats;
    
}
catch(err){
console.log("error occured ");
return err
}
}

 get_leetcode_data().then((stats)=>{
    var easy_ques=stats.easy ,hard_ques=stats.hard,medium_ques=stats.medium;

     var xValues = ["easy", "medium", "hard"];
    var yValues = [easy_ques,medium_ques,hard_ques];


    var barColors = [
        "#3385ff",
        "orange",
        "red"
    ];

    new Chart("myChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                Response:true
            }
        }
    });
      document.getElementById('easy').style.display="inline"
    let item =document.createElement("h3");
    item.style.display="inline"
item.textContent=stats.easy|| "coult not found";
document.getElementById('easy').appendChild(item)

      document.getElementById('medium').style.display="inline"
    let item1 =document.createElement("h3");
    item1.style.display="inline"
item1.textContent=stats.medium|| "coult not found";
document.getElementById('medium').appendChild(item1)

      document.getElementById('hard').style.display="inline"
    let item2 =document.createElement("h3");
    item2.style.display="inline"
item2.textContent=stats.hard|| "coult not found";
document.getElementById('hard').appendChild(item2)


 })

 // side bar click handle 
 const side =document.getElementById("side-bar").addEventListener('click',()=>{
    var dis = document.getElementById("nav-items").style.display;
   
 document.getElementById("nav-items").style.display = ( dis==="block")?"none":"block";
 dis = document.getElementById("nav-items").style.display;
//   if(dis==="block"){
//     document.getElementById("nav-items").style.margin="30px"
//   }

 document.getElementById("side-bar").style.display="none"
  document.getElementById("side-close").style.display="block"
 })
 // side close handle 
 const side_close =document.getElementById("side-close").addEventListener('click',()=>{
    var dis = document.getElementById("nav-items").style.display;
   
 document.getElementById("nav-items").style.display = ( dis==="block")?"none":"block";

//   if(dis==="block"){
//     document.getElementById("nav-items").style.margin="30px"
//   }

 document.getElementById("side-close").style.display="none"
  document.getElementById("side-bar").style.display="block"
 })


    // console.log("easy medium hard ares ", easy_ques,hard_ques,medium_ques)



    