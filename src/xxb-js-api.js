/**
  * getBrowser                      获取浏览器内核
  * getUserTokenFromApp             获取token
  * getUserInfoFromApp              获取用户信息（未完成）
  * getUserAddressFromApp           获取用户地理位置信息（未完成）
  * getOrganizationInfoFromApp      获取机构信息（未完成）
  * callTokenLostToApp              通知APP，token失效
  * callAppShare                    呼起原生分享
  * callAppGetAddress               通知原生，进入营业地址地图页(未完成)
  * getOrganizationAddressFromAPP   获取营业地址(未完成)
  * getPasswordFromApp              获取支付密码(未完成)
  * callPayToApp                    呼起原生支付键盘(未完成)
  * getSystemInfoFromApp            获取手机信息(硬件)
  * callClosePageToApp              通知APP关闭当前webview     
**/

;(function(undefined) {
  "use strict"

  // 对象合并
  function extend(o,n,override) {
    for(var key in n){
      if(n.hasOwnProperty(key) && (!o.hasOwnProperty(key) || override)){
        o[key]=n[key];
      }
    }
    return o;
  }

  var _global;
  var _this;

  // 插件构造函数 - 返回数组结构
  function XXB(opt){
    this._initial(opt);
  }

  XXB.prototype = {
    constructor: this,

    identifyStatus: false,                   // 第三方应用校验状态
    
    // 初始化校验 or angthing more 
    _initial: function(opt) {
      if(!opt || !opt.appid || !opt.secret){
        console.warn('暂无参数')
        this.identifyStatus = false
      }else{
        console.log('appid 和 secret 校验通过')
        this.identifyStatus = true
      }
    },
    
    // 获取Webview浏览器内核，安卓 or IOS
    getBrowser:function (opt){
      if(this.identifyStatus){
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;    // android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);                // ios终端
        if(isAndroid){
          return 'isAndroid'
        }else if(isiOS){
          return 'isiOS'
        }
      }
    },
    
    // 从App获取token
    getUserTokenFromApp: function(cb){
      if(this.identifyStatus){
        let boswer = this.getBrowser()
        // IOS 获取token
        if(boswer == 'isiOS'){
          // 这段代码是固定的，必须要放到js中
          function setupWebViewJavascriptBridge(callback) {
            if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
            if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
            window.WVJBCallbacks = [callback];
            var WVJBIframe = document.createElement('iframe');
            WVJBIframe.style.display = 'none';
            WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
            document.documentElement.appendChild(WVJBIframe);
            setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
          }

          /*与OC交互的所有JS方法都要放在此处注册，才能调用通过JS调用OC或者让OC调用这里的JS*/
          setupWebViewJavascriptBridge(function(bridge) {
            /*JS给ObjC提供公开的API，ObjC端通过注册，就可以在JS端调用此API时，得到回调。ObjC端可以在处理完成后，反馈给JS，这样写就是在载入页面完成时就先调用*/
            bridge.callHandler('getUserTokenFromApp', function(responseData) {
              if(cb && typeof cb == 'function'){
                cb(responseData)
              }else{
                return responseData
              }
            })
          })
        // 安卓获取token
        }else if(boswer == 'isAndroid'){
          let token = window.AndroidWebView.getUserTokenFromApp();
          if(cb && typeof cb == 'function'){
            cb(token)
          }else{
            return token
          }
        }
      }
    },

    // 通知客户端，token失效
    callTokenLostToApp: function(){
        let boswer = this.getBrowser()
        if(boswer == 'isiOS'){
            window.webkit.messageHandlers.tokenExpiredTransmit.postMessage(1);
        }else if(boswer == 'isAndroid'){
            window.tokenExpiredTransmit.jsMethod(1)
        }
    },

    // 呼起原生APP分享
    callAppShare: function(obj,cb){
      let boswer = this.getBrowser()
      let str = JSON.stringify(obj)

      if(boswer == 'isiOS'){
        window.webkit.messageHandlers.shareFromWeb.postMessage(str);
      }else if(boswer == 'isAndroid'){
        window.shareFromWeb.jsMethod(str);
      }

      if(cb && typeof cb == 'function'){
        cb()
      }
    },

    // 从App获取手机信息(硬件)
    getSystemInfoFromApp: function(cb){
      let boswer = this.getBrowser()
      if(boswer == 'isiOS'){
        // 这段代码是固定的，必须要放到js中
        function setupWebViewJavascriptBridge(callback) {
          if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
          if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
          window.WVJBCallbacks = [callback];
          var WVJBIframe = document.createElement('iframe');
          WVJBIframe.style.display = 'none';
          WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
          document.documentElement.appendChild(WVJBIframe);
          setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
        }
        /*与OC交互的所有JS方法都要放在此处注册，才能调用通过JS调用OC或者让OC调用这里的JS*/
        setupWebViewJavascriptBridge(function(bridge) {
          /*JS给ObjC提供公开的API，ObjC端通过注册，就可以在JS端调用此API时，得到回调。ObjC端可以在处理完成后，反馈给JS，这样写就是在载入页面完成时就先调用*/
          bridge.callHandler('getSystemInfoFromApp', function(responseData) {
            if(cb && typeof cb == 'function'){
              cb(responseData)
            }else{
              return responseData
            }
          })
        })
      }else if(boswer == 'isAndroid'){
        let systemInfo = window.AndroidWebView.getSystemInfoFromApp();
        if(cb && typeof cb == 'function'){
          cb(systemInfo)
        }else{
          return systemInfo
        }
      }
    },

    // 关闭页面
    callClosePageToApp: function(cb){
      let boswer = this.getBrowser()
      if(boswer == 'isiOS'){
        window.webkit.messageHandlers.closePage.postMessage(1);
      }else if(boswer == 'isAndroid'){
        window.AndroidWebView.closePage();
      }
    },

  }
  
  // 将插件对象暴露给全局对象
  _global = (function(){ return this || (0, eval)('this'); }());
  if (typeof module !== "undefined" && module.exports) {
    module.exports = XXB;
  } else if (typeof define === "function" && define.amd) {
    define(function(){return XXB;});
  } else {
    !('XXB' in _global) && (_global.XXB = XXB);
  }
}());