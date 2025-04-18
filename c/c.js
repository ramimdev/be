var arCuMessages = ["Hi, I'm Rubel", "How can I help you", "You can share your problem with us", "We will try to solve it"];

var arCuLoop = false;

var arCuCloseLastMessage = false;

var arCuPromptClosed = false;

var _arCuTimeOut = null;

var arCuDelayFirst = 2000;

var arCuTypingTime = 2000;

var arCuMessageTime = 4000;

var arCuClosedCookie = 0;

var arcItems = [];

window.addEventListener('load', function() {

  arCuClosedCookie = arCuGetCookie('arcu-closed');

  jQuery('#arcontactus').on('arcontactus.init', function() {

    if (arCuClosedCookie) {

      return false;

    }

    arCuShowMessages();

  });

  jQuery('#arcontactus').on('arcontactus.openMenu', function() {

    clearTimeout(_arCuTimeOut);

    arCuPromptClosed = true;

    jQuery('#contact').contactUs('hidePrompt');

    arCuCreateCookie('arcu-closed', 1, 30);

  });

  jQuery('#arcontactus').on('arcontactus.hidePrompt', function() {

    clearTimeout(_arCuTimeOut);

    arCuPromptClosed = true;

    arCuCreateCookie('arcu-closed', 1, 30);

  });

  var arcItem = {};

  arcItem.id = 'msg-item-1';

  arcItem.class = 'msg-item-facebook-messenger';

  arcItem.title = 'Massenger';

  arcItem.icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 32C15.9 32-77.5 278 84.6 400.6V480l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7C445.8 124.8 346.5 32 224 32zm23.4 278.1L190 250.5 79.6 311.6l121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z"></path></svg>';

  arcItem.href = 'https://m.me/ourislamBD.Official';

  arcItem.color = '#567AFF';

  arcItems.push(arcItem);

  var arcItem = {};

  arcItem.id = 'msg-item-6';

  arcItem.class = 'msg-item-skype';

  arcItem.title = 'Whatsapp';

  arcItem.icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M22.517,16.379l-5.07-2.173a1.086,1.086,0,0,0-1.268.312l-2.245,2.743A16.78,16.78,0,0,1,5.912,9.24L8.656,6.995a1.084,1.084,0,0,0,.312-1.268L6.795.657A1.094,1.094,0,0,0,5.55.028L.842,1.114A1.086,1.086,0,0,0,0,2.173,21,21,0,0,0,21.005,23.178a1.086,1.086,0,0,0,1.059-.842l1.086-4.708a1.1,1.1,0,0,0-.634-1.249Z"></path></svg>';

  arcItem.href = 'https://wa.me/8801771687270';

  arcItem.color = '#25D366';

  arcItems.push(arcItem);

  var arcItem = {};

  arcItem.id = 'msg-item-7';

  arcItem.class = 'msg-item-envelope';

  arcItem.title = 'Email';

  arcItem.icon = '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"></path></svg>';

  arcItem.href = 'mailto:contact.rubelour@gmail.com';

  arcItem.color = '#FF643A';

  arcItems.push(arcItem);

  var arcItem = {};

  arcItem.id = 'msg-item-8';

  arcItem.class = 'msg-item-phone';

  arcItem.title = 'Call 01839950240';

  arcItem.icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>';

  arcItem.href = 'tel:01771687270';

  arcItem.color = '#4EB625';

  arcItems.push(arcItem);

  jQuery('#arcontactus').contactUs({

    items: arcItems

  });

});
