
var showPic = false;

$(document).ready(function () {
    MenuCntlBtn();
    MenuCntlText();
});

function MenuCntlBtn() {

   $('#picTble').hide();
   $('#displayAction');

   $('#cntrlBtn').click(function () {
      if(!showPic){
          $('#picTble').show();
          showPic = true;
          MenuResetText();

      } else {
          $('#picTble').hide();
          showPic = false;
	  MenuResetText();
      }
   });

}

function MenuCntlText() {
   
   $('#c_side').hide();
   $('#x_side').hide();
   $('#y_side').hide();

   $('#r0_c0, #r0_c2, #r2_c0, #r2_c2').hover(function(){
      $('#c_side').show();
      $('#x_side').hide();
      $('#y_side').hide(); 
   });

   $('#r0_c1, #r2_c1').hover(function(){
      $('#c_side').hide();
      $('#x_side').show();
      $('#y_side').hide(); 
   });

   $('#r1_c0, #r1_c2').hover(function(){
      $('#c_side').hide();
      $('#x_side').hide();
      $('#y_side').show(); 
   });

}

function MenuResetText() {
   $('#c_side').hide();
   $('#x_side').hide();
   $('#y_side').hide();
}