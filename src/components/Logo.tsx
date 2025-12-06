import { assetPath } from "../utils/assetPath";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src={assetPath("grays-logo.png")}
        alt="Gate City Grays logo"
        className="h-14 w-14 object-contain"
      />
    </div>
  );
}
