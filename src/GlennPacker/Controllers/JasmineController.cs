using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GlennPacker.Controllers
{
    public class JasmineController : Controller
    {
        // GET: Jasmine
        public ActionResult Index()
        {
#if DEBUG
            return View();
#endif
        }
    }
}