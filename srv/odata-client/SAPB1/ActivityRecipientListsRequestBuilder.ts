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
import { ActivityRecipientLists } from './ActivityRecipientLists';

/**
 * Request builder class for operations supported on the {@link ActivityRecipientLists} entity.
 */
export class ActivityRecipientListsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ActivityRecipientLists<T>, T> {
  /**
   * Returns a request builder for retrieving one `ActivityRecipientLists` entity based on its keys.
   * @param code Key property. See {@link ActivityRecipientLists.code}.
   * @returns A request builder for creating requests to retrieve one `ActivityRecipientLists` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ActivityRecipientLists<T>, T> {
    return new GetByKeyRequestBuilder<ActivityRecipientLists<T>, T>(
      this.entityApi,
      { Code: code }
    );
  }

  /**
   * Returns a request builder for querying all `ActivityRecipientLists` entities.
   * @returns A request builder for creating requests to retrieve all `ActivityRecipientLists` entities.
   */
  getAll(): GetAllRequestBuilder<ActivityRecipientLists<T>, T> {
    return new GetAllRequestBuilder<ActivityRecipientLists<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ActivityRecipientLists` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ActivityRecipientLists`.
   */
  create(
    entity: ActivityRecipientLists<T>
  ): CreateRequestBuilder<ActivityRecipientLists<T>, T> {
    return new CreateRequestBuilder<ActivityRecipientLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ActivityRecipientLists`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ActivityRecipientLists`.
   */
  update(
    entity: ActivityRecipientLists<T>
  ): UpdateRequestBuilder<ActivityRecipientLists<T>, T> {
    return new UpdateRequestBuilder<ActivityRecipientLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ActivityRecipientLists`.
   * @param code Key property. See {@link ActivityRecipientLists.code}.
   * @returns A request builder for creating requests that delete an entity of type `ActivityRecipientLists`.
   */
  delete(code: number): DeleteRequestBuilder<ActivityRecipientLists<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ActivityRecipientLists`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ActivityRecipientLists` by taking the entity as a parameter.
   */
  delete(
    entity: ActivityRecipientLists<T>
  ): DeleteRequestBuilder<ActivityRecipientLists<T>, T>;
  delete(
    codeOrEntity: any
  ): DeleteRequestBuilder<ActivityRecipientLists<T>, T> {
    return new DeleteRequestBuilder<ActivityRecipientLists<T>, T>(
      this.entityApi,
      codeOrEntity instanceof ActivityRecipientLists
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
