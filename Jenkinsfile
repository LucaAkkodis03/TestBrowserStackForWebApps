pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        echo ' Clonazione del repository...'
        checkout scm
      }
    }

    stage('Check the installation') {
      tools {
        nodejs 'nodeJs25'  // Nome configurato in Jenkins → Manage Jenkins → Tools → NodeJS
      }
      steps {
        sh 'node -v'
        sh 'npm -v'
      }
    }

    stage('Run on BrowserStack') {
     tools {
        nodejs 'nodeJs25'  // Nome configurato in Jenkins → Manage Jenkins → Tools → NodeJS
                         //Fondamentale esplicitare la versione di node per eseguire npm
      }
      steps {
        // 🔹 Wrappa tutto con le credenziali BrowserStack
        browserstack(credentialsId: 'c047256b-195c-4fa3-acd2-c1d34c943a17') {
          echo ' Credenziali BrowserStack trovate, procedo con il test...'
          dir('config') { //
            echo ' Installazione dipendenze...'
            sh 'npm ci || npm install'

            echo ' Avvio test WebdriverIO su BrowserStack...'
            sh 'npm run test'
          
          }
        }
        browserStackReportPublisher 'automate'
      }
    }
  }

  post {
    always {
      echo ' Pipeline terminata.'
    }
    failure {
      echo 'Build fallita.'
    }
    success {
      echo 'Tutti i test sono passati con successo!'
    }
  }
}
