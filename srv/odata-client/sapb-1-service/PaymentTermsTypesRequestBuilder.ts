/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { PaymentTermsTypes } from './PaymentTermsTypes';

/**
 * Request builder class for operations supported on the [[PaymentTermsTypes]] entity.
 */
export class PaymentTermsTypesRequestBuilder extends RequestBuilder<PaymentTermsTypes> {
  /**
   * Returns a request builder for retrieving one `PaymentTermsTypes` entity based on its keys.
   * @param groupNumber Key property. See [[PaymentTermsTypes.groupNumber]].
   * @returns A request builder for creating requests to retrieve one `PaymentTermsTypes` entity based on its keys.
   */
  getByKey(groupNumber: number): GetByKeyRequestBuilder<PaymentTermsTypes> {
    return new GetByKeyRequestBuilder(PaymentTermsTypes, { GroupNumber: groupNumber });
  }

  /**
   * Returns a request builder for querying all `PaymentTermsTypes` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentTermsTypes` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentTermsTypes> {
    return new GetAllRequestBuilder(PaymentTermsTypes);
  }

  /**
   * Returns a request builder for creating a `PaymentTermsTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentTermsTypes`.
   */
  create(entity: PaymentTermsTypes): CreateRequestBuilder<PaymentTermsTypes> {
    return new CreateRequestBuilder(PaymentTermsTypes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentTermsTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentTermsTypes`.
   */
  update(entity: PaymentTermsTypes): UpdateRequestBuilder<PaymentTermsTypes> {
    return new UpdateRequestBuilder(PaymentTermsTypes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentTermsTypes`.
   * @param groupNumber Key property. See [[PaymentTermsTypes.groupNumber]].
   * @returns A request builder for creating requests that delete an entity of type `PaymentTermsTypes`.
   */
  delete(groupNumber: number): DeleteRequestBuilder<PaymentTermsTypes>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentTermsTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentTermsTypes` by taking the entity as a parameter.
   */
  delete(entity: PaymentTermsTypes): DeleteRequestBuilder<PaymentTermsTypes>;
  delete(groupNumberOrEntity: any): DeleteRequestBuilder<PaymentTermsTypes> {
    return new DeleteRequestBuilder(PaymentTermsTypes, groupNumberOrEntity instanceof PaymentTermsTypes ? groupNumberOrEntity : { GroupNumber: groupNumberOrEntity! });
  }
}
