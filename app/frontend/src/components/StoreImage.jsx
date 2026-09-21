import { useState } from "react";
import { Camera } from "lucide-react";

export const StoreImage = ({ src, alt, className = "", placeholderLabel }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 border border-dashed border-brass/40 bg-parchment p-4 text-center ${className}`}
        data-testid={`placeholder-${src.split("/").pop().replace(".", "-")}`}
      >
        <Camera className="h-7 w-7 text-brass" aria-hidden="true" />
        <p className="text-sm font-medium text-ink">{placeholderLabel}</p>
        <p className="text-[11px] text-inksoft">public{src}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
};
