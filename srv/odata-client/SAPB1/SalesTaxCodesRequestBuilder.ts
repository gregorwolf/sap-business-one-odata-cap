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
import { SalesTaxCodes } from './SalesTaxCodes';

/**
 * Request builder class for operations supported on the {@link SalesTaxCodes} entity.
 */
export class SalesTaxCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesTaxCodes<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesTaxCodes` entity based on its keys.
   * @param code Key property. See {@link SalesTaxCodes.code}.
   * @returns A request builder for creating requests to retrieve one `SalesTaxCodes` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesTaxCodes<T>, T> {
    return new GetByKeyRequestBuilder<SalesTaxCodes<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `SalesTaxCodes` entities.
   * @returns A request builder for creating requests to retrieve all `SalesTaxCodes` entities.
   */
  getAll(): GetAllRequestBuilder<SalesTaxCodes<T>, T> {
    return new GetAllRequestBuilder<SalesTaxCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesTaxCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesTaxCodes`.
   */
  create(entity: SalesTaxCodes<T>): CreateRequestBuilder<SalesTaxCodes<T>, T> {
    return new CreateRequestBuilder<SalesTaxCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesTaxCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesTaxCodes`.
   */
  update(entity: SalesTaxCodes<T>): UpdateRequestBuilder<SalesTaxCodes<T>, T> {
    return new UpdateRequestBuilder<SalesTaxCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesTaxCodes`.
   * @param code Key property. See {@link SalesTaxCodes.code}.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxCodes`.
   */
  delete(code: string): DeleteRequestBuilder<SalesTaxCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesTaxCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxCodes` by taking the entity as a parameter.
   */
  delete(entity: SalesTaxCodes<T>): DeleteRequestBuilder<SalesTaxCodes<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<SalesTaxCodes<T>, T> {
    return new DeleteRequestBuilder<SalesTaxCodes<T>, T>(
      this.entityApi,
      codeOrEntity instanceof SalesTaxCodes
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
