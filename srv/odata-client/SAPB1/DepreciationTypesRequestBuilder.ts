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
import { DepreciationTypes } from './DepreciationTypes';

/**
 * Request builder class for operations supported on the {@link DepreciationTypes} entity.
 */
export class DepreciationTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DepreciationTypes<T>, T> {
  /**
   * Returns a request builder for retrieving one `DepreciationTypes` entity based on its keys.
   * @param code Key property. See {@link DepreciationTypes.code}.
   * @returns A request builder for creating requests to retrieve one `DepreciationTypes` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DepreciationTypes<T>, T> {
    return new GetByKeyRequestBuilder<DepreciationTypes<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `DepreciationTypes` entities.
   * @returns A request builder for creating requests to retrieve all `DepreciationTypes` entities.
   */
  getAll(): GetAllRequestBuilder<DepreciationTypes<T>, T> {
    return new GetAllRequestBuilder<DepreciationTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DepreciationTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DepreciationTypes`.
   */
  create(
    entity: DepreciationTypes<T>
  ): CreateRequestBuilder<DepreciationTypes<T>, T> {
    return new CreateRequestBuilder<DepreciationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DepreciationTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DepreciationTypes`.
   */
  update(
    entity: DepreciationTypes<T>
  ): UpdateRequestBuilder<DepreciationTypes<T>, T> {
    return new UpdateRequestBuilder<DepreciationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DepreciationTypes`.
   * @param code Key property. See {@link DepreciationTypes.code}.
   * @returns A request builder for creating requests that delete an entity of type `DepreciationTypes`.
   */
  delete(code: string): DeleteRequestBuilder<DepreciationTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DepreciationTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DepreciationTypes` by taking the entity as a parameter.
   */
  delete(
    entity: DepreciationTypes<T>
  ): DeleteRequestBuilder<DepreciationTypes<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<DepreciationTypes<T>, T> {
    return new DeleteRequestBuilder<DepreciationTypes<T>, T>(
      this.entityApi,
      codeOrEntity instanceof DepreciationTypes
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
