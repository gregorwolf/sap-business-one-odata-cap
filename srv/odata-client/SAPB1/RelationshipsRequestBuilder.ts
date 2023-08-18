/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { Relationships } from './Relationships';

/**
 * Request builder class for operations supported on the {@link Relationships} entity.
 */
export class RelationshipsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Relationships<T>, T> {
  /**
   * Returns a request builder for retrieving one `Relationships` entity based on its keys.
   * @param relationshipCode Key property. See {@link Relationships.relationshipCode}.
   * @returns A request builder for creating requests to retrieve one `Relationships` entity based on its keys.
   */
  getByKey(
    relationshipCode: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Relationships<T>, T> {
    return new GetByKeyRequestBuilder<Relationships<T>, T>(this.entityApi, {
      RelationshipCode: relationshipCode
    });
  }

  /**
   * Returns a request builder for querying all `Relationships` entities.
   * @returns A request builder for creating requests to retrieve all `Relationships` entities.
   */
  getAll(): GetAllRequestBuilder<Relationships<T>, T> {
    return new GetAllRequestBuilder<Relationships<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Relationships` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Relationships`.
   */
  create(entity: Relationships<T>): CreateRequestBuilder<Relationships<T>, T> {
    return new CreateRequestBuilder<Relationships<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `Relationships`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Relationships`.
   */
  update(entity: Relationships<T>): UpdateRequestBuilder<Relationships<T>, T> {
    return new UpdateRequestBuilder<Relationships<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Relationships`.
   * @param relationshipCode Key property. See {@link Relationships.relationshipCode}.
   * @returns A request builder for creating requests that delete an entity of type `Relationships`.
   */
  delete(relationshipCode: number): DeleteRequestBuilder<Relationships<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Relationships`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Relationships` by taking the entity as a parameter.
   */
  delete(entity: Relationships<T>): DeleteRequestBuilder<Relationships<T>, T>;
  delete(
    relationshipCodeOrEntity: any
  ): DeleteRequestBuilder<Relationships<T>, T> {
    return new DeleteRequestBuilder<Relationships<T>, T>(
      this.entityApi,
      relationshipCodeOrEntity instanceof Relationships
        ? relationshipCodeOrEntity
        : { RelationshipCode: relationshipCodeOrEntity! }
    );
  }
}
