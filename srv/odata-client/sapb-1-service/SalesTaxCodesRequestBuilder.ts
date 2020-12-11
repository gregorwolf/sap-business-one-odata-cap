/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { SalesTaxCodes } from './SalesTaxCodes';

/**
 * Request builder class for operations supported on the [[SalesTaxCodes]] entity.
 */
export class SalesTaxCodesRequestBuilder extends RequestBuilder<SalesTaxCodes> {
  /**
   * Returns a request builder for retrieving one `SalesTaxCodes` entity based on its keys.
   * @param code Key property. See [[SalesTaxCodes.code]].
   * @returns A request builder for creating requests to retrieve one `SalesTaxCodes` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilderV4<SalesTaxCodes> {
    return new GetByKeyRequestBuilderV4(SalesTaxCodes, { Code: code });
  }

  /**
   * Returns a request builder for querying all `SalesTaxCodes` entities.
   * @returns A request builder for creating requests to retrieve all `SalesTaxCodes` entities.
   */
  getAll(): GetAllRequestBuilderV4<SalesTaxCodes> {
    return new GetAllRequestBuilderV4(SalesTaxCodes);
  }

  /**
   * Returns a request builder for creating a `SalesTaxCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesTaxCodes`.
   */
  create(entity: SalesTaxCodes): CreateRequestBuilderV4<SalesTaxCodes> {
    return new CreateRequestBuilderV4(SalesTaxCodes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SalesTaxCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesTaxCodes`.
   */
  update(entity: SalesTaxCodes): UpdateRequestBuilderV4<SalesTaxCodes> {
    return new UpdateRequestBuilderV4(SalesTaxCodes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesTaxCodes`.
   * @param code Key property. See [[SalesTaxCodes.code]].
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxCodes`.
   */
  delete(code: string): DeleteRequestBuilderV4<SalesTaxCodes>;
  /**
   * Returns a request builder for deleting an entity of type `SalesTaxCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxCodes` by taking the entity as a parameter.
   */
  delete(entity: SalesTaxCodes): DeleteRequestBuilderV4<SalesTaxCodes>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<SalesTaxCodes> {
    return new DeleteRequestBuilderV4(SalesTaxCodes, codeOrEntity instanceof SalesTaxCodes ? codeOrEntity : { Code: codeOrEntity! });
  }
}
