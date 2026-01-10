
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-xl px-4">
          <h1 className="text-6xl md:text-8xl font-heading text-foreground mb-6">404</h1>
          <p className="text-xl text-foreground mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-muted-foreground mb-10">
            It seems you've ventured into uncharted territory. Let's get you back on track to the IYES experience.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
