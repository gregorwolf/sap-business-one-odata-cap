/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { CreditPaymentMethods } from './CreditPaymentMethods';

/**
 * Request builder class for operations supported on the [[CreditPaymentMethods]] entity.
 */
export class CreditPaymentMethodsRequestBuilder extends RequestBuilder<CreditPaymentMethods> {
  /**
   * Returns a request builder for retrieving one `CreditPaymentMethods` entity based on its keys.
   * @param paymentMethodCode Key property. See [[CreditPaymentMethods.paymentMethodCode]].
   * @returns A request builder for creating requests to retrieve one `CreditPaymentMethods` entity based on its keys.
   */
  getByKey(paymentMethodCode: number): GetByKeyRequestBuilder<CreditPaymentMethods> {
    return new GetByKeyRequestBuilder(CreditPaymentMethods, { PaymentMethodCode: paymentMethodCode });
  }

  /**
   * Returns a request builder for querying all `CreditPaymentMethods` entities.
   * @returns A request builder for creating requests to retrieve all `CreditPaymentMethods` entities.
   */
  getAll(): GetAllRequestBuilder<CreditPaymentMethods> {
    return new GetAllRequestBuilder(CreditPaymentMethods);
  }

  /**
   * Returns a request builder for creating a `CreditPaymentMethods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditPaymentMethods`.
   */
  create(entity: CreditPaymentMethods): CreateRequestBuilder<CreditPaymentMethods> {
    return new CreateRequestBuilder(CreditPaymentMethods, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CreditPaymentMethods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditPaymentMethods`.
   */
  update(entity: CreditPaymentMethods): UpdateRequestBuilder<CreditPaymentMethods> {
    return new UpdateRequestBuilder(CreditPaymentMethods, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditPaymentMethods`.
   * @param paymentMethodCode Key property. See [[CreditPaymentMethods.paymentMethodCode]].
   * @returns A request builder for creating requests that delete an entity of type `CreditPaymentMethods`.
   */
  delete(paymentMethodCode: number): DeleteRequestBuilder<CreditPaymentMethods>;
  /**
   * Returns a request builder for deleting an entity of type `CreditPaymentMethods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditPaymentMethods` by taking the entity as a parameter.
   */
  delete(entity: CreditPaymentMethods): DeleteRequestBuilder<CreditPaymentMethods>;
  delete(paymentMethodCodeOrEntity: any): DeleteRequestBuilder<CreditPaymentMethods> {
    return new DeleteRequestBuilder(CreditPaymentMethods, paymentMethodCodeOrEntity instanceof CreditPaymentMethods ? paymentMethodCodeOrEntity : { PaymentMethodCode: paymentMethodCodeOrEntity! });
  }
}
