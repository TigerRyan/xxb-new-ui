import Vue from 'vue';
import {pageScroll} from '../../../../utils';
import confirm from './confirm.vue'

const ConfirmConstructor = Vue.extend(confirm);

const instance = new ConfirmConstructor({
  el: document.createElement('div')
});

ConfirmConstructor.prototype.closeConfirm = function (cb) {
  cb && typeof cb == 'function' && cb();
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);

  pageScroll.unlock();
};

const Confirm = (options = {}) => {
  instance.title = options.title;
  instance.content = options.content;
  instance.opts = options.opts;

  document.body.appendChild(instance.$el);

  pageScroll.lock();
};

export default Confirm;