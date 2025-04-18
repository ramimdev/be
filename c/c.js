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
    if (arCuClosedCookie) return false;
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

  // Facebook Messenger
  arcItems.push({
    id: 'msg-item-1',
    class: 'msg-item-facebook-messenger',
    title: 'Messenger',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#006AFF" d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"/></svg>',
    href: 'https://m.me/ourislamBD.Official',
    color: '#006AFF'
  });

  // WhatsApp
  arcItems.push({
    id: 'msg-item-2',
    class: 'msg-item-whatsapp',
    title: 'WhatsApp',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#25D366" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L4 480l134.8-35.4c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-15.6-17.1-21.2-4.5-5.6-3-8.5 1.7-13.3 4.7-4.8 9.8-12.4 14.8-19.9 1.9-3.1 3.8-6.3 5.6-9.5 1.8-3.2.9-6-1.3-8.3-2.2-2.3-6-5.6-8.3-7.5-2.3-1.9-4.8-2-7.4-1.1-2.6.9-16 7.6-22.8 11.6-7.3 4.3-12.6 7.1-17.2 11.6-4.6 4.5-9.4 13.4-4.6 26.2s16.1 39.4 25.4 53.3c22.7 33.7 52.2 57.9 87.4 72.8 15.2 6.5 27.3 10.5 37.4 13.1 13.9 3.6 26.6 3.1 36.5 1.8 10.8-1.5 33-13.1 37.6-25.6 4.6-12.5 4.6-23.3 3.2-25.6-1.4-2.3-5-3.9-10.5-6.6z"/></svg>',
    href: 'https://wa.me/8801771687270',
    color: '#25D366'
  });

  // Email
  arcItems.push({
    id: 'msg-item-3',
    class: 'msg-item-email',
    title: 'Email',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FF643A" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>',
    href: 'mailto:contact.rubelour@gmail.com',
    color: '#FF643A'
  });

  // Phone
  arcItems.push({
    id: 'msg-item-4',
    class: 'msg-item-phone',
    title: 'Call Us',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#4EB625" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>',
    href: 'tel:01771687270',
    color: '#4EB625'
  });

  jQuery('#arcontactus').contactUs({ items: arcItems });
});
