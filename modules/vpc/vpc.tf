resource "aws_vpc" "vpc_nca" {
  cidr_block = var.endereco_vpc

  tags = {
    Name = var.nome_vpc
  }
}

resource "aws_subnet" "subnet_public" {
  vpc_id     = aws_vpc.vpc_nca.id
  cidr_block = var.endereco_subnet_publica

  tags = {
    Name = var.nome_subnete_publica
  }
}

resource "aws_subnet" "subnet_privada" {
  vpc_id     = aws_vpc.vpc_nca.id
  cidr_block = var.endereco_subnet_privada

  tags = {
    Name = var.nome_subnet_privada
  }
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.vpc_nca.id


  tags = {
    Name = var.nome_gateway
  }
}

resource "aws_route_table" "public" {
  vpc_id = aws_vpc.vpc_nca.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

  tags = {
    Name = var.nome_tabela_rotas
  }
}

resource "aws_route_table_association" "public" {
  subnet_id      = aws_subnet.subnet_public.id
  route_table_id = aws_route_table.public.id
}

resource "aws_security_group" "grupo_seguranca_nca" {
  name        = var.nome_sg
  description = var.nome_sg
  vpc_id      = aws_vpc.vpc_nca.id




  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }


  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }


  tags = {
    Name = var.nome_sg
  }
}