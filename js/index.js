/*header topNav 클릭하면 더 나오기*/
var tN =0;
function topN() {
    var topNs = document.getElementById("topNav_leftSub");
    
    if(tN==0) {
        topNs.style.opacity = '1';
        topNs.style.transform = "translateX(3px)";
        
        tN=1;
    } else {
        topNs.style.transform = "translateX(0px)";
        topNs.style.opacity = '0';
       
        tN=0;
    } 
}

/*대형네비 슬라이드 효과*/
$(function() {
	var gnb1 = 0;
	var gnb2 = 2;
	var gnb3 = 4;
	var gnb4 = 6;
	var gnb5 = 8;
	var gnb6 = 10;
	var gnb7 = 12;
	var $subAll = $('.mainNavSub_ul');
	//마이페이지
	$('.gnb li').eq(0).on('click',function(){
		if(gnb1==0) {	
			$subAll.css({
				display:'none'
			})
			$('.mainNavSub_ul').eq(0).css({
				display:'block'
			})
			$('.fixedDiv1').slideDown();
			gnb1=1;
			/*클릭두번해야하는거 방지*/
			gnb2=2;
			gnb4=6;
		} else {
			$('.fixedDiv1').slideUp();
			gnb1=0;
		}
	})
	//카드
	$('.gnb li').eq(1).on('click',function(){
		if(gnb2==2) {
			gnb2=3;
			/*클릭두번해야하는거 방지*/
			gnb1=0;
			gnb4=6;
			$subAll.css({
				display:'none'
			})
			$('.mainNavSub_ul').eq(1).css({
				display:'block'
			})
			$('.fixedDiv1').slideDown();
			
		} else {
			$('.fixedDiv1').slideUp();
			gnb2=2;
		}
	})
	//혜택
	$('.gnb li').eq(3).on('click',function(){
		if(gnb4==6) {
			gnb4=7;
			/*클릭두번해야하는거 방지*/
			gnb1=0;
			gnb2=2;
			$subAll.css({
				display:'none'
			})
			$('.mainNavSub_ul').eq(2).css({
				display:'block'
			})
			$('.fixedDiv1').slideDown();
			
		} else {
			$('.fixedDiv1').slideUp();
			gnb4=6;
		}
	})
	
	//닫기버튼
	$('.close_btn').on('click', function() {
		$('.fixedDiv1').slideUp();
			gnb1=0;
			gnb2=0;
	})
	
	
	
	var gnbnum = document.getElementById('gnbNumber');
	gnbnum.innerHTML=gnb1;
	var gnbnum = document.getElementById('gnbNumber2');
	gnbnum.innerHTML=gnb2;
})/*function*/


