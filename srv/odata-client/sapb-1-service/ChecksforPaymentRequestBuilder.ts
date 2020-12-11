/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ChecksforPayment } from './ChecksforPayment';

/**
 * Request builder class for operations supported on the [[ChecksforPayment]] entity.
 */
export class ChecksforPaymentRequestBuilder extends RequestBuilder<ChecksforPayment> {
  /**
   * Returns a request builder for retrieving one `ChecksforPayment` entity based on its keys.
   * @param checkKey Key property. See [[ChecksforPayment.checkKey]].
   * @returns A request builder for creating requests to retrieve one `ChecksforPayment` entity based on its keys.
   */
  getByKey(checkKey: number): GetByKeyRequestBuilderV4<ChecksforPayment> {
    return new GetByKeyRequestBuilderV4(ChecksforPayment, { CheckKey: checkKey });
  }

  /**
   * Returns a request builder for querying all `ChecksforPayment` entities.
   * @returns A request builder for creating requests to retrieve all `ChecksforPayment` entities.
   */
  getAll(): GetAllRequestBuilderV4<ChecksforPayment> {
    return new GetAllRequestBuilderV4(ChecksforPayment);
  }

  /**
   * Returns a request builder for creating a `ChecksforPayment` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ChecksforPayment`.
   */
  create(entity: ChecksforPayment): CreateRequestBuilderV4<ChecksforPayment> {
    return new CreateRequestBuilderV4(ChecksforPayment, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ChecksforPayment`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ChecksforPayment`.
   */
  update(entity: ChecksforPayment): UpdateRequestBuilderV4<ChecksforPayment> {
    return new UpdateRequestBuilderV4(ChecksforPayment, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ChecksforPayment`.
   * @param checkKey Key property. See [[ChecksforPayment.checkKey]].
   * @returns A request builder for creating requests that delete an entity of type `ChecksforPayment`.
   */
  delete(checkKey: number): DeleteRequestBuilderV4<ChecksforPayment>;
  /**
   * Returns a request builder for deleting an entity of type `ChecksforPayment`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ChecksforPayment` by taking the entity as a parameter.
   */
  delete(entity: ChecksforPayment): DeleteRequestBuilderV4<ChecksforPayment>;
  delete(checkKeyOrEntity: any): DeleteRequestBuilderV4<ChecksforPayment> {
    return new DeleteRequestBuilderV4(ChecksforPayment, checkKeyOrEntity instanceof ChecksforPayment ? checkKeyOrEntity : { CheckKey: checkKeyOrEntity! });
  }
}
