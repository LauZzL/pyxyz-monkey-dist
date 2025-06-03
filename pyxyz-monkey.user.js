// ==UserScript==
// @name       皮友小宇宙网盘下载
// @namespace  皮友小宇宙
// @version    1.0.0
// @author     LauZzL
// @icon       https://vitejs.dev/logo.svg
// @match      https://www.baidu.com/monkey*
// @match      *://*/*
// @require    https://cdn.jsdelivr.net/npm/vue@3.5.16/dist/vue.global.prod.js
// ==/UserScript==

(function (vue) {
  'use strict';

  const _sfc_main = {
    __name: "App",
    setup(__props) {
      const getRandomStr = (length) => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let str = "";
        for (let i = 0; i < length; i++) {
          str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str;
      };
      const domain = location.href;
      const isRedirectPage = domain.includes("www.baidu.com/monkey");
      if (isRedirectPage) {
        const u = new URL(domain);
        let referer = u.searchParams.get("referer");
        let down = u.searchParams.get("down");
        let name = u.searchParams.get("name");
        if (referer && down && name) {
          referer = atob(referer);
          location.href = `${referer}/${getRandomStr(8)}?down=${down}&name=${name}&referer=${btoa(referer)}`;
        }
      }
      if (domain.includes("referer") && domain.includes("down")) {
        const u = new URL(domain);
        let referer = u.searchParams.get("referer");
        let down = u.searchParams.get("down");
        let name = u.searchParams.get("name");
        if (referer && down && name) {
          referer = atob(referer);
          down = atob(down);
          name = atob(name);
          alert(`开始下载：${name}`);
          window.open(down);
        }
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div");
      };
    }
  };
  vue.createApp(_sfc_main).mount(
    (() => {
      const app = document.createElement("div");
      document.body.append(app);
      return app;
    })()
  );

})(Vue);