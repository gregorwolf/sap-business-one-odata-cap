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
import { RecurringPostings } from './RecurringPostings';

/**
 * Request builder class for operations supported on the {@link RecurringPostings} entity.
 */
export class RecurringPostingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RecurringPostings<T>, T> {
  /**
   * Returns a request builder for retrieving one `RecurringPostings` entity based on its keys.
   * @param code Key property. See {@link RecurringPostings.code}.
   * @param instance Key property. See {@link RecurringPostings.instance}.
   * @returns A request builder for creating requests to retrieve one `RecurringPostings` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>,
    instance: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RecurringPostings<T>, T> {
    return new GetByKeyRequestBuilder<RecurringPostings<T>, T>(this.entityApi, {
      Code: code,
      Instance: instance
    });
  }

  /**
   * Returns a request builder for querying all `RecurringPostings` entities.
   * @returns A request builder for creating requests to retrieve all `RecurringPostings` entities.
   */
  getAll(): GetAllRequestBuilder<RecurringPostings<T>, T> {
    return new GetAllRequestBuilder<RecurringPostings<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RecurringPostings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RecurringPostings`.
   */
  create(
    entity: RecurringPostings<T>
  ): CreateRequestBuilder<RecurringPostings<T>, T> {
    return new CreateRequestBuilder<RecurringPostings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RecurringPostings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RecurringPostings`.
   */
  update(
    entity: RecurringPostings<T>
  ): UpdateRequestBuilder<RecurringPostings<T>, T> {
    return new UpdateRequestBuilder<RecurringPostings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RecurringPostings`.
   * @param code Key property. See {@link RecurringPostings.code}.
   * @param instance Key property. See {@link RecurringPostings.instance}.
   * @returns A request builder for creating requests that delete an entity of type `RecurringPostings`.
   */
  delete(
    code: string,
    instance: number
  ): DeleteRequestBuilder<RecurringPostings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RecurringPostings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RecurringPostings` by taking the entity as a parameter.
   */
  delete(
    entity: RecurringPostings<T>
  ): DeleteRequestBuilder<RecurringPostings<T>, T>;
  delete(
    codeOrEntity: any,
    instance?: number
  ): DeleteRequestBuilder<RecurringPostings<T>, T> {
    return new DeleteRequestBuilder<RecurringPostings<T>, T>(
      this.entityApi,
      codeOrEntity instanceof RecurringPostings
        ? codeOrEntity
        : {
            Code: codeOrEntity!,
            Instance: instance!
          }
    );
  }
}
