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
import { CostCenterTypes } from './CostCenterTypes';

/**
 * Request builder class for operations supported on the {@link CostCenterTypes} entity.
 */
export class CostCenterTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostCenterTypes<T>, T> {
  /**
   * Returns a request builder for retrieving one `CostCenterTypes` entity based on its keys.
   * @param costCenterTypeCode Key property. See {@link CostCenterTypes.costCenterTypeCode}.
   * @returns A request builder for creating requests to retrieve one `CostCenterTypes` entity based on its keys.
   */
  getByKey(
    costCenterTypeCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostCenterTypes<T>, T> {
    return new GetByKeyRequestBuilder<CostCenterTypes<T>, T>(this.entityApi, {
      CostCenterTypeCode: costCenterTypeCode
    });
  }

  /**
   * Returns a request builder for querying all `CostCenterTypes` entities.
   * @returns A request builder for creating requests to retrieve all `CostCenterTypes` entities.
   */
  getAll(): GetAllRequestBuilder<CostCenterTypes<T>, T> {
    return new GetAllRequestBuilder<CostCenterTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostCenterTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostCenterTypes`.
   */
  create(
    entity: CostCenterTypes<T>
  ): CreateRequestBuilder<CostCenterTypes<T>, T> {
    return new CreateRequestBuilder<CostCenterTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CostCenterTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostCenterTypes`.
   */
  update(
    entity: CostCenterTypes<T>
  ): UpdateRequestBuilder<CostCenterTypes<T>, T> {
    return new UpdateRequestBuilder<CostCenterTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CostCenterTypes`.
   * @param costCenterTypeCode Key property. See {@link CostCenterTypes.costCenterTypeCode}.
   * @returns A request builder for creating requests that delete an entity of type `CostCenterTypes`.
   */
  delete(
    costCenterTypeCode: string
  ): DeleteRequestBuilder<CostCenterTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostCenterTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostCenterTypes` by taking the entity as a parameter.
   */
  delete(
    entity: CostCenterTypes<T>
  ): DeleteRequestBuilder<CostCenterTypes<T>, T>;
  delete(
    costCenterTypeCodeOrEntity: any
  ): DeleteRequestBuilder<CostCenterTypes<T>, T> {
    return new DeleteRequestBuilder<CostCenterTypes<T>, T>(
      this.entityApi,
      costCenterTypeCodeOrEntity instanceof CostCenterTypes
        ? costCenterTypeCodeOrEntity
        : { CostCenterTypeCode: costCenterTypeCodeOrEntity! }
    );
  }
}
