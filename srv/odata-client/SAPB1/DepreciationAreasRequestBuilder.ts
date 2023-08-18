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
import { DepreciationAreas } from './DepreciationAreas';

/**
 * Request builder class for operations supported on the {@link DepreciationAreas} entity.
 */
export class DepreciationAreasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DepreciationAreas<T>, T> {
  /**
   * Returns a request builder for retrieving one `DepreciationAreas` entity based on its keys.
   * @param code Key property. See {@link DepreciationAreas.code}.
   * @returns A request builder for creating requests to retrieve one `DepreciationAreas` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DepreciationAreas<T>, T> {
    return new GetByKeyRequestBuilder<DepreciationAreas<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `DepreciationAreas` entities.
   * @returns A request builder for creating requests to retrieve all `DepreciationAreas` entities.
   */
  getAll(): GetAllRequestBuilder<DepreciationAreas<T>, T> {
    return new GetAllRequestBuilder<DepreciationAreas<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DepreciationAreas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DepreciationAreas`.
   */
  create(
    entity: DepreciationAreas<T>
  ): CreateRequestBuilder<DepreciationAreas<T>, T> {
    return new CreateRequestBuilder<DepreciationAreas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DepreciationAreas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DepreciationAreas`.
   */
  update(
    entity: DepreciationAreas<T>
  ): UpdateRequestBuilder<DepreciationAreas<T>, T> {
    return new UpdateRequestBuilder<DepreciationAreas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DepreciationAreas`.
   * @param code Key property. See {@link DepreciationAreas.code}.
   * @returns A request builder for creating requests that delete an entity of type `DepreciationAreas`.
   */
  delete(code: string): DeleteRequestBuilder<DepreciationAreas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DepreciationAreas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DepreciationAreas` by taking the entity as a parameter.
   */
  delete(
    entity: DepreciationAreas<T>
  ): DeleteRequestBuilder<DepreciationAreas<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<DepreciationAreas<T>, T> {
    return new DeleteRequestBuilder<DepreciationAreas<T>, T>(
      this.entityApi,
      codeOrEntity instanceof DepreciationAreas
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
