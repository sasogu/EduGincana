# Itinerarios Condicionales en EduGincana

## ¿Qué son los itinerarios condicionales?

Los itinerarios condicionales permiten crear gimcanas con caminos múltiples donde la respuesta del usuario determina qué reto aparecerá a continuación. Esto permite:

- Crear experiencias adaptativas según el nivel del usuario
- Ramificar la historia en diferentes direcciones
- Ofrecer caminos alternativos según las decisiones del jugador
- Crear finales múltiples

## Cómo usar esta funcionalidad

### En el modo creador

#### Crear un nuevo reto con condiciones

1. **Crear un nuevo reto** como de costumbre (título, descripción, respuesta principal)

2. **Expandir la sección "Respuestas condicionales"** (opcional)
   - Haz clic en el desplegable "Respuestas condicionales (opcional)"

3. **Añadir condiciones**
   - Haz clic en "Afegeix condició" / "Añadir condición"
   - Para cada condición, especifica:
     - **Respuesta**: la palabra/código que activará esta condición
     - **Siguiente reto**: a dónde ir si el usuario da esta respuesta
       - "→ Següent en ordre" / "→ Siguiente en orden": continúa con el siguiente reto
       - "→ Finalitza gimcana" / "→ Finalizar gincana": termina la gimcana inmediatamente
       - "→ Salta al repte: X" / "→ Saltar al reto: X": va directamente al reto X

4. **Eliminar condiciones**
   - Haz clic en "Elimina" / "Eliminar" en la condición que quieras quitar

#### Editar condiciones en retos existentes

1. **Expandir el reto** que deseas editar en la lista de retos guardados

2. **Expandir la sección "Respuestas condicionales"** dentro del reto

3. **Modificar condiciones existentes**
   - Edita directamente el texto de la respuesta o cambia el destino en el selector
   - Los cambios se guardan automáticamente

4. **Añadir más condiciones**
   - Haz clic en "Afegeix condició" / "Añadir condición" dentro del reto
   - Define la nueva condición como se describe arriba

5. **Eliminar condiciones**
   - Haz clic en "Elimina" / "Eliminar" en la condición que quieras quitar
   - La eliminación se guarda automáticamente

### Comportamiento en el modo jugador

- Cuando el usuario envía una respuesta, el sistema verifica primero las **respuestas condicionales**
- Si coincide con alguna condición, salta al destino especificado
- Si no coincide con ninguna condición, verifica la **respuesta principal**
- Si la respuesta principal es correcta, continúa al siguiente reto en orden
- Si no coincide con ninguna respuesta, muestra mensaje de error

## Ejemplos de uso

### Ejemplo 1: Niveles de dificultad

**Reto**: "Resuelve: 2 + 2 = ?"
- Respuesta condicional: "5" → Saltar a reto de repaso
- Respuesta condicional: "4" → Saltar a reto avanzado
- Respuesta principal: "4" → Siguiente en orden

### Ejemplo 2: Ramificación de historia

**Reto**: "¿Qué camino tomas: bosque o montaña?"
- Respuesta condicional: "bosque" → Saltar al reto 5 (aventura en el bosque)
- Respuesta condicional: "montaña" → Saltar al reto 8 (aventura en la montaña)

### Ejemplo 3: Finales múltiples

**Reto final**: "¿Qué tesoro eliges?"
- Respuesta condicional: "oro" → Finalizar gimcana (final del oro)
- Respuesta condicional: "sabiduría" → Finalizar gimcana (final de la sabiduría)
- Respuesta condicional: "amistad" → Finalizar gimcana (final de la amistad)

## Notas importantes

- Las respuestas no distinguen entre mayúsculas y minúsculas
- Se eliminan espacios al principio y al final de las respuestas
- Si especificas un ID de reto que no existe, el sistema continuará al siguiente reto en orden
- La respuesta principal siempre actúa como alternativa si ninguna condición coincide
- Puedes combinar retos con y sin condiciones en la misma gimcana

## Compatibilidad

- Los proyectos creados con versiones anteriores seguirán funcionando normalmente
- Los retos sin respuestas condicionales se comportan como antes (secuencia lineal)
- Al exportar/importar gimcanas en formato ZIP o JSON, las respuestas condicionales se preservan
