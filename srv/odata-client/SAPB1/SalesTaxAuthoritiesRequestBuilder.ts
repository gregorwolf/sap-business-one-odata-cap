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
import { SalesTaxAuthorities } from './SalesTaxAuthorities';

/**
 * Request builder class for operations supported on the {@link SalesTaxAuthorities} entity.
 */
export class SalesTaxAuthoritiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesTaxAuthorities<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesTaxAuthorities` entity based on its keys.
   * @param type Key property. See {@link SalesTaxAuthorities.type}.
   * @param code Key property. See {@link SalesTaxAuthorities.code}.
   * @returns A request builder for creating requests to retrieve one `SalesTaxAuthorities` entity based on its keys.
   */
  getByKey(
    type: DeserializedType<T, 'Edm.Int32'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesTaxAuthorities<T>, T> {
    return new GetByKeyRequestBuilder<SalesTaxAuthorities<T>, T>(
      this.entityApi,
      {
        Type: type,
        Code: code
      }
    );
  }

  /**
   * Returns a request builder for querying all `SalesTaxAuthorities` entities.
   * @returns A request builder for creating requests to retrieve all `SalesTaxAuthorities` entities.
   */
  getAll(): GetAllRequestBuilder<SalesTaxAuthorities<T>, T> {
    return new GetAllRequestBuilder<SalesTaxAuthorities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesTaxAuthorities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesTaxAuthorities`.
   */
  create(
    entity: SalesTaxAuthorities<T>
  ): CreateRequestBuilder<SalesTaxAuthorities<T>, T> {
    return new CreateRequestBuilder<SalesTaxAuthorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesTaxAuthorities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesTaxAuthorities`.
   */
  update(
    entity: SalesTaxAuthorities<T>
  ): UpdateRequestBuilder<SalesTaxAuthorities<T>, T> {
    return new UpdateRequestBuilder<SalesTaxAuthorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesTaxAuthorities`.
   * @param type Key property. See {@link SalesTaxAuthorities.type}.
   * @param code Key property. See {@link SalesTaxAuthorities.code}.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxAuthorities`.
   */
  delete(
    type: number,
    code: string
  ): DeleteRequestBuilder<SalesTaxAuthorities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesTaxAuthorities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxAuthorities` by taking the entity as a parameter.
   */
  delete(
    entity: SalesTaxAuthorities<T>
  ): DeleteRequestBuilder<SalesTaxAuthorities<T>, T>;
  delete(
    typeOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<SalesTaxAuthorities<T>, T> {
    return new DeleteRequestBuilder<SalesTaxAuthorities<T>, T>(
      this.entityApi,
      typeOrEntity instanceof SalesTaxAuthorities
        ? typeOrEntity
        : {
            Type: typeOrEntity!,
            Code: code!
          }
    );
  }
}
