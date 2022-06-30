// app.js

// $(function ~ ... (제이 쿼리 함수)




// 처음에 모든 이미지가 안보이게 페이드 처리 fade-out
$(function () {
  $('#slider img').fadeOut(0);

  // 맨 처음 시작할때의 이미지를 보이게 fade-in
  $('#slider img').eq(0).fadeIn(0);


  // (제이 쿼리 함수 안에 변수를 넣으면 지역 변수가 된다.)


  /* 이전, 다음 이미지 보기
  let imgCount = 0;(현재 지역 변수) 이미지 번호 --> 전역 변수로(밑의 function changeSlider(num)... 항목으로)*/

  $('.next').click(function () {
    if (imgCount < 2) {
      imgCount++; // 이미지 번호 증가
      console.log(imgCount);
      changeSlider(imgCount);
    };
  });

  $('.pre').click(function () {
    if (imgCount > 0) {
      imgCount--; // 이미지 번호 감소
      console.log(imgCount);
      changeSlider(imgCount);
    };
  });



  // 자동 재생 -
  setInterval(function () {
    imgCount++;
    if (imgCount > 2) { // 2보다 크면 0으로 돌아가라(무한 반복 / return)
      imgCount = 0
    }
    console.log(imgCount);
    changeSlider(imgCount);
  }, 5000); // ex 몇 초마다 재생하라고 주문한다면 --> 옆의 있는 숫자 값을 변경한다.


  // 맨처음 함수 만들기 (제이쿼리 함수 안에 적는다.) - indicator 초기화(시작)
  updateIndicator(imgCount);

});


let imgCount = 0; /* 현재 전역 변수 상태 (함수 밖에 위치하기 때문.) 0 = 이미지 번호 */

/* 하단 인디케이터(indicator > a) 버튼을 누르면 
      a 안에 (onclick="changeSlider(num); <= 여기서(html에서 써야 함)
        "num" 쓸때 번호를 달아줘야 오류가 안난다.)
          -> 해당 이미지 출력 (번호 누름 -> 이미지 출력)*/
function changeSlider(num) {
  // imgCount = num 이미지번호 업데이트(indicator, arrow 공통) <= imgCount의 정보를 알아야 한다. (상태관리)
  imgCount = num;
  $('#slider img')
    .fadeOut()      /* 페이드-아웃이 되면서 페이드-인이 된다. */
    /*.eq(num) = 현재 이미지*/
    .eq(num).fadeIn();
  // indicator 업데이트
  updateIndicator(imgCount);
};

// imgCount 번호 = indicator 번호(스타일 변경)
function updateIndicator(num) {
  // indicator 중복 스타일 방지를 위한 스타일 초기화 (원본색 먼저 넣는다.)
  $('.indicator a').css('color', 'white');

  $('.indicator a')
    .eq(imgCount)
    .css('color', 'red');
};

