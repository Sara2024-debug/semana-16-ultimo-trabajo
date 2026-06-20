# 06 - Informe de correcciones aplicadas

## 1. Resumen del proyecto

- Nombre del proyecto: Feria Rural Digital PRO - QA Final Semana 16
- Integrantes: Sara Nikol Salgado Villada
- Fecha: Semana 16

## 2. Errores más importantes detectados

1. La evidencia del bug no se validaba como ruta real.
2. La eliminación de bugs no pedía confirmación.
3. Los documentos de QA final estaban incompletos.

## 3. Correcciones aplicadas

| Error | Corrección | Archivo modificado | Evidencia |
|---|---|---|---|
| Evidencia sin validación | Se agregó patrón para exigir rutas como `evidencias/antes/bug.png`. | `src/js/validaciones.js` | `evidencias/despues/evidencia-validada.png` |
| Eliminación sin confirmación | Se agregó alerta con SweetAlert2 antes de borrar. | `src/js/qa.js` | `evidencias/despues/eliminar-confirmacion.png` |
| Documentos incompletos | Se diligenciaron todos los documentos técnicos. | `docs/` | `evidencias/despues/docs-completos.png` |

## 4. Decisiones técnicas tomadas

> Decidí fortalecer la validación de evidencias porque la actividad se basa en demostrar pruebas reales. También agregué confirmación antes de eliminar porque es una acción delicada que puede borrar información del proceso QA.

## 5. Resultado final

> El proyecto quedó más completo, seguro y organizado. Ahora permite registrar bugs con evidencia válida, eliminar con confirmación, revisar dashboard, completar checklist y sustentar un plan de mejora final.

## 6. Preparación para exposición

> Durante la exposición puedo mostrar los bugs registrados, explicar las correcciones, enseñar la comparación antes/después y defender el plan de mejora continua.
