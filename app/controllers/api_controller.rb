class ApiController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  self.abstract = true
end
