provider "aws"{
    region="us-east-1"
    access_key="ASIATUYJP7SUC5VHD6ME"
    secret_key="uNgwqvgv0ivFe/mc6D5XgeVTJAhC93w+WQQvut/X"
    session_token="IQoJb3JpZ2luX2VjEF8aCXVzLWVhc3QtMSJHMEUCIHIHTVeKULXbUghl2iHbhr0Pt2biv9N/w7XV6Moqz6YuAiEA3KGPY4gANXzIUm5TDTZXtjrdSmoGDgAyKe9NSia3pXYqhAQIeBADGgwyNTA3Mzg2Mzc5OTIiDMDX+4b2gjzXDeNweSrhA68AzsY7rnrYG1t4Qje06frqwFT+qbROYQqcp/yQG3w/MqkBpVTMjqvicYHz+r/tywuKU0aHBI4OEiDERLeyhzDgX0gawt9yDq9q8n08gtbCfpDa4BF6P7HHmblHfJoT0GatWk9zrZPa1Y70x2Y+jNI5/VA5hWQu7JOt7CkjNyCHLoD5I3ZmmyeJqwKyk2JjWWz/BAE4b/locnMa7opWuunwt2TJPjhVsBjljReG0PGdlbIIMqGIbQPOxG9Hv+tVz3fGjHQ5nN07E+KJEyxXqqfUGpfxYf+l/r9l1wn+DR9Df4ZXV4Z0dTT27zBkbRsiEpCmOmH67vilQiS8sifYbqsEvk6ytuVV6FQFqp9AFKumEuamuEXr2NGxNrZuarnD6+mknLktYplK0sEv3NmL2riwhVLZHLs828B2CVe9DL35OEJqDEpRfMVPjxIvs+WS9gyXvCXT+UKXyZfzeDZilqZbDC5PcIjZSOJkTjwIUPfxfTeUbDKfFEaTjGtaScNsEEhCviGTtCIrjxKZgdv4lAA7PsQ0Nw2ps4wuhoAMSJrDi/zeuqMN35ucZo20tL4mnOkrysVj8pbBfE3DTmRmVCWZRLnkbp/2ZEHEcqhTDEQ5+QnKZGz968RM/FuYLKAsRyowvd6dnAY6pgFQLU0DLK1t6+Df1fQLeVbvWbuSc39+igAJ9C3wfgS1ntfMmkYTDiFk3kDWgSlKSLkkGQB5K+/7h0/plazFaNepZdbekDdpQEm6zORMYa+8RPQL7NkvIDf0hxnhHngpsV8hk+YrNH4UKXdqTAkLCh0+x3AjADfyZd6CrPOXm94L5CpufVoUHDLGDsn80vRquZO8DDel7O/IehBgQMh9J3d79CP3QANx"
}

resource "aws_instance" "ec2-instance" {
  count     = 1 
  ami           = "ami-08c40ec9ead489470"
  instance_type = "t2.micro"
  tags = {
    Name = "Node1"
    }
    
}