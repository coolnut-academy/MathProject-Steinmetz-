export function validateRoutes(routes) {
  const errors = [];
  const ids = new Map();
  const equationNumbers = new Map();

  for (const route of routes) {
    visitRoute(route, (block) => {
      if (!block.id) {
        errors.push(`Block without ID in ${route.id}`);
        return;
      }
      if (ids.has(block.id)) {
        errors.push(`Duplicate block ID: ${block.id}`);
      }
      ids.set(block.id, route.id);

      if (block.type === "equation" && block.number) {
        const key = `${route.chapter ?? route.id}:${block.number}`;
        if (equationNumbers.has(key)) {
          errors.push(`Duplicate equation number ${block.number} in ${route.id}`);
        }
        equationNumbers.set(key, block.id);
      }

      if (block.type === "equation" && !block.latex) {
        errors.push(`Equation missing LaTeX source: ${block.id}`);
      }
    });
  }

  for (const route of routes) {
    visitRoute(route, (block) => {
      for (const relatedId of block.relatedIds ?? []) {
        if (!ids.has(relatedId)) {
          errors.push(`Missing related ID ${relatedId} referenced by ${block.id}`);
        }
      }
      if (block.proves && !ids.has(block.proves)) {
        errors.push(`Proof ${block.id} references missing theorem ${block.proves}`);
      }
    });
  }

  return {
    ok: errors.length === 0,
    errors,
    ids: [...ids.keys()]
  };
}

function visitRoute(route, visitor) {
  for (const block of route.blocks ?? []) {
    visitBlock(block, visitor);
  }
}

function visitBlock(block, visitor) {
  visitor(block);
  for (const child of block.content ?? []) {
    visitBlock(child, visitor);
  }
}
