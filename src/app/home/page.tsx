import Hero from "./Hero";
import MainShowcase from "./MainShowcase";
import StoryAndStyle from "./StoryAndStyle";

export default function HomePage() {
  return (
    <main className="space-y-12">
      <Hero />
      <MainShowcase />
      <StoryAndStyle />
    </main>
  );
}
