import tailwindConfig from "../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);

export function useBreakpoints() {
  return Object.keys(fullConfig.theme.screens).find(
    key => window.innerWidth > fullConfig.theme.screens[key]
  );
}
