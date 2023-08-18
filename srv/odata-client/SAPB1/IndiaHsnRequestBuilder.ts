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
import { IndiaHsn } from './IndiaHsn';

/**
 * Request builder class for operations supported on the {@link IndiaHsn} entity.
 */
export class IndiaHsnRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IndiaHsn<T>, T> {
  /**
   * Returns a request builder for retrieving one `IndiaHsn` entity based on its keys.
   * @param absEntry Key property. See {@link IndiaHsn.absEntry}.
   * @returns A request builder for creating requests to retrieve one `IndiaHsn` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<IndiaHsn<T>, T> {
    return new GetByKeyRequestBuilder<IndiaHsn<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `IndiaHsn` entities.
   * @returns A request builder for creating requests to retrieve all `IndiaHsn` entities.
   */
  getAll(): GetAllRequestBuilder<IndiaHsn<T>, T> {
    return new GetAllRequestBuilder<IndiaHsn<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IndiaHsn` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IndiaHsn`.
   */
  create(entity: IndiaHsn<T>): CreateRequestBuilder<IndiaHsn<T>, T> {
    return new CreateRequestBuilder<IndiaHsn<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `IndiaHsn`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IndiaHsn`.
   */
  update(entity: IndiaHsn<T>): UpdateRequestBuilder<IndiaHsn<T>, T> {
    return new UpdateRequestBuilder<IndiaHsn<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `IndiaHsn`.
   * @param absEntry Key property. See {@link IndiaHsn.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `IndiaHsn`.
   */
  delete(absEntry: number): DeleteRequestBuilder<IndiaHsn<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IndiaHsn`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IndiaHsn` by taking the entity as a parameter.
   */
  delete(entity: IndiaHsn<T>): DeleteRequestBuilder<IndiaHsn<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<IndiaHsn<T>, T> {
    return new DeleteRequestBuilder<IndiaHsn<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof IndiaHsn
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
