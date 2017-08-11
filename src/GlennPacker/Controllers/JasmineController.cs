using System.Web.Mvc;

namespace GlennPacker.Controllers
{
    public class JasmineController : Controller
    {
#if DEBUG        
        // GET: Jasmine
        public ActionResult Index()
        {

            return View();

        }
#endif
    }
}