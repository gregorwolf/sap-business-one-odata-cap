/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { WizardPaymentMethods } from './WizardPaymentMethods';

/**
 * Request builder class for operations supported on the [[WizardPaymentMethods]] entity.
 */
export class WizardPaymentMethodsRequestBuilder extends RequestBuilder<WizardPaymentMethods> {
  /**
   * Returns a request builder for retrieving one `WizardPaymentMethods` entity based on its keys.
   * @param paymentMethodCode Key property. See [[WizardPaymentMethods.paymentMethodCode]].
   * @returns A request builder for creating requests to retrieve one `WizardPaymentMethods` entity based on its keys.
   */
  getByKey(paymentMethodCode: string): GetByKeyRequestBuilder<WizardPaymentMethods> {
    return new GetByKeyRequestBuilder(WizardPaymentMethods, { PaymentMethodCode: paymentMethodCode });
  }

  /**
   * Returns a request builder for querying all `WizardPaymentMethods` entities.
   * @returns A request builder for creating requests to retrieve all `WizardPaymentMethods` entities.
   */
  getAll(): GetAllRequestBuilder<WizardPaymentMethods> {
    return new GetAllRequestBuilder(WizardPaymentMethods);
  }

  /**
   * Returns a request builder for creating a `WizardPaymentMethods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WizardPaymentMethods`.
   */
  create(entity: WizardPaymentMethods): CreateRequestBuilder<WizardPaymentMethods> {
    return new CreateRequestBuilder(WizardPaymentMethods, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `WizardPaymentMethods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WizardPaymentMethods`.
   */
  update(entity: WizardPaymentMethods): UpdateRequestBuilder<WizardPaymentMethods> {
    return new UpdateRequestBuilder(WizardPaymentMethods, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WizardPaymentMethods`.
   * @param paymentMethodCode Key property. See [[WizardPaymentMethods.paymentMethodCode]].
   * @returns A request builder for creating requests that delete an entity of type `WizardPaymentMethods`.
   */
  delete(paymentMethodCode: string): DeleteRequestBuilder<WizardPaymentMethods>;
  /**
   * Returns a request builder for deleting an entity of type `WizardPaymentMethods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WizardPaymentMethods` by taking the entity as a parameter.
   */
  delete(entity: WizardPaymentMethods): DeleteRequestBuilder<WizardPaymentMethods>;
  delete(paymentMethodCodeOrEntity: any): DeleteRequestBuilder<WizardPaymentMethods> {
    return new DeleteRequestBuilder(WizardPaymentMethods, paymentMethodCodeOrEntity instanceof WizardPaymentMethods ? paymentMethodCodeOrEntity : { PaymentMethodCode: paymentMethodCodeOrEntity! });
  }
}
