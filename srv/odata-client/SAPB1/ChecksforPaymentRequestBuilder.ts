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
import { ChecksforPayment } from './ChecksforPayment';

/**
 * Request builder class for operations supported on the {@link ChecksforPayment} entity.
 */
export class ChecksforPaymentRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ChecksforPayment<T>, T> {
  /**
   * Returns a request builder for retrieving one `ChecksforPayment` entity based on its keys.
   * @param checkKey Key property. See {@link ChecksforPayment.checkKey}.
   * @returns A request builder for creating requests to retrieve one `ChecksforPayment` entity based on its keys.
   */
  getByKey(
    checkKey: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ChecksforPayment<T>, T> {
    return new GetByKeyRequestBuilder<ChecksforPayment<T>, T>(this.entityApi, {
      CheckKey: checkKey
    });
  }

  /**
   * Returns a request builder for querying all `ChecksforPayment` entities.
   * @returns A request builder for creating requests to retrieve all `ChecksforPayment` entities.
   */
  getAll(): GetAllRequestBuilder<ChecksforPayment<T>, T> {
    return new GetAllRequestBuilder<ChecksforPayment<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ChecksforPayment` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ChecksforPayment`.
   */
  create(
    entity: ChecksforPayment<T>
  ): CreateRequestBuilder<ChecksforPayment<T>, T> {
    return new CreateRequestBuilder<ChecksforPayment<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ChecksforPayment`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ChecksforPayment`.
   */
  update(
    entity: ChecksforPayment<T>
  ): UpdateRequestBuilder<ChecksforPayment<T>, T> {
    return new UpdateRequestBuilder<ChecksforPayment<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ChecksforPayment`.
   * @param checkKey Key property. See {@link ChecksforPayment.checkKey}.
   * @returns A request builder for creating requests that delete an entity of type `ChecksforPayment`.
   */
  delete(checkKey: number): DeleteRequestBuilder<ChecksforPayment<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ChecksforPayment`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ChecksforPayment` by taking the entity as a parameter.
   */
  delete(
    entity: ChecksforPayment<T>
  ): DeleteRequestBuilder<ChecksforPayment<T>, T>;
  delete(checkKeyOrEntity: any): DeleteRequestBuilder<ChecksforPayment<T>, T> {
    return new DeleteRequestBuilder<ChecksforPayment<T>, T>(
      this.entityApi,
      checkKeyOrEntity instanceof ChecksforPayment
        ? checkKeyOrEntity
        : { CheckKey: checkKeyOrEntity! }
    );
  }
}
