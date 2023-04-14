// 버튼 0 누르면
// 모든 버튼에 붙은 오렌지 클래스 제거
// orange 클래스추가
// 모든 디브에 show 클래스 제거
// 디브 0에 show 클래스 추가
var 버튼 = $(".tab-button");

//반복문으로 구현하기
// for (let i = 0; i < $("li").length; i++) {
//   버튼.eq(i).on("click", function () {
//     탭열기(i);
//   });
// }

function 탭열기(숫자) {
  버튼.removeClass("orange");
  버튼.eq(숫자).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(숫자).addClass("show");
}

//이벤트 버블링을 활용해서 구현하기
const listBtn = document.querySelector("ul");
const tabOne = document.querySelectorAll("li")[0];
const tabTwo = document.querySelectorAll("li")[1];
const tabThree = document.querySelectorAll("li")[2];

//함수로 축약하기
// listBtn.addEventListener("click", (e) => {
//   if (e.target == tabOne) {
//     탭열기(0);
//   }
//   if (e.target == tabTwo) {
//     탭열기(1);
//   }
//   if (e.target == tabThree) {
//     탭열기(2);
//   }
// });

//dataset을 활용해서 구현하기 (반복문 말고)
listBtn.addEventListener("click", (e) => {
  탭열기(e.target.dataset.id);
});
