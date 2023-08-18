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
import { CreditPaymentMethods } from './CreditPaymentMethods';

/**
 * Request builder class for operations supported on the {@link CreditPaymentMethods} entity.
 */
export class CreditPaymentMethodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditPaymentMethods<T>, T> {
  /**
   * Returns a request builder for retrieving one `CreditPaymentMethods` entity based on its keys.
   * @param paymentMethodCode Key property. See {@link CreditPaymentMethods.paymentMethodCode}.
   * @returns A request builder for creating requests to retrieve one `CreditPaymentMethods` entity based on its keys.
   */
  getByKey(
    paymentMethodCode: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CreditPaymentMethods<T>, T> {
    return new GetByKeyRequestBuilder<CreditPaymentMethods<T>, T>(
      this.entityApi,
      { PaymentMethodCode: paymentMethodCode }
    );
  }

  /**
   * Returns a request builder for querying all `CreditPaymentMethods` entities.
   * @returns A request builder for creating requests to retrieve all `CreditPaymentMethods` entities.
   */
  getAll(): GetAllRequestBuilder<CreditPaymentMethods<T>, T> {
    return new GetAllRequestBuilder<CreditPaymentMethods<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CreditPaymentMethods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditPaymentMethods`.
   */
  create(
    entity: CreditPaymentMethods<T>
  ): CreateRequestBuilder<CreditPaymentMethods<T>, T> {
    return new CreateRequestBuilder<CreditPaymentMethods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CreditPaymentMethods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditPaymentMethods`.
   */
  update(
    entity: CreditPaymentMethods<T>
  ): UpdateRequestBuilder<CreditPaymentMethods<T>, T> {
    return new UpdateRequestBuilder<CreditPaymentMethods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditPaymentMethods`.
   * @param paymentMethodCode Key property. See {@link CreditPaymentMethods.paymentMethodCode}.
   * @returns A request builder for creating requests that delete an entity of type `CreditPaymentMethods`.
   */
  delete(
    paymentMethodCode: number
  ): DeleteRequestBuilder<CreditPaymentMethods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditPaymentMethods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditPaymentMethods` by taking the entity as a parameter.
   */
  delete(
    entity: CreditPaymentMethods<T>
  ): DeleteRequestBuilder<CreditPaymentMethods<T>, T>;
  delete(
    paymentMethodCodeOrEntity: any
  ): DeleteRequestBuilder<CreditPaymentMethods<T>, T> {
    return new DeleteRequestBuilder<CreditPaymentMethods<T>, T>(
      this.entityApi,
      paymentMethodCodeOrEntity instanceof CreditPaymentMethods
        ? paymentMethodCodeOrEntity
        : { PaymentMethodCode: paymentMethodCodeOrEntity! }
    );
  }
}
