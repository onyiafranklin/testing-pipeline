provider "aws"{
    region="us-east-1"
    access_key="AKIAYBKTQ3JYRHHJ7Q33"
    secret_key="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"
}

resource "aws_instance" "AWS-instance" {
  count     = 1 
  ami           = "08c40ec9ead489470"
  instance_type = "t2.micro"
  tags = {
    Name = "Node1"
  }

 

}