using System.Web.Http;
using GlennPacker.Core;
using GlennPacker.Entities.Models;

namespace GlennPacker.Controllers
{
    public class ContactController : ApiController
    {
        private readonly IEmailServiceWrapper _emailServiceWrapper;

        public ContactController(IEmailServiceWrapper emailServiceWrapper)
        {
            _emailServiceWrapper = emailServiceWrapper;
        }
        
        public IHttpActionResult Post([FromBody]ContactUs model)
        {
            if (ModelState.IsValid)
            {
                 var email = new EmailMessage(model);
                _emailServiceWrapper.SendContactUsEmail(email);
                return Ok("sent");
            }
            return BadRequest("Form data was invalid");
        }
    }
}