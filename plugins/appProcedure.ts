export default defineNuxtPlugin((nuxtApp) => {
  const modulesToImport = import.meta.glob('../app/procedures/**/*.ts')
  const modules = {}

  for (const path in modulesToImport) {
    modulesToImport[path]().then((module) => {
      const moduleName = module.default.moduleName // Récupérer l'attribut statique "name"
      const moduleInstance = new module.default() // Créer une instance du module

      modules[moduleName] = moduleInstance // Ajouter le module à l'objet addedModules
    })
  }

  return {
    provide: {
      procedures: modules,
    },
  }
})