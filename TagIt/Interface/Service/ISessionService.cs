using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TagIt.Interface.Service
{
    public interface ISessionService
    {
        void SaveObject<T>(T result) where T : class;
        T GetObject<T>() where T : class;
        void SaveObjectAsJson<T>(T result) where T : class;
        T GetObjectAsJson<T>() where T : class;

    }
}
