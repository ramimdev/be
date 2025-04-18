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

window.addEventListener('load', function () {
  arCuClosedCookie = arCuGetCookie('arcu-closed');

  jQuery('#arcontactus').on('arcontactus.init', function () {
    if (arCuClosedCookie) return false;
    arCuShowMessages();
  });

  jQuery('#arcontactus').on('arcontactus.openMenu arcontactus.hidePrompt', function () {
    clearTimeout(_arCuTimeOut);
    arCuPromptClosed = true;
    arCuCreateCookie('arcu-closed', 1, 30);
  });

  // Facebook Messenger
  arcItems.push({
    id: 'msg-item-1',
    class: 'msg-item-facebook-messenger',
    title: 'Messenger',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 133.1 0 256c0 63.6 28.1 121.3 74.3 163.3V512l68.7-37.2c34.5 9.6 71.3 14.7 109 14.7 141.4 0 256-101.1 256-224S397.4 32 256 32zm23.1 270.7l-56.2-59.3L80.9 312.7l117-124.1 55.9 58.5 115.3-63.7-117 124.1z"/></svg>',
    href: 'https://m.me/ourislamBD.Official',
    color: '#567AFF'
  });

  // WhatsApp
  arcItems.push({
    id: 'msg-item-6',
    class: 'msg-item-skype',
    title: 'WhatsApp',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339-2.1 234.2-28.4 143.7 22.2 60.5 68.5 30.7 175 80 256.9l-33.5 99.6 102.2-33.6c81.5 47.7 187.5 18.6 234-63.3 39.5-67.5 29.2-154.8-28.3-199.5zM224 392c-40.5 0-78.1-15.8-106.5-41.5l-47.3 15.5 15.7-46.7C64 289.5 48 257.6 48 224c0-97.2 78.8-176 176-176s176 78.8 176 176-78.8 176-176 176z"/></svg>',
    href: 'https://wa.me/8801771687270',
    color: '#25D366'
  });

  // Email
  arcItems.push({
    id: 'msg-item-7',
    class: 'msg-item-envelope',
    title: 'Email',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8 327.4 338.3c-15.2 12.8-37.6 12.8-52.8 0L9.7 190.8C3.6 186.1 0 178.7 0 170.6V96c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v74.6c0 8.1-3.6 15.5-9.7 20.2z"/></svg>',
    href: 'mailto:contact.rubelour@gmail.com',
    color: '#FF643A'
  });

  // Phone Call
  arcItems.push({
    id: 'msg-item-8',
    class: 'msg-item-phone',
    title: 'Call 01839950240',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.1 387.1c-1.3-8.4-6.7-15.7-14.4-19.6l-96-48c-10.5-5.3-23.4-3.2-31.8 5.2l-46.2 46.2c-60.7-31.7-109.5-80.5-141.2-141.2l46.2-46.2c8.4-8.4 10.5-21.3 5.2-31.8l-48-96c-3.9-7.8-11.2-13.1-19.6-14.4-8.4-1.3-17 1.1-23.5 6.6L47 111C17.7 140.3 0 180.6 0 224c0 159.1 128.9 288 288 288 43.4 0 83.7-17.7 113-47l43.1-43.1c5.5-6.5 7.9-15.1 6.6-23.5z"/></svg>',
    href: 'tel:01771687270',
    color: '#4EB625'
  });

  // Initialize
  jQuery('#arcontactus').contactUs({ items: arcItems });
});
