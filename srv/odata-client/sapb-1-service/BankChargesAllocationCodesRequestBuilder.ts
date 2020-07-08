/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BankChargesAllocationCodes } from './BankChargesAllocationCodes';

/**
 * Request builder class for operations supported on the [[BankChargesAllocationCodes]] entity.
 */
export class BankChargesAllocationCodesRequestBuilder extends RequestBuilder<BankChargesAllocationCodes> {
  /**
   * Returns a request builder for retrieving one `BankChargesAllocationCodes` entity based on its keys.
   * @param code Key property. See [[BankChargesAllocationCodes.code]].
   * @returns A request builder for creating requests to retrieve one `BankChargesAllocationCodes` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<BankChargesAllocationCodes> {
    return new GetByKeyRequestBuilder(BankChargesAllocationCodes, { Code: code });
  }

  /**
   * Returns a request builder for querying all `BankChargesAllocationCodes` entities.
   * @returns A request builder for creating requests to retrieve all `BankChargesAllocationCodes` entities.
   */
  getAll(): GetAllRequestBuilder<BankChargesAllocationCodes> {
    return new GetAllRequestBuilder(BankChargesAllocationCodes);
  }

  /**
   * Returns a request builder for creating a `BankChargesAllocationCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankChargesAllocationCodes`.
   */
  create(entity: BankChargesAllocationCodes): CreateRequestBuilder<BankChargesAllocationCodes> {
    return new CreateRequestBuilder(BankChargesAllocationCodes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BankChargesAllocationCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankChargesAllocationCodes`.
   */
  update(entity: BankChargesAllocationCodes): UpdateRequestBuilder<BankChargesAllocationCodes> {
    return new UpdateRequestBuilder(BankChargesAllocationCodes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BankChargesAllocationCodes`.
   * @param code Key property. See [[BankChargesAllocationCodes.code]].
   * @returns A request builder for creating requests that delete an entity of type `BankChargesAllocationCodes`.
   */
  delete(code: string): DeleteRequestBuilder<BankChargesAllocationCodes>;
  /**
   * Returns a request builder for deleting an entity of type `BankChargesAllocationCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankChargesAllocationCodes` by taking the entity as a parameter.
   */
  delete(entity: BankChargesAllocationCodes): DeleteRequestBuilder<BankChargesAllocationCodes>;
  delete(codeOrEntity: any): DeleteRequestBuilder<BankChargesAllocationCodes> {
    return new DeleteRequestBuilder(BankChargesAllocationCodes, codeOrEntity instanceof BankChargesAllocationCodes ? codeOrEntity : { Code: codeOrEntity! });
  }
}
