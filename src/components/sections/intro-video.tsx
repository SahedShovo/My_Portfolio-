import Section from "@/components/section";
import { profile } from "@/data/portfolio";

export default function IntroVideo() {
  if (!profile.videoId) return null;
  return (
    <Section id="intro" title="Intro video">
      <div className="aspect-video overflow-hidden rounded-lg border">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${profile.videoId}`}
          title="Intro video"
          allow="fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Section>
  );
}
