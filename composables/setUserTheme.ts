import { useUsersStore } from '~/store/usersStore'

export const setUserTheme = () => {
  const usersStore = useUsersStore()

  const isDark = usePreferredDark()
  const storeThemeDark = computed(() => usersStore.isDarkTheme)
  const storeThemeDefined = computed(() => usersStore.isThemeDefined)

  if (storeThemeDefined.value === true) {
    return storeThemeDark.value === true
      ? 'sharHubDarkTheme'
      : 'sharHubLightTheme'
  } else if (isDark.value === true) {
    return 'sharHubDarkTheme'
  } else {
    return 'sharHubLightTheme'
  }
}