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
import { SingleUserConnections } from './SingleUserConnections';

/**
 * Request builder class for operations supported on the {@link SingleUserConnections} entity.
 */
export class SingleUserConnectionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SingleUserConnections<T>, T> {
  /**
   * Returns a request builder for retrieving one `SingleUserConnections` entity based on its keys.
   * @param code Key property. See {@link SingleUserConnections.code}.
   * @returns A request builder for creating requests to retrieve one `SingleUserConnections` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SingleUserConnections<T>, T> {
    return new GetByKeyRequestBuilder<SingleUserConnections<T>, T>(
      this.entityApi,
      { Code: code }
    );
  }

  /**
   * Returns a request builder for querying all `SingleUserConnections` entities.
   * @returns A request builder for creating requests to retrieve all `SingleUserConnections` entities.
   */
  getAll(): GetAllRequestBuilder<SingleUserConnections<T>, T> {
    return new GetAllRequestBuilder<SingleUserConnections<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SingleUserConnections` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SingleUserConnections`.
   */
  create(
    entity: SingleUserConnections<T>
  ): CreateRequestBuilder<SingleUserConnections<T>, T> {
    return new CreateRequestBuilder<SingleUserConnections<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SingleUserConnections`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SingleUserConnections`.
   */
  update(
    entity: SingleUserConnections<T>
  ): UpdateRequestBuilder<SingleUserConnections<T>, T> {
    return new UpdateRequestBuilder<SingleUserConnections<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SingleUserConnections`.
   * @param code Key property. See {@link SingleUserConnections.code}.
   * @returns A request builder for creating requests that delete an entity of type `SingleUserConnections`.
   */
  delete(code: number): DeleteRequestBuilder<SingleUserConnections<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SingleUserConnections`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SingleUserConnections` by taking the entity as a parameter.
   */
  delete(
    entity: SingleUserConnections<T>
  ): DeleteRequestBuilder<SingleUserConnections<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<SingleUserConnections<T>, T> {
    return new DeleteRequestBuilder<SingleUserConnections<T>, T>(
      this.entityApi,
      codeOrEntity instanceof SingleUserConnections
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
