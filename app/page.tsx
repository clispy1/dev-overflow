import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <h1 className="h1-bold text-red-500">Welcome to Dev Overflow</h1>
      <p>
        Dev Overflow is a community-driven platform for asking and answering
        programming questions. Get help, share knowledge, and collaborate with
        developers from around the world. Explore topics in web development,
        mobile app development, algorithms, data structures, and more.
      </p>
      <Button>Get Started</Button>
    </div>
  );
};

export default Home;
