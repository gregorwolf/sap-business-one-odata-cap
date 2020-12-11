/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { SalesTaxAuthorities } from './SalesTaxAuthorities';

/**
 * Request builder class for operations supported on the [[SalesTaxAuthorities]] entity.
 */
export class SalesTaxAuthoritiesRequestBuilder extends RequestBuilder<SalesTaxAuthorities> {
  /**
   * Returns a request builder for retrieving one `SalesTaxAuthorities` entity based on its keys.
   * @param type Key property. See [[SalesTaxAuthorities.type]].
   * @param code Key property. See [[SalesTaxAuthorities.code]].
   * @returns A request builder for creating requests to retrieve one `SalesTaxAuthorities` entity based on its keys.
   */
  getByKey(type: number, code: string): GetByKeyRequestBuilderV4<SalesTaxAuthorities> {
    return new GetByKeyRequestBuilderV4(SalesTaxAuthorities, {
      Type: type,
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `SalesTaxAuthorities` entities.
   * @returns A request builder for creating requests to retrieve all `SalesTaxAuthorities` entities.
   */
  getAll(): GetAllRequestBuilderV4<SalesTaxAuthorities> {
    return new GetAllRequestBuilderV4(SalesTaxAuthorities);
  }

  /**
   * Returns a request builder for creating a `SalesTaxAuthorities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesTaxAuthorities`.
   */
  create(entity: SalesTaxAuthorities): CreateRequestBuilderV4<SalesTaxAuthorities> {
    return new CreateRequestBuilderV4(SalesTaxAuthorities, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SalesTaxAuthorities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesTaxAuthorities`.
   */
  update(entity: SalesTaxAuthorities): UpdateRequestBuilderV4<SalesTaxAuthorities> {
    return new UpdateRequestBuilderV4(SalesTaxAuthorities, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesTaxAuthorities`.
   * @param type Key property. See [[SalesTaxAuthorities.type]].
   * @param code Key property. See [[SalesTaxAuthorities.code]].
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxAuthorities`.
   */
  delete(type: number, code: string): DeleteRequestBuilderV4<SalesTaxAuthorities>;
  /**
   * Returns a request builder for deleting an entity of type `SalesTaxAuthorities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxAuthorities` by taking the entity as a parameter.
   */
  delete(entity: SalesTaxAuthorities): DeleteRequestBuilderV4<SalesTaxAuthorities>;
  delete(typeOrEntity: any, code?: string): DeleteRequestBuilderV4<SalesTaxAuthorities> {
    return new DeleteRequestBuilderV4(SalesTaxAuthorities, typeOrEntity instanceof SalesTaxAuthorities ? typeOrEntity : {
      Type: typeOrEntity!,
      Code: code!
    });
  }
}
