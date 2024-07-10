uniform sampler2D uPositions;
uniform float uTime;
uniform vec2 uCursor;

void main() {
  vec2 cursorOffset = uCursor * 0.1; 
  vec3 cursorOffset3D = vec3(cursorOffset.x, cursorOffset.y, 0.0); 
  vec3 pos = texture2D(uPositions, position.xy).xyz;

  float distanceToCursor = distance(uCursor, position.xy);
  float influenceRadius = 0.6; // adjust this value to change the influence radius

   // Modify position based on cursor proximity
    if (distanceToCursor < influenceRadius) {
        pos.xy += normalize(pos.xy - uCursor) * (influenceRadius - distanceToCursor);
    }

  vec4 modelPosition = modelMatrix * vec4(pos, 1.0); 
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
  gl_PointSize = 3.0;
  // Size attenuation;
  gl_PointSize *= step(1.0 - (1.0/64.0), position.x) + 0.5;
}
