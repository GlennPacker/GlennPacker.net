using System.Web.Optimization;

namespace GlennPacker
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
            //            "~/Scripts/jquery.validate*"));


            bundles.Add(new ScriptBundle("~/bundles/lib").Include(
                        "~/Scripts/modernizr-*",
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/angular.js",
                        "~/Scripts/angular-ui-router.js",
                        "~/Scripts/slick.js",
                        "~/Scripts/angular-slick.js",
                        "~/Scripts/lodash.js",
                        "~/Scripts/restangular.js",
                        "~/Scripts/bootstrap.js",
                        "~/Scripts/respond.js",
                        "~/Scripts/main.js"));

            bundles.Add(new ScriptBundle("~/bundles/app")
                .Include(
                    "~/js/app.js",
                    "~/js/modules.js"
            )
            .IncludeDirectory("~/js/directives", "*.js", true)
            .IncludeDirectory("~/js/Controllers", "*.js", true)
            .IncludeDirectory("~/js/Services", "*.js", true));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/skin.css",
                      "~/Content/reset.css",
                      "~/Content/site.css",
                      "~/Content/font-awesome.css"));
        }
    }
}
