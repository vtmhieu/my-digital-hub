import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <SiteLayout>
      <section className="container-page pt-20 md:pt-28">
        <p className="font-mono text-sm text-muted-foreground">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tighter md:text-6xl">This page doesn't exist.</h1>
        <p className="mt-5 max-w-[48ch] text-lg text-muted-foreground">
          The link may be old or mistyped. Everything on the site is reachable from the home page.
        </p>
        <Button className="mt-8" size="lg" asChild>
          <Link to="/">
            <ArrowLeft strokeWidth={1.75} />
            Back to home
          </Link>
        </Button>
      </section>
    </SiteLayout>
  );
};

export default NotFound;
