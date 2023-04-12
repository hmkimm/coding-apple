// 버튼 0 누르면
// 모든 버튼에 붙은 오렌지 클래스 제거
// orange 클래스추가
// 모든 디브에 show 클래스 제거
// 디브 0에 show 클래스 추가
var 버튼 = $(".tab-button");

for (let i = 0; i < $("li").length; i++) {
  버튼.eq(i).on("click", function () {
    버튼.removeClass("orange");
    버튼.eq(i).addClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-content").eq(i).addClass("show");
  });
}

// 버튼.eq(1).on("click", function () {
//   버튼.removeClass("orange");
//   버튼.eq(1).addClass("orange");
//   $(".tab-content").removeClass("show");
//   $(".tab-content").eq(1).addClass("show");
// });

// 버튼.eq(2).on("click", function () {
//   버튼.removeClass("orange");
//   버튼.eq(2).addClass("orange");
//   $(".tab-content").removeClass("show");
//   $(".tab-content").eq(2).addClass("show");
// });
