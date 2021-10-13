const { ROLE } = require ('../data')

function canViewProject (user, project) {
  return (
    user.id === project.userId ||
    user.role === ROLE.ADMIN
  )
}

module.exports = {
  canViewProject
}
