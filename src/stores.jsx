import { createEffect, createRoot, createSignal } from "solid-js";
import zxcvbn from "zxcvbn"

import { generate } from "./assets/generate";

export const [config, setConfig] = createSignal({
    length: 0,
    // uppercase: false,
    // lowercase: false,
    // numbers: false,
    // symbols: false,
})

export const [result, setResult] = createSignal("")
export const [strength, setStrength] = createSignal("")

export function generateNew() {
    const pw = generate(config())
    const newStrength = zxcvbn(pw)
    setResult(pw)
    setStrength(newStrength)
}

createRoot(() => {
    createEffect(generateNew)
})