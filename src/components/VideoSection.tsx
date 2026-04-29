const VideoSection = () => {
  return (
    <section id="video" className="py-20 md:py-28 bg-[#edf2fb]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Vision Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-light text-primary text-sm font-medium mb-4">
              Partner With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Partner With Us Today
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              If you own agricultural land but cannot actively manage it, Zenxity can help you generate income from it while ensuring modern, sustainable farming practices. Submit your details and our team will contact you to discuss the next steps.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Maximize your land's potential</h3>
                  <p className="text-muted-foreground text-sm">with professional management</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Receive regular updates</h3>
                  <p className="text-muted-foreground text-sm">directly on your device</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Completely hands-off experience</h3>
                  <p className="text-muted-foreground text-sm">for landowners</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Sustainable and modern farming</h3>
                  <p className="text-muted-foreground text-sm">practices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="mt-24">
            <div className="relative w-full rounded-2xl overflow-hidden border border-border shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/wq2myRZv3t0"
                title="See how Zenxity works in 2 minutes"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full aspect-video"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Available in Tamil & English. Click play to watch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

