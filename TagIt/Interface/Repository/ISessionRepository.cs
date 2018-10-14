using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TagIt.DataObject;

namespace TagIt.Interface.Repository
{
    public interface ISessionRepository
    {
        UserObject UserObject { get; set; }

    }
}
