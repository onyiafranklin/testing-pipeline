provider "aws"{
    region="eu-west-1"
}



resource "aws_instance" "AWS-instance" {
  count     = 1
  ami           = "ami-096800910c1b781ba"
  instance_type = "t3.large"
  tags = {
    Name = "Grp16-devops-final"
    }
    key_name     = "x21221600-FOnyia-KeyPair-NCI.pem"
  
}