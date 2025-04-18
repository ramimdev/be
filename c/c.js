var arCuMessages = [
  "Hi, I'm Rubel",
  "How can I help you",
  "You can share your problem with us",
  "We will try to solve it"
];

var arCuLoop = false;
var arCuCloseLastMessage = false;
var arCuPromptClosed = false;
var _arCuTimeOut = null;
var arCuDelayFirst = 2000;
var arCuTypingTime = 2000;
var arCuMessageTime = 4000;
var arCuClosedCookie = 0;
var arcItems = [];

window.addEventListener('load', function () {
  arCuClosedCookie = arCuGetCookie('arcu-closed');

  jQuery('#arcontactus').on('arcontactus.init', function () {
    if (arCuClosedCookie) return false;
    arCuShowMessages();
  });

  jQuery('#arcontactus').on('arcontactus.openMenu', function () {
    clearTimeout(_arCuTimeOut);
    arCuPromptClosed = true;
    jQuery('#contact').contactUs('hidePrompt');
    arCuCreateCookie('arcu-closed', 1, 30);
  });

  jQuery('#arcontactus').on('arcontactus.hidePrompt', function () {
    clearTimeout(_arCuTimeOut);
    arCuPromptClosed = true;
    arCuCreateCookie('arcu-closed', 1, 30);
  });

  // Messenger
  arcItems.push({
    id: 'msg-item-1',
    class: 'msg-item-facebook-messenger',
    title: 'Messenger',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
             <path fill="currentColor" d="M224 32C100.3 32 0 125.1 0 240c0 49.3 21.1 94.4 56 129.6V480l61.4-33.8c32.6 9.1 67.2 13.8 106.6 13.8 123.7 0 224-93.1 224-208S347.7 32 224 32zm23.4 278.1L190 250.5 79.6 311.6l121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z"/>
           </svg>`,
    href: 'https://m.me/ourislamBD.Official',
    color: '#0084FF'
  });

  // WhatsApp
  arcItems.push({
    id: 'msg-item-6',
    class: 'msg-item-skype',
    title: 'WhatsApp',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
             <path fill="currentColor" d="M380.9 97.1C339-2.1 234.2-28.4 143.7 22.2 60.5 68.5 30.7 175 80 256.9l-33.5 99.6 102.2-33.6c81.5 47.7 187.5 18.6 234-63.3 39.5-67.5 29.2-154.8-28.3-199.5zM224 392c-40.5 0-78.1-15.8-106.5-41.5l-47.3 15.5 15.7-46.7C64 289.5 48 257.6 48 224c0-97.2 78.8-176 176-176s176 78.8 176 176-78.8 176-176 176z"/>
           </svg>`,
    href: 'https://wa.me/8801771687270',
    color: '#25D366'
  });

  // Email
  arcItems.push({
    id: 'msg-item-7',
    class: 'msg-item-envelope',
    title: 'Email',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
             <path fill="currentColor" d="M502.3 190.8 327.4 338.3c-15.2 12.8-37.6 12.8-52.8 0L9.7 190.8C3.6 186.1 0 178.7 0 170.6V96c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v74.6c0 8.1-3.6 15.5-9.7 20.2z"/>
           </svg>`,
    href: 'mailto:contact.rubelour@gmail.com',
    color: '#FF643A'
  });

  // Phone Call
  arcItems.push({
    id: 'msg-item-8',
    class: 'msg-item-phone',
    title: 'Call 01839950240',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
             <path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/>
           </svg>`,
    href: 'tel:01771687270',
    color: '#4EB625'
  });

  jQuery('#arcontactus').contactUs({
    items: arcItems
  });
});
