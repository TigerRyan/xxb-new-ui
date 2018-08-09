# xxb-ui

> A mobile terminal UI component library based on vue2.x by XuGang

## Build Setup

``` bash
# install devDependencies
npm install

# serve with hot reload at 0.0.0.0:8080
npm run dev

# build for production for full-package
npm run build:all

# build for production for load-on-demand-setting
npm run build:demand

# build for production for both load-on-demand-setting and full-package
npm run build
```

## Use Setup

``` bash
# install package
npm install xxb-ui --save

# use full-package: main.js
import XXBUI from 'xxb-ui'
Vue.use(XXBUI)

# use load-on-demand-setting
main.js

import XXBUI from 'xxb-ui'
import 'xxb-ui.base.css' from 'xxb-ui'
import 'xxb-ui.flexible.js' from 'xxb-ui'

.vue
import {Layout} from 'xxb-ui'
```