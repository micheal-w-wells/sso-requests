# see https://learn.hashicorp.com/tutorials/terraform/lambda-api-gateway
# This structure accepts all request methods and routes leaving handling
# to the lambda function.

resource "aws_api_gateway_rest_api" "sso_backend" {
  name        = "SSOApi"
  description = "Terraform Serverless Application Example"
}

# Proxy routes starting with /app to the app handler allowing any method
resource "aws_api_gateway_resource" "app" {
  rest_api_id = aws_api_gateway_rest_api.sso_backend.id
  parent_id   = aws_api_gateway_rest_api.sso_backend.root_resource_id
  path_part   = "app"
}

resource "aws_api_gateway_resource" "proxy" {
  rest_api_id = aws_api_gateway_rest_api.sso_backend.id
  parent_id   = aws_api_gateway_resource.app.id
  path_part   = "{proxy+}"
}

resource "aws_api_gateway_method" "proxy" {
  rest_api_id   = aws_api_gateway_rest_api.sso_backend.id
  resource_id   = aws_api_gateway_resource.proxy.id
  http_method   = "ANY"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "lambda" {
  rest_api_id = aws_api_gateway_rest_api.sso_backend.id
  resource_id = aws_api_gateway_method.proxy.resource_id
  http_method = aws_api_gateway_method.proxy.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.app.invoke_arn
}

# Proxy put requests to /actions to the actions lambda
resource "aws_api_gateway_resource" "actions" {
  rest_api_id = aws_api_gateway_rest_api.sso_backend.id
  parent_id   = aws_api_gateway_rest_api.sso_backend.root_resource_id
  path_part   = "actions"
}

resource "aws_api_gateway_method" "actions" {
  rest_api_id   = aws_api_gateway_rest_api.sso_backend.id
  resource_id   = aws_api_gateway_resource.actions.id
  http_method   = "ANY"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "actions" {
  rest_api_id = aws_api_gateway_rest_api.sso_backend.id
  resource_id = aws_api_gateway_method.actions.resource_id
  http_method = aws_api_gateway_method.actions.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.actions.invoke_arn
}

# Deploy API and authorize to use both lambdas
resource "aws_api_gateway_deployment" "this" {
  depends_on = [
    aws_api_gateway_integration.lambda,
    aws_api_gateway_integration.actions,
  ]

  triggers = {
    redeployment = sha1(jsonencode([
      aws_api_gateway_integration.actions.id,
      aws_api_gateway_integration.lambda.id,
    ]))
  }

  rest_api_id = aws_api_gateway_rest_api.sso_backend.id
  stage_name  = "test"
}

resource "aws_lambda_permission" "apigw_auth" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.app.function_name
  principal     = "apigateway.amazonaws.com"

  # The "/*/*" portion grants access from any method on any resource
  # within the API Gateway REST API.
  source_arn = "${aws_api_gateway_rest_api.sso_backend.execution_arn}/*/*"
}

resource "aws_lambda_permission" "apigw_actions" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.actions.function_name
  principal     = "apigateway.amazonaws.com"

  # The "/*/*" portion grants access from any method on any resource
  # within the API Gateway REST API.
  source_arn = "${aws_api_gateway_rest_api.sso_backend.execution_arn}/*/*"
}

output "base_url" {
  value = aws_api_gateway_deployment.this.invoke_url
}
