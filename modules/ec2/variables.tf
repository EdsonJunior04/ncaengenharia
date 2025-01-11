variable "ami_ec2" {
  default = "ami-0e2c8caa4b6378d8c"
}

variable "subnet_public" {
  type = string
}

variable "sg_nca" {
  type = string
}

variable "nome_ec2" {
  default = "nca"
}

variable "script_docker_nca" {
  default = <<EOF
#!/bin/bash
sudo apt-get update
sudo apt-get install git 
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
# Add the repository to Apt sources:
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
sudo usermod -a -G docker root
sudo usermod -a -G docker ubuntu
sudo docker pull edsonjunior04/ncaengenharia_develop:tagname
sudo docker run -d --name=nca -p 80:80 edsonjunior04/ncaengenharia_develop:tagname
EOF
}