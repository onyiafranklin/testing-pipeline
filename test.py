provider "aws"{
    region="us-east-1"
}

resource "aws_instance" "AWS-instance" {
  count     = 1 
  ami           = "ami-08c40ec9ead489470"
  instance_type = "t2.micro"
  tags = {
    Name = "Node1"
    }
    
}

provider "aws"{
    region="us-east-1"
    access_key="AKIAYBKTQ3JYRHHJ7Q33"
    secret_key="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"
}

resource "aws_vpc" "main" {
  cidr_block       = "10.0.0.0/16"
  instance_tenancy = "default"

  tags = {
    Name = "main"
  }
}

# resource "aws_instance" "AWS-instance" {
#   count     = 1 
#   ami           = "ami-08c40ec9ead489470"
#   instance_type = "t2.micro"
#   tags = {
#     Name = "Node1"
#     }
    
# }

# resource "aws_launch_configuration" "WebAppLaunchConfig" {
#     image_id        = var.ami
#     instance_type   = "t2.micro"
#     security_groups = [aws_security_group.WebServerSG.id]
#     user_data       = <<-EOF
#                       #!/bin/bash
#                       sudo apt-get update -y
#                       sudo apt-get install apache2 -y
#                       sudo systemctl start apache2
#                       cd /var/www/html
#                       echo "Udacity Demo Web Server Up and Running!" > index.html
#                       EOF
#     ebs_block_device {
#         device_name = "/dev/sdk"
#         volume_size = 10
#     }

#     lifecycle {
#         create_before_destroy = true
#     }
# }