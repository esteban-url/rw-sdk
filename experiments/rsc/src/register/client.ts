import { createServerReference as baseCreateServerReference } from "react-server-dom-webpack/client.browser";

export function createServerReference(id: string, name: string) {
  id = id + "#" + name;
  return baseCreateServerReference(id, globalThis.__rsc_callServer);
}
