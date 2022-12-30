const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'amit619',
        mongodb_password: 'amit619',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    }
  }

  return {
    env: {
      mongodb_username: 'amit619',
      mongodb_password: 'amit619',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  }
}
