function hatuduMenu() {
  $.getJSON("data/menu.json", function (data) {
    let menu = data.menu;
    //  uza loop each atu lop object iha json
    $.each(menu, function (i, data) {
      $("#menuSira").append(
        '<div class="col-md-4 mb-3"><div class="card"><img src="img/menu/' +
          data.gambar +
          '" class="card-img-top"/><div class="card-body"><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deskripsi +
          '</p><div class="card-body"><h5 class="card-title"> USD ' +
          data.harga +
          '</h5><a href="#" class="btn btn-primary">Hola Agora</a></div></div></div> </div>'
      );
    });
  });
}
// bolu function
hatuduMenu();

// halo pa h2 bazeia ba nia kategori nebe klik
// foti list nia class no tau function
$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  // halokon klas active atu nia labele mutin
  // kusus this ah li nebe klik mak aumnta class aktive atu nia kor mutin
  $(this).addClass("active");
  // halo par h2 nia sesuai txt kategori nebe klik
  // halo var foun no li nebe klik ne foti nia text kah html no simpan ba h2 laran
  let kategori = $(this).html();
  // simpan a iha h2 laran
  $("#judulMenu").html(kategori);
  // <ikus> akalkan atu bainhira nia klik fali menu hotu nebe nia ketegorialaiha json nia bele mosu kategori hotu
  if (kategori == "Menu sira hotu") {
    $("#menuSira").html("");
    hatuduMenu();
    // return par nia lalika halao seluk
    return;
  }

  // halo par klik mos element mosu deit azeia ba nia kategori nebe klik
  // bolu json fali
  $.getJSON("data/menu.json", function (data) {
    // foti menu
    let menu = data.menu;
    // halo var mamuk orsida mak aumnta bainira nia loop
    let content = "";
    // looping fali
    $.each(menu, function (i, data) {
      // uza logika ba nia mosu bazeia ba nia kategorai
      // tamba kategori ihs json ne letra kik hotu maibe iha html boot hotu entau paksa htm par kik hotu lai
      if (data.kategori == kategori.toLowerCase()) {
        // foin tampil no aumnta ba content mamuk nebe halo antes ona
        content +=
          '<div class="col-md-4 mb-3"><div class="card"><img src="img/menu/' +
          data.gambar +
          '" class="card-img-top"/><div class="card-body"><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deskripsi +
          '</p><div class="card-body"><h5 class="card-title"> USD ' +
          data.harga +
          '</h5><a href="#" class="btn btn-primary">Hola Agora</a></div></div></div> </div>';
      }
    });
    // simpan iha tampilan layar
    $("#menuSira").html(content);
  });
});
