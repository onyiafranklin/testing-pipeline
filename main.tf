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
    key_name     = "mbo"