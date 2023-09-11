import { useSnackbarStore } from '~/store/snackbarStore'

class NotificationsModule {
  static moduleName = 'notifications'

  success(message: string) {
    const snackbarStore = useSnackbarStore()

    snackbarStore.setMessage(message)
    snackbarStore.setCategory('success')
    snackbarStore.setShow(true)
  }

  error(message: string) {
    const snackbarStore = useSnackbarStore()

    snackbarStore.setMessage(message)
    snackbarStore.setCategory('error')
    snackbarStore.setShow(true)
  }
}

export default NotificationsModule