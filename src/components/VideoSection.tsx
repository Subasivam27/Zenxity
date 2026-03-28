const VideoSection = () => {
  return (
    <section id="video" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-light text-primary text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See how Zenxity works in 2 minutes.
          </h2>
          <p className="text-muted-foreground text-lg">
            A farmer from Coimbatore explains how he started earning from his unused land.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
        <div className="relative w-full rounded-2xl overflow-hidden border border-border shadow-lg pt-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="How Zenxity Works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Available in Tamil & English
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
