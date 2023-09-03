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


//Typescriptは以下のようになる。
// $(function () {
//   // ページ内スクロール
//   const navHeight: number = $(".header").outerHeight();

//   $('a[href^="#"]').on("click", function () {
//     const href: string = $(this).attr("href") || "";
//     const target: JQuery<HTMLElement> = $(href === "#" || href === "" ? "html" : href);
//     const position: number = target.offset()?.top - navHeight || 0;
//     $("html, body").animate({ scrollTop: position }, 350, "swing");
//     return false;
//   });

//   // ページトップ
//   $("#js-page-top").on("click", function () {
//     $("body,html").animate({ scrollTop: 0 }, 300);
//     return false;
//   });

// });
