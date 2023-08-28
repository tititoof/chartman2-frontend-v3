import { RemovableRef } from "@vueuse/core"

export interface stringFunction {
  (name: RemovableRef<string> | null): string;
}
