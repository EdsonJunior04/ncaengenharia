output "vpc_id" {
  value       = aws_vpc.vpc_nca.id
  description = "VPC_Criada"
}

output "subnet_public" {
  value = aws_subnet.subnet_public.id
}

output "sg_nca" {
  value = aws_security_group.grupo_seguranca_nca.id
}