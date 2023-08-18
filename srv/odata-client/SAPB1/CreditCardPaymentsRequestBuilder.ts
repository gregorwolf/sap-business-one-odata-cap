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
import { CreditCardPayments } from './CreditCardPayments';

/**
 * Request builder class for operations supported on the {@link CreditCardPayments} entity.
 */
export class CreditCardPaymentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditCardPayments<T>, T> {
  /**
   * Returns a request builder for retrieving one `CreditCardPayments` entity based on its keys.
   * @param dueDateCode Key property. See {@link CreditCardPayments.dueDateCode}.
   * @returns A request builder for creating requests to retrieve one `CreditCardPayments` entity based on its keys.
   */
  getByKey(
    dueDateCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CreditCardPayments<T>, T> {
    return new GetByKeyRequestBuilder<CreditCardPayments<T>, T>(
      this.entityApi,
      { DueDateCode: dueDateCode }
    );
  }

  /**
   * Returns a request builder for querying all `CreditCardPayments` entities.
   * @returns A request builder for creating requests to retrieve all `CreditCardPayments` entities.
   */
  getAll(): GetAllRequestBuilder<CreditCardPayments<T>, T> {
    return new GetAllRequestBuilder<CreditCardPayments<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CreditCardPayments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditCardPayments`.
   */
  create(
    entity: CreditCardPayments<T>
  ): CreateRequestBuilder<CreditCardPayments<T>, T> {
    return new CreateRequestBuilder<CreditCardPayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CreditCardPayments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditCardPayments`.
   */
  update(
    entity: CreditCardPayments<T>
  ): UpdateRequestBuilder<CreditCardPayments<T>, T> {
    return new UpdateRequestBuilder<CreditCardPayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditCardPayments`.
   * @param dueDateCode Key property. See {@link CreditCardPayments.dueDateCode}.
   * @returns A request builder for creating requests that delete an entity of type `CreditCardPayments`.
   */
  delete(dueDateCode: string): DeleteRequestBuilder<CreditCardPayments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditCardPayments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditCardPayments` by taking the entity as a parameter.
   */
  delete(
    entity: CreditCardPayments<T>
  ): DeleteRequestBuilder<CreditCardPayments<T>, T>;
  delete(
    dueDateCodeOrEntity: any
  ): DeleteRequestBuilder<CreditCardPayments<T>, T> {
    return new DeleteRequestBuilder<CreditCardPayments<T>, T>(
      this.entityApi,
      dueDateCodeOrEntity instanceof CreditCardPayments
        ? dueDateCodeOrEntity
        : { DueDateCode: dueDateCodeOrEntity! }
    );
  }
}
