import Image from "next/image";

export function PolandMap() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Image
        src="/maps/poland.svg"
        alt="Map of Poland with pins for Bełchatów and Kleszczów"
        width={660}
        height={580}
        style={{ width: "100%", height: "auto", transform: "scale(1.2        npm run generate-maps76)" }}
        priority
      />
    </div>
  );
}

export function NetherlandsMap() {
  return (
    <Image
      src="/maps/netherlands.svg"
      alt="Map of the Netherlands with a pin for Delft"
      width={660}
      height={580}
      style={{ width: "100%", height: "auto" }}
      priority
    />
  );
}

export function AustraliaMap() {
  return (
    <Image
      src="/maps/australia.svg"
      alt="Map of Australia with a pin for Sydney"
      width={660}
      height={580}
      style={{ width: "100%", height: "auto" }}
      priority
    />
  );
}
