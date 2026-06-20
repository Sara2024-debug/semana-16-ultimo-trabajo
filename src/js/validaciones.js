export function limpiarTexto(value) {
  return String(value || '').trim();
}

export function validarBug(formData) {
  const errores = [];

  if (!limpiarTexto(formData.titulo)) {
    errores.push('Describe el error encontrado.');
  }

  if (!limpiarTexto(formData.area)) {
    errores.push('Selecciona el area del bug.');
  }

  if (!limpiarTexto(formData.prioridad)) {
    errores.push('Selecciona una prioridad.');
  }

  if (!limpiarTexto(formData.correccion)) {
    errores.push('Explica la correccion aplicada o propuesta.');
  }

  const evidencia = limpiarTexto(formData.evidencia);
  const evidenciaValida = /^evidencias\/(antes|despues|consola|json-server|responsive|coevaluacion|plan-mejora)\/.+\.(png|jpg|jpeg|webp|pdf)$/i.test(evidencia);

  if (!evidenciaValida) {
    errores.push('Escribe una ruta de evidencia valida. Ejemplo: evidencias/antes/bug-004.png');
  }

  return errores;
}

export function validarCoevaluacion(formData) {
  const errores = [];
  if (!limpiarTexto(formData.revisor)) errores.push('Escribe el nombre del revisor o equipo.');
  if (!limpiarTexto(formData.proyectoRevisado)) errores.push('Indica el proyecto revisado.');
  if (limpiarTexto(formData.fortaleza).length < 10) errores.push('La fortaleza debe ser mas especifica.');
  if (limpiarTexto(formData.mejora).length < 10) errores.push('La recomendacion de mejora debe ser mas especifica.');
  return errores;
}

export function validarMejora(formData) {
  const errores = [];
  if (!limpiarTexto(formData.titulo)) errores.push('Escribe el titulo de la mejora.');
  if (!limpiarTexto(formData.prioridad)) errores.push('Selecciona la prioridad.');
  if (limpiarTexto(formData.justificacion).length < 15) errores.push('Justifica mejor la mejora propuesta.');
  if (limpiarTexto(formData.implementacion).length < 15) errores.push('Explica como se podria implementar.');
  return errores;
}
