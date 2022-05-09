$(document).ready(function () {
  yil = 2021;
  code = "<option selected>Yıl Seçiniz...</option>";
  for (i = 0; i < 22; i++) {
    code += '<option value="' + yil + '">' + yil + "</option>";
    yil -= 1;
  }
  $("#year").html(code);
  $(document).ready(function () {
    var html_code = "";
    $.getJSON("static/json/Araclar.json", function (data) {
      html_code += '<option value="">Marka Seçiniz...</option>';
      $.each(data, function (key, value) {
        if (value.id == "Marka") {
          html_code +=
            '<option value="' + value.name + '">' + value.name + "</option>";
        }
      });
      $("#Marka").html(html_code);

      $(document).on("change", "#Marka", function () {
        var marka_id = $(this).val();
        if (marka_id != "") {
          var html_code = "";
          $.getJSON("static/json/Araclar.json", function (data) {
            html_code += '<option value="">Seri Seçiniz...</option>';
            $.each(data, function (key, value) {
              if ((value.id == "Seri") & (value.marka_id == marka_id)) {
                html_code +=
                  '<option value="' +
                  value.name +
                  '">' +
                  value.name +
                  "</option>";
              }
            });
            $("#Seri").html(html_code);
          });
        } else {
          $("#Seri").html('<option value="">Seri Seçiniz...</option>');
          $("#Model").html('<option value="">Model Seçiniz...</option>');
        }
      });
      $(document).on("change", "#Seri", function () {
        var seri_id = $(this).val();
        if (seri_id != "") {
          var html_code = "";
          $.getJSON("static/json/Araclar.json", function (data) {
            html_code += "<option selected>Model Seçiniz...</option>";
            $.each(data, function (key, value) {
              if (
                (value.id == "Model") &
                (value.marka_id == $("#Marka").val()) &
                (value.seri_id == seri_id)
              ) {
                html_code +=
                  '<option value="' +
                  value.name +
                  '">' +
                  value.name +
                  "</option>";
              }
            });
            $("#Model").html(html_code);
          });
        } else {
          $("#Seri").html('<option value="">Seri Seçiniz...</option>');
          $("#Model").html('<option value="">Model Seçiniz...</option>');
        }
      });
      $(document).on("change", "#Model", function () {
        var model_id = $(this).val();
        var marka_id = $("#Marka").val();
        var seri_id = $("#Seri").val();
        if (model_id != "") {
          var html_code = "";
          $.getJSON("static/json/Araclar.json", function (data) {
            html_code += "<option selected>Motor Gücü Seçiniz...</option>";
            $.each(data, function (key, value) {
              if (
                (value.id == "Motor_Gucu") &
                (value.marka_id == marka_id) &
                (value.seri_id == seri_id) &
                (value.model_id == model_id)
              ) {
                html_code +=
                  '<option value="' +
                  value.name +
                  '">' +
                  value.name +
                  " hp" +
                  "</option>";
              }
            });
            $("#Motor_Gucu").html(html_code);
          });
        } else {
          $("#Seri").html('<option value="">Seri Seçiniz...</option>');
          $("#Model").html('<option value="">Model Seçiniz...</option>');
        }
      });
      $(document).on("change", "#Motor_Gucu", function () {
        var model_id = $("#Model").val();
        var marka_id = $("#Marka").val();
        var seri_id = $("#Seri").val();
        var guc_id = $(this).val();
        if (guc_id != "") {
          var html_code = "";
          $.getJSON("static/json/Araclar.json", function (data) {
            html_code += "<option selected>Motor Hacmi Seçiniz...</option>";
            $.each(data, function (key, value) {
              if (
                (value.id == "Motor_Hacmi") &
                (value.marka_id == marka_id) &
                (value.seri_id == seri_id) &
                (value.model_id == model_id) &
                (value.guc_id == guc_id)
              ) {
                html_code +=
                  '<option value="' +
                  value.name +
                  '">' +
                  value.name +
                  " cc" +
                  "</option>";
              }
            });
            $("#Motor_Hacmi").html(html_code);
          });
        } else {
          $("#Seri").html('<option value="">Seri Seçiniz...</option>');
          $("#Model").html('<option value="">Model Seçiniz...</option>');
        }
      });
    });
  });
});
