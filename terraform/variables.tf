variable "region" {
  type    = string
  default = "ca-central-1"
}

variable "networks" {
  description = "AWS subnets"
  type        = map(any)
  default = {
    first = {
      "cidr_block"        = "10.0.1.0/24",
      "availability_zone" = "a"
    },
    second = {
      "cidr_block"        = "10.0.2.0/24",
      "availability_zone" = "b"
    },
    third = {
      "cidr_block"        = "10.0.3.0/24",
      "availability_zone" = "d"
    }
  }
}

variable "db_username" {
  description = "The username for the DB master user"
  type        = string
  default     = "test_admin"
  sensitive   = true
}

variable "db_password" {
  description = "The password for the DB master user"
  type        = string
  default     = "test_admin"
  sensitive   = true
}

variable "db_name" {
  description = "The name of the database"
  type        = string
  default     = "ExampleDB"
}

variable "configuration_endpoint" {
  description = "The openid configuration endpoint url"
  type        = string
  default     = "https://dev.oidc.gov.bc.ca/auth/realms/onestopauth/.well-known/openid-configuration"
}

variable "aud" {
  description = "The required audience for authentication"
  type        = string
  default     = "tmp-sso-requests"
}

variable "target_aws_account_id" {
  default = ""
}
variable "target_env" {
  default = ""
}

variable "subnet_a" {
  description = "Value of the name tag for the subnet in AZ a"
  default     = "App_Dev_aza_net"
}

variable "subnet_b" {
  description = "Value of the name tag for the subnet in AZ b"
  default     = "App_Dev_azb_net"
}

variable "gh_access_token" {
  description = "access token for github workflows"
  default     = ""
}

variable "gh_owner" {
  description = "organization owning the github repository to create keycloak client pull requests"
  default     = "bcgov"
}

variable "gh_repo" {
  description = "repository to create keycloak client pull requests"
  default     = "sso-terraform-dev"
}

variable "gh_workflow_id" {
  description = "workflow id or filename to trigger when saving requests"
  default     = "request.yml"
}

variable "gh_branch" {
  description = "default branch in the gh_repo"
  default     = "main"
}