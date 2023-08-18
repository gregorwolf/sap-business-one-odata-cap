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
import { Deposits } from './Deposits';

/**
 * Request builder class for operations supported on the {@link Deposits} entity.
 */
export class DepositsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Deposits<T>, T> {
  /**
   * Returns a request builder for retrieving one `Deposits` entity based on its keys.
   * @param absEntry Key property. See {@link Deposits.absEntry}.
   * @returns A request builder for creating requests to retrieve one `Deposits` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Deposits<T>, T> {
    return new GetByKeyRequestBuilder<Deposits<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `Deposits` entities.
   * @returns A request builder for creating requests to retrieve all `Deposits` entities.
   */
  getAll(): GetAllRequestBuilder<Deposits<T>, T> {
    return new GetAllRequestBuilder<Deposits<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Deposits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Deposits`.
   */
  create(entity: Deposits<T>): CreateRequestBuilder<Deposits<T>, T> {
    return new CreateRequestBuilder<Deposits<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Deposits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Deposits`.
   */
  update(entity: Deposits<T>): UpdateRequestBuilder<Deposits<T>, T> {
    return new UpdateRequestBuilder<Deposits<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Deposits`.
   * @param absEntry Key property. See {@link Deposits.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `Deposits`.
   */
  delete(absEntry: number): DeleteRequestBuilder<Deposits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Deposits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Deposits` by taking the entity as a parameter.
   */
  delete(entity: Deposits<T>): DeleteRequestBuilder<Deposits<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<Deposits<T>, T> {
    return new DeleteRequestBuilder<Deposits<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof Deposits
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
