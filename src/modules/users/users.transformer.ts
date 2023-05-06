export class UsersTransformer {
  static toResponse(document) {
    const { _id, email, password, firstName, lastName, createdAt, updatedAt } =
      document;
    return {
      id: _id,
      email,
      password,
      firstName,
      lastName,
      createdAt,
      updatedAt,
    };
  }
}
