var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function() {
    RoomsView.$select.append("<option>" + Rooms + "</option>");
  }

};

$( '#rooms button' ).click(function() {
  RoomsView.renderRoom(); 
});

