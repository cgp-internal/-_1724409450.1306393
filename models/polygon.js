class Polygon {
  constructor(id, vertices) {
    this.id = id;
    this.vertices = vertices;
  }

  getId() {
    return this.id;
  }

  getVertices() {
    return this.vertices;
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
  }

  removeVertex(vertex) {
    const index = this.vertices.indexOf(vertex);
    if (index !== -1) {
      this.vertices.splice(index, 1);
    }
  }

  toString() {
    return `Polygon ${this.id} with vertices ${this.vertices.join(', ')}`;
  }
}

module.exports = Polygon;