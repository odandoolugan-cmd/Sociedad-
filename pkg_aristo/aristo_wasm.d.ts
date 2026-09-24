/* tslint:disable */
/* eslint-disable */

export function analizar_argumento(texto: string): string;

export function aristo_stats(): string;

export function aristo_version(): string;

export function cita_filosofica(): string;

export function comparar_filosofos(a: string, b: string): string;

export function detectar_escuela_predominante(texto: string): string;

export function detectar_falacias(texto: string): string;

export function detectar_temas_filosoficos(texto: string): string;

export function glosario_filosofico(termino: string): string;

export function listar_escuelas(): string;

export function listar_filosofos(): string;

export function pregunta_socratica(tema: string): string;

export function profundidad_filosofica(texto: string): number;

export function resumen_filosofico(texto: string): string;

export function validar_coherencia(texto: string): number;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly analizar_argumento: (a: number, b: number) => [number, number];
    readonly aristo_stats: () => [number, number];
    readonly aristo_version: () => [number, number];
    readonly cita_filosofica: () => [number, number];
    readonly comparar_filosofos: (a: number, b: number, c: number, d: number) => [number, number];
    readonly detectar_escuela_predominante: (a: number, b: number) => [number, number];
    readonly detectar_falacias: (a: number, b: number) => [number, number];
    readonly detectar_temas_filosoficos: (a: number, b: number) => [number, number];
    readonly glosario_filosofico: (a: number, b: number) => [number, number];
    readonly listar_escuelas: () => [number, number];
    readonly listar_filosofos: () => [number, number];
    readonly pregunta_socratica: (a: number, b: number) => [number, number];
    readonly profundidad_filosofica: (a: number, b: number) => number;
    readonly resumen_filosofico: (a: number, b: number) => [number, number];
    readonly validar_coherencia: (a: number, b: number) => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
