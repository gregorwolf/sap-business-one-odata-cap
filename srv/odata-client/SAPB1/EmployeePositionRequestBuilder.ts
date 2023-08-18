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
import { EmployeePosition } from './EmployeePosition';

/**
 * Request builder class for operations supported on the {@link EmployeePosition} entity.
 */
export class EmployeePositionRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployeePosition<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeePosition` entity based on its keys.
   * @param positionId Key property. See {@link EmployeePosition.positionId}.
   * @returns A request builder for creating requests to retrieve one `EmployeePosition` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<EmployeePosition<T>, T> {
    return new GetByKeyRequestBuilder<EmployeePosition<T>, T>(this.entityApi, {
      PositionID: positionId
    });
  }

  /**
   * Returns a request builder for querying all `EmployeePosition` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeePosition` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeePosition<T>, T> {
    return new GetAllRequestBuilder<EmployeePosition<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmployeePosition` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeePosition`.
   */
  create(
    entity: EmployeePosition<T>
  ): CreateRequestBuilder<EmployeePosition<T>, T> {
    return new CreateRequestBuilder<EmployeePosition<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeePosition`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeePosition`.
   */
  update(
    entity: EmployeePosition<T>
  ): UpdateRequestBuilder<EmployeePosition<T>, T> {
    return new UpdateRequestBuilder<EmployeePosition<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeePosition`.
   * @param positionId Key property. See {@link EmployeePosition.positionId}.
   * @returns A request builder for creating requests that delete an entity of type `EmployeePosition`.
   */
  delete(positionId: number): DeleteRequestBuilder<EmployeePosition<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeePosition`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeePosition` by taking the entity as a parameter.
   */
  delete(
    entity: EmployeePosition<T>
  ): DeleteRequestBuilder<EmployeePosition<T>, T>;
  delete(
    positionIdOrEntity: any
  ): DeleteRequestBuilder<EmployeePosition<T>, T> {
    return new DeleteRequestBuilder<EmployeePosition<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof EmployeePosition
        ? positionIdOrEntity
        : { PositionID: positionIdOrEntity! }
    );
  }
}
