/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(groupNumber: number): GetByKeyRequestBuilderV4<PaymentTermsTypes> {
    return new GetByKeyRequestBuilderV4(PaymentTermsTypes, { GroupNumber: groupNumber });
  }

  /**
   * Returns a request builder for querying all `PaymentTermsTypes` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentTermsTypes` entities.
   */
  getAll(): GetAllRequestBuilderV4<PaymentTermsTypes> {
    return new GetAllRequestBuilderV4(PaymentTermsTypes);
  }

  /**
   * Returns a request builder for creating a `PaymentTermsTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentTermsTypes`.
   */
  create(entity: PaymentTermsTypes): CreateRequestBuilderV4<PaymentTermsTypes> {
    return new CreateRequestBuilderV4(PaymentTermsTypes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentTermsTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentTermsTypes`.
   */
  update(entity: PaymentTermsTypes): UpdateRequestBuilderV4<PaymentTermsTypes> {
    return new UpdateRequestBuilderV4(PaymentTermsTypes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentTermsTypes`.
   * @param groupNumber Key property. See [[PaymentTermsTypes.groupNumber]].
   * @returns A request builder for creating requests that delete an entity of type `PaymentTermsTypes`.
   */
  delete(groupNumber: number): DeleteRequestBuilderV4<PaymentTermsTypes>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentTermsTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentTermsTypes` by taking the entity as a parameter.
   */
  delete(entity: PaymentTermsTypes): DeleteRequestBuilderV4<PaymentTermsTypes>;
  delete(groupNumberOrEntity: any): DeleteRequestBuilderV4<PaymentTermsTypes> {
    return new DeleteRequestBuilderV4(PaymentTermsTypes, groupNumberOrEntity instanceof PaymentTermsTypes ? groupNumberOrEntity : { GroupNumber: groupNumberOrEntity! });
  }
}
