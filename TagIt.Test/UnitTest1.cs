using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using TagIt.Controllers;
using TagIt.DataObject;
using TagIt.Implementation.Service;
using TagIt.Interface.Service;

namespace TagIt.Test
{
    [TestClass]
    public class UnitTest1
    {
        IUserService userService;

        [TestInitialize]
        public void Initialize()
        {
            userService = new UserService(null);
        }
        [TestMethod]
        public void CreateAndAuthenticate()
        {
            var username = "usertesting6";
            var password = "AdarshTesting2";
            User user = new User();
            user.FirstName = Guid.NewGuid().ToString().Substring(0, 7);
            user.LastName = Guid.NewGuid().ToString().Substring(0, 7);
            user.UserEmail = Guid.NewGuid().ToString().Substring(0, 7) + "@mailtothis.com";
            user.Username = username;
            user.Password = password;
            var registerSuccess = userService.CreateUser(user);
            Assert.IsTrue(registerSuccess);
            user = null;
            user = new User();
            user.Username = username;
            user.Password = password;
            var loginSuccess = userService.AuthenticateUser(user);
            Assert.IsTrue(loginSuccess);
        }
    }
}
