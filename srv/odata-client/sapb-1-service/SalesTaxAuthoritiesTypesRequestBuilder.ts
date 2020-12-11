/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { SalesTaxAuthoritiesTypes } from './SalesTaxAuthoritiesTypes';

/**
 * Request builder class for operations supported on the [[SalesTaxAuthoritiesTypes]] entity.
 */
export class SalesTaxAuthoritiesTypesRequestBuilder extends RequestBuilder<SalesTaxAuthoritiesTypes> {
  /**
   * Returns a request builder for retrieving one `SalesTaxAuthoritiesTypes` entity based on its keys.
   * @param numerator Key property. See [[SalesTaxAuthoritiesTypes.numerator]].
   * @returns A request builder for creating requests to retrieve one `SalesTaxAuthoritiesTypes` entity based on its keys.
   */
  getByKey(numerator: number): GetByKeyRequestBuilderV4<SalesTaxAuthoritiesTypes> {
    return new GetByKeyRequestBuilderV4(SalesTaxAuthoritiesTypes, { Numerator: numerator });
  }

  /**
   * Returns a request builder for querying all `SalesTaxAuthoritiesTypes` entities.
   * @returns A request builder for creating requests to retrieve all `SalesTaxAuthoritiesTypes` entities.
   */
  getAll(): GetAllRequestBuilderV4<SalesTaxAuthoritiesTypes> {
    return new GetAllRequestBuilderV4(SalesTaxAuthoritiesTypes);
  }

  /**
   * Returns a request builder for creating a `SalesTaxAuthoritiesTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesTaxAuthoritiesTypes`.
   */
  create(entity: SalesTaxAuthoritiesTypes): CreateRequestBuilderV4<SalesTaxAuthoritiesTypes> {
    return new CreateRequestBuilderV4(SalesTaxAuthoritiesTypes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SalesTaxAuthoritiesTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesTaxAuthoritiesTypes`.
   */
  update(entity: SalesTaxAuthoritiesTypes): UpdateRequestBuilderV4<SalesTaxAuthoritiesTypes> {
    return new UpdateRequestBuilderV4(SalesTaxAuthoritiesTypes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesTaxAuthoritiesTypes`.
   * @param numerator Key property. See [[SalesTaxAuthoritiesTypes.numerator]].
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxAuthoritiesTypes`.
   */
  delete(numerator: number): DeleteRequestBuilderV4<SalesTaxAuthoritiesTypes>;
  /**
   * Returns a request builder for deleting an entity of type `SalesTaxAuthoritiesTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxAuthoritiesTypes` by taking the entity as a parameter.
   */
  delete(entity: SalesTaxAuthoritiesTypes): DeleteRequestBuilderV4<SalesTaxAuthoritiesTypes>;
  delete(numeratorOrEntity: any): DeleteRequestBuilderV4<SalesTaxAuthoritiesTypes> {
    return new DeleteRequestBuilderV4(SalesTaxAuthoritiesTypes, numeratorOrEntity instanceof SalesTaxAuthoritiesTypes ? numeratorOrEntity : { Numerator: numeratorOrEntity! });
  }
}
