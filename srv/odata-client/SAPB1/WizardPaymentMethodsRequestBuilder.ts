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
import { WizardPaymentMethods } from './WizardPaymentMethods';

/**
 * Request builder class for operations supported on the {@link WizardPaymentMethods} entity.
 */
export class WizardPaymentMethodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WizardPaymentMethods<T>, T> {
  /**
   * Returns a request builder for retrieving one `WizardPaymentMethods` entity based on its keys.
   * @param paymentMethodCode Key property. See {@link WizardPaymentMethods.paymentMethodCode}.
   * @returns A request builder for creating requests to retrieve one `WizardPaymentMethods` entity based on its keys.
   */
  getByKey(
    paymentMethodCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WizardPaymentMethods<T>, T> {
    return new GetByKeyRequestBuilder<WizardPaymentMethods<T>, T>(
      this.entityApi,
      { PaymentMethodCode: paymentMethodCode }
    );
  }

  /**
   * Returns a request builder for querying all `WizardPaymentMethods` entities.
   * @returns A request builder for creating requests to retrieve all `WizardPaymentMethods` entities.
   */
  getAll(): GetAllRequestBuilder<WizardPaymentMethods<T>, T> {
    return new GetAllRequestBuilder<WizardPaymentMethods<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WizardPaymentMethods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WizardPaymentMethods`.
   */
  create(
    entity: WizardPaymentMethods<T>
  ): CreateRequestBuilder<WizardPaymentMethods<T>, T> {
    return new CreateRequestBuilder<WizardPaymentMethods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WizardPaymentMethods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WizardPaymentMethods`.
   */
  update(
    entity: WizardPaymentMethods<T>
  ): UpdateRequestBuilder<WizardPaymentMethods<T>, T> {
    return new UpdateRequestBuilder<WizardPaymentMethods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WizardPaymentMethods`.
   * @param paymentMethodCode Key property. See {@link WizardPaymentMethods.paymentMethodCode}.
   * @returns A request builder for creating requests that delete an entity of type `WizardPaymentMethods`.
   */
  delete(
    paymentMethodCode: string
  ): DeleteRequestBuilder<WizardPaymentMethods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WizardPaymentMethods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WizardPaymentMethods` by taking the entity as a parameter.
   */
  delete(
    entity: WizardPaymentMethods<T>
  ): DeleteRequestBuilder<WizardPaymentMethods<T>, T>;
  delete(
    paymentMethodCodeOrEntity: any
  ): DeleteRequestBuilder<WizardPaymentMethods<T>, T> {
    return new DeleteRequestBuilder<WizardPaymentMethods<T>, T>(
      this.entityApi,
      paymentMethodCodeOrEntity instanceof WizardPaymentMethods
        ? paymentMethodCodeOrEntity
        : { PaymentMethodCode: paymentMethodCodeOrEntity! }
    );
  }
}
