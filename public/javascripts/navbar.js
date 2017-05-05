$( document ).ready( function() {

  let pathname = window.location.pathname.split('/')[1] || 'projects';
  pathname = '.'+pathname
  $(pathname).addClass( 'active' )
  $( '.navbar-item' ).click( function( event ) {
     let clickedItem = $(event.target);
     $( '.navbar-item.active' ).removeClass( 'active' )
     clickedItem.parent().addClass( 'active' )
  })
})
