export default {
  routesPermissions: {
    checkAuth: [
      '/admin'
    ],
    routesRequireAdmin: [
      '/admin'
    ]
  },
  routing: {},
  user: {
    isAdmin: undefined
  },
  auth: {
    isLogged: false,
    currentUserUID: null,
    initialized: false
  },
  ajaxCallsInProgress: 0
};
