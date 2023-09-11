// import Vue3Sanitize from "vue-3-sanitize"
import DOMPurify from 'isomorphic-dompurify'

export default defineNuxtPlugin((nuxtApp) => {

	nuxtApp.vueApp.directive('sanitize-html', {
		mounted(el, binding) {
			try {
				el.innerHTML = binding.value ? DOMPurify.sanitize(binding.value) : ''
			} catch (error) {}
		},
	})
  // nuxtApp.vueApp.use(Vue3Sanitize)

  // nuxtApp.provide('sanitize', Vue3Sanitize)
})
