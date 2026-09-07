import { useEffect, useRef } from "react";

export const BackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Strict muted enforcement for mobile & desktop autoplay policies
    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      if (video.paused) {
        video.play().catch(() => {
          // Autoplay policy prevented immediate playback; interaction handlers will retry
        });
      }
    };

    // Immediate attempt on mount
    tryPlay();

    // Fallback: trigger playback seamlessly on user interaction
    const onUserInteraction = () => {
      tryPlay();
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener("touchstart", onUserInteraction);
      window.removeEventListener("pointerdown", onUserInteraction);
      window.removeEventListener("scroll", onUserInteraction);
      window.removeEventListener("keydown", onUserInteraction);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        tryPlay();
      }
    };

    window.addEventListener("touchstart", onUserInteraction, { passive: true, once: true });
    window.addEventListener("pointerdown", onUserInteraction, { passive: true, once: true });
    window.addEventListener("scroll", onUserInteraction, { passive: true, once: true });
    window.addEventListener("keydown", onUserInteraction, { passive: true, once: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cleanupListeners();
    };
  }, []);

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <div
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        onEnded={handleEnded}
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none opacity-45"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      {/* Cinematic dark tint overlay */}
      <div className="absolute inset-0 bg-[#05080F]/65 backdrop-blur-[0.5px]" />
    </div>
  );
};

export default BackgroundVideo;