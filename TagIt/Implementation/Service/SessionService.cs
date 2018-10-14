using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TagIt.Interface.Service;
using Microsoft.AspNetCore.Http;

namespace TagIt.Implementation.Service
{
    public class SessionService : ISessionService
    {
        private IHttpContextAccessor _httpContextAccessor;
        private ISession Session
        {
            get
            {
                return _httpContextAccessor.HttpContext.Session;
            }
        }

        public SessionService(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }


        public void SaveObject<T>(T result) where T : class
        {
            if(Session != null)
            {
                var key = typeof(T).ToString();
                Session.SetString(key, result.ToString());
            }
        }

        public T GetObject<T>() where T : class
        {
            if(Session != null)
            {
                var key = typeof(T).ToString();
                var sesResult = Session.GetString(key);
                return sesResult as T;
            }
            return null;
        }

        public void SaveObjectAsJson<T>( T result) where T : class
        {
            if (Session != null)
            {
                var key = typeof(T).ToString();
                var serializedResult = Newtonsoft.Json.JsonConvert.SerializeObject(result);
                Session.SetString(key, serializedResult);
            }
        }

        public T GetObjectAsJson<T>() where T : class
        {
            if(Session !=null)
            {
                var key = typeof(T).ToString();
                var getResult = Session.GetString(key);
                if (!string.IsNullOrEmpty(getResult))
                    return Newtonsoft.Json.JsonConvert.DeserializeObject<T>(key);
            }
            return null;
        }
    }
}
