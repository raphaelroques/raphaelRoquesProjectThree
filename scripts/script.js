//create an array to hold all random image urls
const images = [
    './images/image1.jpg',
    './images/image2.jpg',
    './images/image3.jpg',
    './images/image4.jpg',
    './images/image5.jpg',
    './images/image6.jpg',
    './images/image7.jpg',
    './images/image8.jpg',
    './images/image9.jpg',
    './images/image10.jpg'
    
];

var sound1 = new Audio('./audio/sound1.mp3');
var sound2 = new Audio('./audio/sound2.mp3');
var sound3 = new Audio('./audio/sound3.mp3');
var sound4 = new Audio('./audio/sound4.mp3');



let credits = 2;
let round = 0;
  
$('.page-container').hide();  
$('.btn-stop').hide();
  
  $(document).ready(function(){

    // display the credits
    $('.btn-credits').html(`YOUR CREDITS: <span class="digital">${credits}</span>`);

    $('.btn-play').on('click',function(){
      $('.welcome').hide();
      $('.page-container').show();
      $('.btn-play').hide();
      $('.btn-stop').show();
        
        credits--;
        round++;

      $('.btn-round-container').html(`<button class="btn-round"></button>`);
      $('.btn-round').html(`ROUND: <span class="digital">${round}</span>`);
      $('.btn-credits').html(`YOUR CREDITS: <span class="digital">${credits}</span>`);

      $('#random-image-1').attr('src','./images/gif1.gif');
      $('#random-image-2').attr('src','./images/gif2.gif');
      $('#random-image-3').attr('src','./images/gif3.gif');
      
      
  
    });

    $('.btn-stop').click(function(){
      $('.btn-play').show();
      $('.btn-stop').hide();
      

      let image_url_1 = images[Math.floor(Math.random() * 10)];
      $('#random-image-1').attr('src',image_url_1);
      
      let image_url_2 = images[Math.floor(Math.random() * 10)];
      $('#random-image-2').attr('src',image_url_2);
  
      let image_url_3 = images[Math.floor(Math.random() * 10)];
      $('#random-image-3').attr('src',image_url_3);
  

      if (image_url_1===image_url_2 && image_url_1===image_url_3 && image_url_1===images[8]){
        credits+=15;
        sound4.play();
        $('.btn-credits').html(`YOUR CREDITS: <span class="digital">${credits}</span>`);
        $('.btn-paid-container').html(`<button class='btn-paid'>WINNER PAID: <span class="digital">15</span></button>`)
      } else if (image_url_1===image_url_2 && image_url_1===image_url_3){
        credits+=10;
        sound3.play();
        $('.btn-credits').html(`YOUR CREDITS: <span class="digital">${credits}</span>`);
        $('.btn-paid-container').html(`<button class='btn-paid'>WINNER PAID: <span class="digital">10</span></button>`);
      } else if (image_url_1===image_url_2 && image_url_1===images[8] || image_url_2===image_url_3 && image_url_2===images[8] || image_url_1===image_url_3 && image_url_1===images[8]){
        credits+=5;
        sound2.play();
        $('.btn-credits').html(`YOUR CREDITS: <span class="digital">${credits}</span>`);
        $('.btn-paid-container').html(`<button class='btn-paid'>WINNER PAID: <span class="digital">05</span></button>`);
      } else if (image_url_1===image_url_2 || image_url_1===image_url_3 || image_url_2===image_url_3){
        credits+=2;
        sound1.play();
        $('.btn-credits').html(`YOUR CREDITS: <span class="digital">${credits}</span>`);
        $('.btn-paid-container').html(`<button class='btn-paid'>WINNER PAID: <span class="digital">02</span></button>`);
      // } else if (image_url_1===images[8] || image_url_2===images[8] || image_url_3===images[8]){
      //   credits++;
      //   $('.btn-credits').html(`YOUR CREDITS: <span class="digital">${credits}</span>`);
      //   $('.btn-paid-container').html(`<button class='btn-paid'>WINNER PAID: <span class="digital">01</span></button>`);
      } else {
        $('.btn-credits').html(`YOUR CREDITS: <span class="digital">${credits}</span>`);
        $('.btn-paid-container').html(`<button class='btn-paid'>WINNER PAID: <span class="digital">00</span></button>`);
      } 
      
      
      if(credits === 0 ){
        credits +=2;
        $('.btn-play').hide();
        $('.btm-stop').hide();
        // CODE A REVOIR !!!!!!!
        $('.welcome').html(`<h2>GAME OVER</h2>`).show();
        $('.welcome').html(`<button class='btn-addCredits'>BUY MORE CREDITS</button>`).on('click', function(){
          $('.btn-addCredits').hide();
          console.log(`check1 ${credits}`)
          
          console.log(`check2 ${credits}`)
          $('.btn-credits').html(`YOUR CREDITS: <span class="digital">${credits}</span>`);
          $('.btn-play').show();
          console.log(`check3 ${credits}`)
        });
        console.log(`check4 ${credits}`)
      };
      console.log(`check5 ${credits}`)


      
    });
    console.log(`check6 ${credits}`)

    

  });



  

  