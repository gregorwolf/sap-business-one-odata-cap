/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Relationships } from './Relationships';

/**
 * Request builder class for operations supported on the [[Relationships]] entity.
 */
export class RelationshipsRequestBuilder extends RequestBuilder<Relationships> {
  /**
   * Returns a request builder for retrieving one `Relationships` entity based on its keys.
   * @param relationshipCode Key property. See [[Relationships.relationshipCode]].
   * @returns A request builder for creating requests to retrieve one `Relationships` entity based on its keys.
   */
  getByKey(relationshipCode: number): GetByKeyRequestBuilderV4<Relationships> {
    return new GetByKeyRequestBuilderV4(Relationships, { RelationshipCode: relationshipCode });
  }

  /**
   * Returns a request builder for querying all `Relationships` entities.
   * @returns A request builder for creating requests to retrieve all `Relationships` entities.
   */
  getAll(): GetAllRequestBuilderV4<Relationships> {
    return new GetAllRequestBuilderV4(Relationships);
  }

  /**
   * Returns a request builder for creating a `Relationships` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Relationships`.
   */
  create(entity: Relationships): CreateRequestBuilderV4<Relationships> {
    return new CreateRequestBuilderV4(Relationships, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Relationships`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Relationships`.
   */
  update(entity: Relationships): UpdateRequestBuilderV4<Relationships> {
    return new UpdateRequestBuilderV4(Relationships, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Relationships`.
   * @param relationshipCode Key property. See [[Relationships.relationshipCode]].
   * @returns A request builder for creating requests that delete an entity of type `Relationships`.
   */
  delete(relationshipCode: number): DeleteRequestBuilderV4<Relationships>;
  /**
   * Returns a request builder for deleting an entity of type `Relationships`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Relationships` by taking the entity as a parameter.
   */
  delete(entity: Relationships): DeleteRequestBuilderV4<Relationships>;
  delete(relationshipCodeOrEntity: any): DeleteRequestBuilderV4<Relationships> {
    return new DeleteRequestBuilderV4(Relationships, relationshipCodeOrEntity instanceof Relationships ? relationshipCodeOrEntity : { RelationshipCode: relationshipCodeOrEntity! });
  }
}
