// define async components
const VButton = defineAsyncComponent(() => import('./components/VButton.vue'))
const VModal = defineAsyncComponent(() => import('./components/VModal.vue'))

// register components in a function
export const registerComponents = (app) => {
  app.component('VButton', VButton)
  app.component('VModal', VModal)
}

// in main.js file
import { registerComponents } from '@/globals'
registerComponents(app)
