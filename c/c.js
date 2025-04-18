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

  // Facebook Messenger (নতুন আইকন)
  var arcItem = {};
  arcItem.id = 'msg-item-1';
  arcItem.class = 'msg-item-facebook-messenger';
  arcItem.title = 'Messenger';
  arcItem.icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"/></svg>';
  arcItem.href = 'https://m.me/ourislamBD.Official';
  arcItem.color = '#006AFF';
  arcItems.push(arcItem);

  // WhatsApp (নতুন আইকন)
  var arcItem = {};
  arcItem.id = 'msg-item-6';
  arcItem.class = 'msg-item-whatsapp';
  arcItem.title = 'WhatsApp';
  arcItem.icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L4 480l134.8-35.4c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-15.6-17.1-21.2-4.5-5.6-3-8.5 1.7-13.3 4.7-4.8 9.8-12.4 14.8-19.9 1.9-3.1 3.8-6.3 5.6-9.5 1.8-3.2.9-6-1.3-8.3-2.2-2.3-6-5.6-8.3-7.5-2.3-1.9-4.8-2-7.4-1.1-2.6.9-16 7.6-22.8 11.6-7.3 4.3-12.6 7.1-17.2 11.6-4.6 4.5-9.4 13.4-4.6 26.2s16.1 39.4 25.4 53.3c22.7 33.7 52.2 57.9 87.4 72.8 15.2 6.5 27.3 10.5 37.4 13.1 13.9 3.6 26.6 3.1 36.5 1.8 10.8-1.5 33-13.1 37.6-25.6 4.6-12.5 4.6-23.3 3.2-25.6-1.4-2.3-5-3.9-10.5-6.6z"/></svg>';
  arcItem.href = 'https://wa.me/8801771687270';
  arcItem.color = '#25D366';
  arcItems.push(arcItem);

  // Email (আইকন একই রাখা হয়েছে)
  var arcItem = {};
  arcItem.id = 'msg-item-7';
  arcItem.class = 'msg-item-envelope';
  arcItem.title = 'Email';
  arcItem.icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"/></svg>';
  arcItem.href = 'mailto:contact.rubelour@gmail.com';
  arcItem.color = '#FF643A';
  arcItems.push(arcItem);

  // Phone Call (নতুন আইকন)
  var arcItem = {};
  arcItem.id = 'msg-item-8';
  arcItem.class = 'msg-item-phone';
  arcItem.title = 'Call 01839950240';
  arcItem.icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/></svg>';
  arcItem.href = 'tel:01771687270';
  arcItem.color = '#4EB625';
  arcItems.push(arcItem);

  jQuery('#arcontactus').contactUs({
    items: arcItems
  });
});
