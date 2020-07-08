/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { EmployeePosition } from './EmployeePosition';

/**
 * Request builder class for operations supported on the [[EmployeePosition]] entity.
 */
export class EmployeePositionRequestBuilder extends RequestBuilder<EmployeePosition> {
  /**
   * Returns a request builder for retrieving one `EmployeePosition` entity based on its keys.
   * @param positionId Key property. See [[EmployeePosition.positionId]].
   * @returns A request builder for creating requests to retrieve one `EmployeePosition` entity based on its keys.
   */
  getByKey(positionId: number): GetByKeyRequestBuilder<EmployeePosition> {
    return new GetByKeyRequestBuilder(EmployeePosition, { PositionID: positionId });
  }

  /**
   * Returns a request builder for querying all `EmployeePosition` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeePosition` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeePosition> {
    return new GetAllRequestBuilder(EmployeePosition);
  }

  /**
   * Returns a request builder for creating a `EmployeePosition` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeePosition`.
   */
  create(entity: EmployeePosition): CreateRequestBuilder<EmployeePosition> {
    return new CreateRequestBuilder(EmployeePosition, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeePosition`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeePosition`.
   */
  update(entity: EmployeePosition): UpdateRequestBuilder<EmployeePosition> {
    return new UpdateRequestBuilder(EmployeePosition, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeePosition`.
   * @param positionId Key property. See [[EmployeePosition.positionId]].
   * @returns A request builder for creating requests that delete an entity of type `EmployeePosition`.
   */
  delete(positionId: number): DeleteRequestBuilder<EmployeePosition>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeePosition`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeePosition` by taking the entity as a parameter.
   */
  delete(entity: EmployeePosition): DeleteRequestBuilder<EmployeePosition>;
  delete(positionIdOrEntity: any): DeleteRequestBuilder<EmployeePosition> {
    return new DeleteRequestBuilder(EmployeePosition, positionIdOrEntity instanceof EmployeePosition ? positionIdOrEntity : { PositionID: positionIdOrEntity! });
  }
}
