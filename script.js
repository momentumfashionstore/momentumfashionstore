//form submission
document.getElementById("lead-form")
.addEventListener("submit",function(e) {
    e.preventDefault();
// get form values  
const firstname = this.elements[0].value;
const lastname = this.elements[1].value;
const email = this.elements[2].value;
const bestpicks  = this.elements[2].value

//in real scenario,you would send this data to a server
console.log("Lead Captured:") (firstname,lastname,email,bestpicks)

//show configuration
alert("Thank you for your interest! We will contact you shortly with our fashion details")

// Reset form
this.reset()

}
)

// show popup after 5 seconds 
setTimeout(function (){
document.getElementById("email-popup").style.display="flex"
},5000)

//close popup when X is clicked
document.querySelector(".close-btn").addEventListener("click",function(){
    document.getElementById("email-popup").style.display="none";

})

// close when clicking outside content  
document.getElementById("email-popup").addEventListener("click",function(e){
    if(e.target===this){
        this.style.display="none";
    }
});
 
