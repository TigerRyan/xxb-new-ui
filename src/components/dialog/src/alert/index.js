import Vue from 'vue';
import {pageScroll} from '../../../../utils';
import alert from './alert.vue'
const AlertConstructor = Vue.extend(alert);

const instance = new AlertConstructor({
  el: document.createElement('div')
});

AlertConstructor.prototype.closeAlert = function () {
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);

  pageScroll.unlock();
};

const Alert = (options = {}) => {
  instance.mes = options.mes;
  document.body.appendChild(instance.$el);

  pageScroll.lock();
};

export default Alert;