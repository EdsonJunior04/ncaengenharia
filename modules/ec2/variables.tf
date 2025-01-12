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
# Instalar o NGINX
apt update -y
apt install -y nginx git

# Clonar o repositório
git clone -b develop https://github.com/EdsonJunior04/ncaengenharia.git /tmp/site

# Mover os arquivos do repositório para o diretório do NGINX
mv /tmp/site/* /var/www/html/

# Reiniciar o NGINX
systemctl restart nginx
EOF
}