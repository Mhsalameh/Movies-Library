pipeline {

   agent any

    stages {
        stage("build") {

            steps { 
                echo "building app..."
                nodejs('node'){
                sh '''
                npm install
                '''
                }
            }
        }
        stage ('testing'){
            steps{
                echo "testing app"
            }
        }
        stage ('deploying'){
            steps{
                    echo "deploying app"
                    sshagent(credentials : ['34.125.63.180']){
                    sh "ssh -T -o StrictHostKeyChecking=no mohsalameh1@app"
                    sh "ssh mohsalameh1@app rm -rf /home/mohsalameh1/my-pipeline_master/"
                    sh "scp -r /var/lib/jenkins/workspace/my-pipeline_master mohsalameh1@app:/home/mohsalameh1"
                    sh "ssh mohsalameh1@app 'cd /home/mohsalameh1/my-pipeline_master && sudo docker-compose build && sudo docker-compose up -d' "
                    }
            }
        }
    }
}
