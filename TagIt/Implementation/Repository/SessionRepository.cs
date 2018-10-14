using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TagIt.DataObject;
using TagIt.Interface.Repository;
using TagIt.Interface.Service;

namespace TagIt.Implementation.Repository
{
    public class SessionRepository : ISessionRepository
    {
        ISessionService SessionService { get; set; }
        public SessionRepository(ISessionService sessionService)
        {
            SessionService = sessionService;
        }

        public UserObject UserObject
        {
            get
            {
                return SessionService.GetObjectAsJson<UserObject>();
            }
            set
            {
                SessionService.SaveObjectAsJson<UserObject>(value);
            }
        }
    }

}
