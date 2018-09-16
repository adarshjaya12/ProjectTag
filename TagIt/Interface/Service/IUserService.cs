using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TagIt.Controllers;
using TagIt.DataObject;

namespace TagIt.Interface.Service
{
    public interface IUserService
    {
        bool CreateUser(User user);

        void UpdateUser(User user);

        UserObject GetUser(Guid id);

        bool AuthenticateUser(User user);

    }
}
