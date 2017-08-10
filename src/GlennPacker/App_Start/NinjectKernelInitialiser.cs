using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GlennPacker.Core;
using GlennPacker.Entities;
using GlennPacker.Services;
using Ninject;

namespace GlennPacker
{
    public class NinjectKernelInitialiser
    {
        public static void Configure(IKernel kernel)
        {
            BindReal(kernel);
        }

        private static void BindReal(IKernel kernel)
        {
            kernel.Bind<IConfiguration>().To<Configuration>();
            kernel.Bind<IEmailServiceWrapper>().To<EmailServiceWrapper>();
            kernel.Bind<IEmailService>().To<Services.EmailService>();
        }

        private static void BindFakes(IKernel kernel)
        {
        }
    }
}