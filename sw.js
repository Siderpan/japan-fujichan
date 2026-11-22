// 富士東京冬日手帖：只用來顯示行程提醒通知，不快取任何內容
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("notificationclick",e=>{
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(cs=>{
    for(const c of cs){if("focus" in c)return c.focus()}
    return self.clients.openWindow("./#plan");
  }));
});
