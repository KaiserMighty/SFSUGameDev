import subprocess
import os

PRIVATE_KEY = "sfsugamedev_key"
IP_ADDRESS = "64.227.109.110"
BUILD_PATH = "build/*"
REMOTE_PATH = "/var/www/react-app"

def run_command(command):
    try:
        print(f"Running: {command}")
        subprocess.run(command, check=True, shell=True)
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
        exit(1)

def deploy():
    scp_command = f"scp -i {PRIVATE_KEY} -r {BUILD_PATH} root@{IP_ADDRESS}:{REMOTE_PATH}"
    run_command(scp_command)

    ssh_commands = [
        f"sudo chown -R www-data:www-data {REMOTE_PATH}",
        f"sudo chmod -R 755 {REMOTE_PATH}",
        "sudo systemctl restart nginx"
    ]

    ssh_command = f'ssh -i {PRIVATE_KEY} root@{IP_ADDRESS} "' + ' && '.join(ssh_commands) + '"'
    run_command(ssh_command)

    print("Deployment completed successfully!")

if __name__ == "__main__":
    deploy()
