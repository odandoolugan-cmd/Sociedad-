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

        // 2. Añadir botón "Temas filosóficos" al DOM
        const toolbar = document.querySelector('.toolbar') || document.querySelector('body');
        const btn = document.createElement('button');
        btn.className = 'tool-btn';
        btn.textContent = '🏛️ Temas filosóficos';
        btn.style.cssText = 'padding: 8px 12px; margin: 4px; border-radius: 6px; background: #8b5cf6; color: white; border: none; cursor: pointer; font-size: 12px;';
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
        toolbar.appendChild(btn);

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
