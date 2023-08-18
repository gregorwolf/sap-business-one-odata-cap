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
import { WTaxTypeCodes } from './WTaxTypeCodes';

/**
 * Request builder class for operations supported on the {@link WTaxTypeCodes} entity.
 */
export class WTaxTypeCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WTaxTypeCodes<T>, T> {
  /**
   * Returns a request builder for retrieving one `WTaxTypeCodes` entity based on its keys.
   * @param code Key property. See {@link WTaxTypeCodes.code}.
   * @returns A request builder for creating requests to retrieve one `WTaxTypeCodes` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<WTaxTypeCodes<T>, T> {
    return new GetByKeyRequestBuilder<WTaxTypeCodes<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `WTaxTypeCodes` entities.
   * @returns A request builder for creating requests to retrieve all `WTaxTypeCodes` entities.
   */
  getAll(): GetAllRequestBuilder<WTaxTypeCodes<T>, T> {
    return new GetAllRequestBuilder<WTaxTypeCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WTaxTypeCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WTaxTypeCodes`.
   */
  create(entity: WTaxTypeCodes<T>): CreateRequestBuilder<WTaxTypeCodes<T>, T> {
    return new CreateRequestBuilder<WTaxTypeCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WTaxTypeCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WTaxTypeCodes`.
   */
  update(entity: WTaxTypeCodes<T>): UpdateRequestBuilder<WTaxTypeCodes<T>, T> {
    return new UpdateRequestBuilder<WTaxTypeCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WTaxTypeCodes`.
   * @param code Key property. See {@link WTaxTypeCodes.code}.
   * @returns A request builder for creating requests that delete an entity of type `WTaxTypeCodes`.
   */
  delete(code: number): DeleteRequestBuilder<WTaxTypeCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WTaxTypeCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WTaxTypeCodes` by taking the entity as a parameter.
   */
  delete(entity: WTaxTypeCodes<T>): DeleteRequestBuilder<WTaxTypeCodes<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<WTaxTypeCodes<T>, T> {
    return new DeleteRequestBuilder<WTaxTypeCodes<T>, T>(
      this.entityApi,
      codeOrEntity instanceof WTaxTypeCodes
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
