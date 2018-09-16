using System;
using System.Net;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TagIt.Interface.Repository;
using TagIt.Interface.Service;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace TagIt.Controllers
{
    public class User
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string UserEmail { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }

    [Route("api/account/")]
    public class AccountController : Controller
    {

        private readonly IConfiguration _configuration;

        protected IUserService UserService { get; set; }

        public AccountController(IConfiguration configuration, IUserService userService)
        {
            _configuration = configuration;
            UserService = userService;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("CreateAccount")]
        public JsonResult CreateAccount([FromBody]User user)
        {
            UserService.CreateUser(user);
            return new JsonResult(true);
        }

        [HttpPost("UpdateAccount")]
        public JsonResult UpdateAccount([FromBody]User user)
        {
            UserService.UpdateUser(user);
            return new JsonResult(true);
        }

        [HttpPost("LoginAccount")]
        public JsonResult LoginAccount([FromBody]User user)
        {
            var result = UserService.AuthenticateUser(user);
            return new JsonResult(result);
        }

        [HttpGet("GetAccount")]
        public JsonResult GetAccount(Guid guid)
        {
            var result = UserService.GetUser(guid);
            return new JsonResult(result);

        }

    }
}
