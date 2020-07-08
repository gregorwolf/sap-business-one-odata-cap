/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { B1Sessions } from './B1Sessions';

/**
 * Request builder class for operations supported on the [[B1Sessions]] entity.
 */
export class B1SessionsRequestBuilder extends RequestBuilder<B1Sessions> {
  /**
   * Returns a request builder for retrieving one `B1Sessions` entity based on its keys.
   * @param sessionId Key property. See [[B1Sessions.sessionId]].
   * @returns A request builder for creating requests to retrieve one `B1Sessions` entity based on its keys.
   */
  getByKey(sessionId: string): GetByKeyRequestBuilder<B1Sessions> {
    return new GetByKeyRequestBuilder(B1Sessions, { SessionId: sessionId });
  }

  /**
   * Returns a request builder for querying all `B1Sessions` entities.
   * @returns A request builder for creating requests to retrieve all `B1Sessions` entities.
   */
  getAll(): GetAllRequestBuilder<B1Sessions> {
    return new GetAllRequestBuilder(B1Sessions);
  }

  /**
   * Returns a request builder for creating a `B1Sessions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `B1Sessions`.
   */
  create(entity: B1Sessions): CreateRequestBuilder<B1Sessions> {
    return new CreateRequestBuilder(B1Sessions, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `B1Sessions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `B1Sessions`.
   */
  update(entity: B1Sessions): UpdateRequestBuilder<B1Sessions> {
    return new UpdateRequestBuilder(B1Sessions, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `B1Sessions`.
   * @param sessionId Key property. See [[B1Sessions.sessionId]].
   * @returns A request builder for creating requests that delete an entity of type `B1Sessions`.
   */
  delete(sessionId: string): DeleteRequestBuilder<B1Sessions>;
  /**
   * Returns a request builder for deleting an entity of type `B1Sessions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `B1Sessions` by taking the entity as a parameter.
   */
  delete(entity: B1Sessions): DeleteRequestBuilder<B1Sessions>;
  delete(sessionIdOrEntity: any): DeleteRequestBuilder<B1Sessions> {
    return new DeleteRequestBuilder(B1Sessions, sessionIdOrEntity instanceof B1Sessions ? sessionIdOrEntity : { SessionId: sessionIdOrEntity! });
  }
}
