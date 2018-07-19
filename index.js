'use strict';

function thumbnailClicks(){ $('.thumbnail').on('click', function(event) { 
  let updateImg = $(this).find('img').attr('src'); 
  let updateAlt = $(this).find('img').attr('alt');

  $('.hero img').attr('src', updateImg).attr('alt', updateAlt);
});}

$(thumbnailClicks);