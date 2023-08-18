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
import { DepreciationTypePools } from './DepreciationTypePools';

/**
 * Request builder class for operations supported on the {@link DepreciationTypePools} entity.
 */
export class DepreciationTypePoolsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DepreciationTypePools<T>, T> {
  /**
   * Returns a request builder for retrieving one `DepreciationTypePools` entity based on its keys.
   * @param code Key property. See {@link DepreciationTypePools.code}.
   * @returns A request builder for creating requests to retrieve one `DepreciationTypePools` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DepreciationTypePools<T>, T> {
    return new GetByKeyRequestBuilder<DepreciationTypePools<T>, T>(
      this.entityApi,
      { Code: code }
    );
  }

  /**
   * Returns a request builder for querying all `DepreciationTypePools` entities.
   * @returns A request builder for creating requests to retrieve all `DepreciationTypePools` entities.
   */
  getAll(): GetAllRequestBuilder<DepreciationTypePools<T>, T> {
    return new GetAllRequestBuilder<DepreciationTypePools<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DepreciationTypePools` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DepreciationTypePools`.
   */
  create(
    entity: DepreciationTypePools<T>
  ): CreateRequestBuilder<DepreciationTypePools<T>, T> {
    return new CreateRequestBuilder<DepreciationTypePools<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DepreciationTypePools`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DepreciationTypePools`.
   */
  update(
    entity: DepreciationTypePools<T>
  ): UpdateRequestBuilder<DepreciationTypePools<T>, T> {
    return new UpdateRequestBuilder<DepreciationTypePools<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DepreciationTypePools`.
   * @param code Key property. See {@link DepreciationTypePools.code}.
   * @returns A request builder for creating requests that delete an entity of type `DepreciationTypePools`.
   */
  delete(code: string): DeleteRequestBuilder<DepreciationTypePools<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DepreciationTypePools`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DepreciationTypePools` by taking the entity as a parameter.
   */
  delete(
    entity: DepreciationTypePools<T>
  ): DeleteRequestBuilder<DepreciationTypePools<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<DepreciationTypePools<T>, T> {
    return new DeleteRequestBuilder<DepreciationTypePools<T>, T>(
      this.entityApi,
      codeOrEntity instanceof DepreciationTypePools
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
