$(document).ready(function () {
  $("#nomor").mask("000-00-00000");
  $("#rata_rapot").mask("00,00");
  $("#location").mask("000");
  $("#classD").mask("D0");
  $("#classP").mask("P0");
  $("#classR").mask("R0");
  $("#classT").mask("T0");
  $("#classQ").mask("Q0");
});

function lettersOnly(input) {
  var regex = /[^a-z]/gi;
  input.value = input.value.replace(regex, " ");
}

// $("#submit").click(function () {
//   var name = $("#name").val();
//   var nomor = $("#nomor").val();
//   var kelas = $("#class").val();
//   var location = $("#location").val();
//   var inlineRadio1 = $("#inlineRadio1").val();
//   var inlineRadio2 = $("#inlineRadio2").val();

//   if (name == "" || nomor == "" || kelas == "" || location == "" || inlineRadio1 == "" || inlineRadio2 == "") {
//     swal({
//       title: "Jawaban Tidak Boleh Kosong!",
//       text: "Silahkan Periksa Kembali!",
//       icon: "warning",
//       button: "Baik",
//     });
//   } else {
//     swal({
//       title: "Jawaban Berhasil Dikirim!",
//       icon: "success",
//       button: "Alhamdulillah",
//     });
//   }
// });
