export class SlugsTransformer {
  static toResponse(document) {
    const { _id, slug, url, createdAt, updatedAt } = document;
    return {
      id: _id,
      slug,
      url,
      createdAt,
      updatedAt,
    };
  }
}
