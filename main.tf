provider "aws"{
    region="us-east-1"
}



resource "aws_instance" "AWS-instance" {
  count     = 1
  ami           = "ami-0fd8802f94ed1c969"
  instance_type = "t3.large"
  tags = {
    Name = "Grp16-devops-final"
    }
    key_name     = "x21221600-FOnyia-KeyPair-NCI.pem"
  
}