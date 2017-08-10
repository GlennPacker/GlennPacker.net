using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GlennPacker.Startup))]
namespace GlennPacker
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
