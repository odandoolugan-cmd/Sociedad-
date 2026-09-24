// ============================================================
// mejoras/mejoras.js — Mejoras inyectadas sin tocar index.html
// ============================================================

(async () => {
    console.log('🚀 Mejoras cargando...');

    // 1. Cargar pkg_aristo (WASM de filosofía)
    try {
        const aristo = await import('../pkg_aristo/aristo_wasm.js');
        await aristo.default('../pkg_aristo/aristo_wasm_bg.wasm');
        window.aristoWasm = aristo;
        console.log('✅ pkg_aristo cargado:', aristo.aristo_version ? aristo.aristo_version() : '1.0');

        // 2. Añadir botón "Temas filosóficos" FLOTANTE (siempre visible)
        const btn = document.createElement('button');
        btn.className = 'tool-btn mejoras-btn';
        btn.textContent = '🏛️ Temas filosóficos';
        btn.style.cssText = 'position: fixed; top: 80px; right: 10px; z-index: 99999; padding: 10px 16px; border-radius: 8px; background: linear-gradient(90deg, #8b5cf6, #ec4899); color: white; border: 2px solid #a78bfa; font-weight: bold; box-shadow: 0 4px 12px rgba(139,92,246,0.5); cursor: pointer; font-size: 13px;';
        btn.onclick = () => {
            const texto = prompt('Escribe un texto para analizar:') || '';
            if (!texto) return;
            const temas = JSON.parse(aristo.detectar_temas_filosoficos(texto));
            const escuela = aristo.detectar_escuela_predominante(texto);
            const profundidad = aristo.profundidad_filosofica(texto);
            alert(
                'Temas: ' + temas.map(t => t.tema).join(', ') + '\n' +
                'Escuela: ' + escuela + '\n' +
                'Profundidad: ' + (profundidad * 100).toFixed(0) + '%'
            );
        };
        document.body.appendChild(btn);

        // 3. Exponer funciones globalmente para debug
        window.mejoras = {
            temas: (t) => JSON.parse(aristo.detectar_temas_filosoficos(t)),
            escuela: (t) => aristo.detectar_escuela_predominante(t),
            profundidad: (t) => aristo.profundidad_filosofica(t),
            cita: () => JSON.parse(aristo.cita_filosofica()),
            falacias: (t) => JSON.parse(aristo.detectar_falacias(t)),
            analizar: (t) => JSON.parse(aristo.analizar_argumento(t)),
            glosario: (term) => JSON.parse(aristo.glosario_filosofico(term)),
            escuelas: () => JSON.parse(aristo.listar_escuelas()),
            stats: () => JSON.parse(aristo.aristo_stats()),
        };

        console.log('✅ Mejoras cargadas correctamente');
    } catch (e) {
        console.warn('⚠️ Mejoras no disponibles:', e);
    }
})();
