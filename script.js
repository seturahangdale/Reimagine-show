const mamaearthBestSellers = [
  {
      name: "Onion shampoo",
      price: "₹507",
      ratings: 5.0,
      reviews: 233,
      imageUrl: "s 1.png",
      bgcolor:"##CBE59E",
      circlecolor:"#f7bb42"
  },
  {
      name: "Rosemary Hair care kit-650 ml",
      price: "₹782",
      ratings: 5.0,
      reviews: 108,
      imageUrl: "s2.png",
      bgcolor:"#c4a591",
      circlecolor:"#8e6b54"
  },
  {
     name:"Anti-Hair fall spa",
     price:"₹782",
     ratings:"4.8",
     reviews:"563",
     imageUrl:"s 3.png",
    
  },
  {
    name:"Ubtan face wash-150ml(pack of 2)",
    price:"₹563",
    ratings:"4.8",
    reviews:"878",
    imageUrl:"s4.png",
 },
 {
  name:"Vit C Daily glow sunscreen with vitamin C & Turmeric for Sun protection & Glow-50g (pack of 2)",

  price:"₹525",
  ratings:"4.9",
  reviews:"299",
  imageUrl:"s 5.png",
  },
  {
   name:"Ultra light indian sunscreen with carrot Seed,Turmeric and SPF 50 PA+++ -80ml (pack of 2)",
   price:"₹748",
   ratings:"4.8",
   reviews:"192",
   imageUrl:"s 6.png",
 },
 {
   name:"Aloe gentle face wash with Aloe & Glycerin for normal to Sensitive skin-150ml (pack of 2)",

   price:"₹575",
   ratings:"4.9",
   reviews:"376",
   imageUrl:"s 7.png",
 },
 {
   name:"Hibiscus Hair Revival kit",
   price:"₹756",
   imageUrl:"s 9.png",
 },
 {
   name:"Hibiscus damage Repair Hair kit",
   price:"₹783",
   imageUrl:"s 8.png",

 },
 {
   name:"Rosemarry Anti-Hair fall shampoo with Rosemarry & Methi Dana for Reducing Hair loss & breakage-60ml",
   price:"₹503",
   imageUrl:"s 10.png",
 },
 {
   name:"Aloe vera gel with pure alowvera &vitamin E for skin and Hair-300ml",
   price:"₹479",
   ratings:"5.0",
   reviews:"75",
   imageUrl:"s 11.png",
 },
 {
   name:"Feather light liquid matte lipstick pack of 4 minis",
   price:"₹577",
   ratings:"5.0",
   reviews:"267",
   imageUrl:"s 12.png",
 },
 {
   name:"HydraGel Indian Sunscreen with Aloe Vera and Raspberry for Sun Protection - 50 g",
   price:"₹381",
   ratings:"4.8",
   reviews:"198",
   imageUrl:"./products image/best sellers/hydragel_indian_sunscreen_1-removebg-preview.png",
 },
 {
   name:"",
   price:"",
   ratings:"",
   reviews:"",
   imageUrl:"./products image/best sellers/",
 },
 {
   name:"",
   price:"",
   ratings:"",
   reviews:"",
   imageUrl:"./products image/best sellers/",
 },
 {
   name:"",
   price:"",
   ratings:"",
   reviews:"",
   imageUrl:"./products image/best sellers/",
 },
 {
   name:"",
   price:"",
   ratings:"",
   reviews:"",
   imageUrl:"./products image/best sellers/",
 },
  {
     name:"",
     price:"",
     ratings:"",
     reviews:"",
     imageUrl:"./products image/best sellers/",
  },
];


var container=document.querySelector(".page2 .container")
var card=document.querySelector(".card")
var imgbx=document.querySelector(".imgbx")
var img=document.querySelector("img")
var contentbx=document.querySelector(".contentBx")
var rating=document.querySelector(".rating")
var review=document.querySelector(".review")
var btn=document.querySelector("button")

var card=""

mamaearthBestSellers.forEach(function(value){
card+=`
 <div class="card">
          <div class="imgBx">
            <img src="${value.imageUrl}">
          </div>
          <div class="contentBx">
            <h2>${value.name}</h2>
            <div class="rating">
              <h3>Rating :</h3>
              <span>${value.ratings}</span>
              <i class="ri-star-s-fill color-white"></i>
            </div>
            <div class="review">
              <h3>Review :${value.reviews}</h3>
            </div>
            <button
          class="relative mt-2 py-[4px] px-4  font-medium text-base nded-full overflow-hidden bg-[#e6f7eb] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#beeaca] before:to-[#beeaca] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
        >
          ADD TO CART
        </button>
          </div>
        </div>
      </div> `
})

console.log(card)
container.innerHTML=card
