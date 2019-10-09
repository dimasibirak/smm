export const state = () => ({
  isClosing: true,
  mobileMenu: false
})

export const getters = {
  isClosing: s => s.isClosing,
  mobileMenu: s => s.mobileMenu
}

export const mutations = {
  changeStateSidebar: s => s.isClosing = !s.isClosing,
  changeMobileMenu: s => s.mobileMenu = !s.mobileMenu
}