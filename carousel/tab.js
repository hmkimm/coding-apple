// 버튼 0 누르면
// 모든 버튼에 붙은 오렌지 클래스 제거
// orange 클래스추가
// 모든 디브에 show 클래스 제거
// 디브 0에 show 클래스 추가

$(".tab-button")
  .eq(0)
  .on("click", function () {
    $(".tab-button").removeClass("orange");
    $(".tab-button").eq(0).addClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-content").eq(0).addClass("show");
  });

$(".tab-button")
  .eq(1)
  .on("click", function () {
    $(".tab-button").removeClass("orange");
    $(".tab-button").eq(1).addClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-content").eq(1).addClass("show");
  });

$(".tab-button")
  .eq(2)
  .on("click", function () {
    $(".tab-button").removeClass("orange");
    $(".tab-button").eq(2).addClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-content").eq(2).addClass("show");
  });
