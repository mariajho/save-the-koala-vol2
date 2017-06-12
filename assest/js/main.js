/*tooltips*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})   

/*Modal*/
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

/*Modal-2*/
$('#myModal2').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

/*Modal3*/
$('#myModal3').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

/*carusel-collapsible*/
$('#myCollapsible').on('hidden.bs.collapse', function () {
	interval: 1000
})

/*colapso*/
$('.collapse').collapse()