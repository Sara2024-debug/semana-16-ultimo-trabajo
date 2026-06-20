# 01 - Registro de bugs final

| ID | Error encontrado | Área | Prioridad | Evidencia antes | Corrección aplicada | Archivo modificado | Estado |
|---|---|---|---|---|---|---|---|
| BUG-001 | La ruta de evidencia del bug no era obligatoria ni validada. | Validación / QA | Alta | `evidencias/antes/evidencia-no-validada.png` | Se agregó validación para exigir rutas reales dentro de la carpeta `evidencias/`. | `src/js/validaciones.js` | Corregido |
| BUG-002 | El botón de eliminar bug borraba registros sin confirmación previa. | Usabilidad / Integridad | Alta | `evidencias/antes/eliminar-sin-confirmacion.png` | Se agregó confirmación con SweetAlert2 antes de eliminar. | `src/js/qa.js` | Corregido |
| BUG-003 | Los documentos técnicos de QA final estaban incompletos. | Documentación | Media | `evidencias/antes/docs-vacios.png` | Se completaron registro de bugs, coevaluación, comparación, plan, checklist, informe y preguntas de defensa. | `docs/` | Corregido |
| BUG-004 | Faltaba justificar el plan de mejora final. | Mejora continua | Media | `evidencias/antes/plan-vacio.png` | Se completó el plan de mejora con prioridades, implementación y beneficios. | `docs/04-plan-mejora-final.md` | Corregido |
| BUG-005 | El checklist final no tenía evidencias relacionadas. | QA final | Media | `evidencias/antes/checklist-vacio.png` | Se diligenció el checklist con rutas sugeridas de evidencias. | `docs/05-checklist-qa-final.md` | Corregido |

## Cómo definir la prioridad

- **Alta:** afecta una función principal del proyecto.
- **Media:** afecta usabilidad, documentación, presentación o experiencia.
- **Baja:** detalle visual, mejora menor o ajuste no crítico.

## Reflexión breve

El bug más importante fue el de eliminar registros sin confirmación, porque podía causar pérdida accidental de información. Al agregar una alerta con SweetAlert2, el usuario debe confirmar antes de borrar y eso mejora la seguridad de uso del sistema.
