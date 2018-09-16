using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using TagIt.Controllers;
using TagIt.DataObject;
using TagIt.DBContext;
using TagIt.Interface.Service;

namespace TagIt.Implementation.Service
{

    public class EncryptedObject
    {
        public string HasedPassword { get; set; }
        public string Salt { get; set; }

    }
    public class UserService : IUserService
    {

        private TagItDBContext DatabaseObject
        {
            get { return new TagItDBContext(); }
        }

        private EncryptedObject EncryptedPassword(string password)
        {
            byte[] salt = null;
            new RNGCryptoServiceProvider().GetBytes(salt = new byte[16]);
            var pbkdf2 = new Rfc2898DeriveBytes(password, salt, 1000);

            byte[] hash = pbkdf2.GetBytes(20);

            byte[] hashBytes = new byte[36];

            Array.Copy(salt, 0, hashBytes, 0, 16);
            Array.Copy(hash, 0, hashBytes, 16, 20);

            string hashedPassword = Convert.ToBase64String(hashBytes);
            string saltPassword = Convert.ToBase64String(salt);
            return new EncryptedObject()
            {
                HasedPassword = hashedPassword, Salt = saltPassword
            };
        }

        private bool AuthenticatePassword(UserObject user,string password)
        {
            byte[] hashBytes = Convert.FromBase64String(user.HashedPassword);

            byte[] salt = new byte[16];
            Array.Copy(hashBytes, 0, salt, 0, 16);

            var pbkdf2 = new Rfc2898DeriveBytes(password, salt, 1000);
            byte[] hash = pbkdf2.GetBytes(20);

            bool valid = true;
            for(int i=0; i < 20; i++)
            {
                if (hashBytes[i + 16] != hash[i])
                {
                    valid = false;
                    break;
                }

            }
            return valid;
        }

        public bool AuthenticateUser(User user)
        {
            var userAccount = DatabaseObject.UserObject.FirstOrDefault(p => p.UserName == user.Username);
            if (userAccount == null)
                return false;
            return AuthenticatePassword(userAccount,user.Password);
        }

        public bool CreateUser(User user)
        {
            var userAccount = DatabaseObject.UserObject.FirstOrDefault(p => p.UserName == user.Username);
            if (userAccount != null)
                return false;
            EncryptedObject hashedPassword = EncryptedPassword(user.Password);
            UserObject userObject = SetUserObject(user, null);
            using (TagItDBContext dbContext = new TagItDBContext())
            {
                userObject.HashedPassword = hashedPassword.HasedPassword;
                userObject.PasswordSalt = hashedPassword.Salt;
                dbContext.UserObject.Add(userObject);
                dbContext.SaveChanges();
            }
            return true;
        }

        private UserObject SetUserObject(User user, UserObject userObject)
        {
            UserObject usrObject = userObject ?? new UserObject();
            usrObject.FirstName = user.FirstName;
            usrObject.LastName = user.LastName;
            usrObject.UserName = user.Username;
            usrObject.UserEmail = user.UserEmail;
            return usrObject;
        }

        
        public void UpdateUser(User user)
        {
            var userdata = DatabaseObject.UserObject.FirstOrDefault(tg => tg.Id == user.Id);
            EncryptedObject hashedPassword = EncryptedPassword(user.Password);
            UserObject userObject = SetUserObject(user, userdata);
            using (TagItDBContext dbContext = new TagItDBContext())
            {
                userObject.HashedPassword = hashedPassword.HasedPassword;
                userObject.PasswordSalt = hashedPassword.Salt;
                dbContext.UserObject.Update(userObject);
                dbContext.SaveChanges();
            }
        }

        public UserObject GetUser(Guid id)
        {
            var user = DatabaseObject.UserObject.FirstOrDefault(tg => tg.Id == id);
            user.HashedPassword = string.Empty;
            user.PasswordSalt = string.Empty;
            return user;
        }
    }
}
