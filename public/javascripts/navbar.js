$( document ).ready( function() {

  let pathname = window.location.pathname;
  $( '.navbar-item' ).click( function( event ) {
     let clickedItem = $(event.target);
     $( '.navbar-item.active' ).removeClass( 'active' )
     clickedItem.parent().addClass( 'active' )
  })
})
