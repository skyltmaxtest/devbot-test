@Library('utils') _

properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '30', artifactNumToKeepStr: '50', daysToKeepStr: '60', numToKeepStr: '100'))])
abortIfNewer()

node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Test') {
      sh "env"
    }
  } catch(e) {
    if (e instanceof java.lang.InterruptedException) {
      currentBuild.result = 'ABORTED'
    } else {
      currentBuild.result = 'FAILURE'
    }
    throw e
  }
}
