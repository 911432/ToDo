import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleCheck, faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'

import './assets/main.css'

library.add(faCircleCheck, faSquarePlus, faCircleMinus, faTrashCan)
let app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.mount('#app')
