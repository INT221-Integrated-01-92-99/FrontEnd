import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BaseCard from './components/BaseCard.vue'
import BaseButton from './components/BaseButton.vue'
import BaseForm from './components/BaseForm.vue'
import BaseProductHorizontal from './components/BaseProductHorizontal.vue'


const app = createApp(App).use(router)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-form', BaseForm)
app.component('base-product-horizontal', BaseProductHorizontal)
app.mount('#app')