export default defineNuxtPlugin((nuxtApp) => {
  // onNuxtReady(async () => {
    const modulesToImport = import.meta.glob('../app/services/**/*.ts')
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
        services: modules,
      },
    }
  // })
})