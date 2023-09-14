$(function () {

  //ページ内スクロール
  const navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 350, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });
});

// 要素を取得
const mvTitle = document.getElementById("mv-name");

// カーソルが要素に合わさったときのイベントリスナーを追加
mvTitle.addEventListener("mouseenter", () => {
  // ここで実行したいアクションを記述
  // 例: テキストを変更する
  mvTitle.innerText = "KONAMIONO";
});

// カーソルが要素から離れたときのイベントリスナーを追加
mvTitle.addEventListener("mouseleave", () => {
  // カーソルが離れたときのアクションを記述
  // 例: テキストを元に戻す
  mvTitle.innerText = "HELLO!";
});
