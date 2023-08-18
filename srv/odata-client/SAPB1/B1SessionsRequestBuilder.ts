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
import { B1Sessions } from './B1Sessions';

/**
 * Request builder class for operations supported on the {@link B1Sessions} entity.
 */
export class B1SessionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<B1Sessions<T>, T> {
  /**
   * Returns a request builder for retrieving one `B1Sessions` entity based on its keys.
   * @param sessionId Key property. See {@link B1Sessions.sessionId}.
   * @returns A request builder for creating requests to retrieve one `B1Sessions` entity based on its keys.
   */
  getByKey(
    sessionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<B1Sessions<T>, T> {
    return new GetByKeyRequestBuilder<B1Sessions<T>, T>(this.entityApi, {
      SessionId: sessionId
    });
  }

  /**
   * Returns a request builder for querying all `B1Sessions` entities.
   * @returns A request builder for creating requests to retrieve all `B1Sessions` entities.
   */
  getAll(): GetAllRequestBuilder<B1Sessions<T>, T> {
    return new GetAllRequestBuilder<B1Sessions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `B1Sessions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `B1Sessions`.
   */
  create(entity: B1Sessions<T>): CreateRequestBuilder<B1Sessions<T>, T> {
    return new CreateRequestBuilder<B1Sessions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `B1Sessions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `B1Sessions`.
   */
  update(entity: B1Sessions<T>): UpdateRequestBuilder<B1Sessions<T>, T> {
    return new UpdateRequestBuilder<B1Sessions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `B1Sessions`.
   * @param sessionId Key property. See {@link B1Sessions.sessionId}.
   * @returns A request builder for creating requests that delete an entity of type `B1Sessions`.
   */
  delete(sessionId: string): DeleteRequestBuilder<B1Sessions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `B1Sessions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `B1Sessions` by taking the entity as a parameter.
   */
  delete(entity: B1Sessions<T>): DeleteRequestBuilder<B1Sessions<T>, T>;
  delete(sessionIdOrEntity: any): DeleteRequestBuilder<B1Sessions<T>, T> {
    return new DeleteRequestBuilder<B1Sessions<T>, T>(
      this.entityApi,
      sessionIdOrEntity instanceof B1Sessions
        ? sessionIdOrEntity
        : { SessionId: sessionIdOrEntity! }
    );
  }
}
