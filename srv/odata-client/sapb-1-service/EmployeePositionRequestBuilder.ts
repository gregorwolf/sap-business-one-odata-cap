/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(positionId: number): GetByKeyRequestBuilderV4<EmployeePosition> {
    return new GetByKeyRequestBuilderV4(EmployeePosition, { PositionID: positionId });
  }

  /**
   * Returns a request builder for querying all `EmployeePosition` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeePosition` entities.
   */
  getAll(): GetAllRequestBuilderV4<EmployeePosition> {
    return new GetAllRequestBuilderV4(EmployeePosition);
  }

  /**
   * Returns a request builder for creating a `EmployeePosition` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeePosition`.
   */
  create(entity: EmployeePosition): CreateRequestBuilderV4<EmployeePosition> {
    return new CreateRequestBuilderV4(EmployeePosition, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeePosition`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeePosition`.
   */
  update(entity: EmployeePosition): UpdateRequestBuilderV4<EmployeePosition> {
    return new UpdateRequestBuilderV4(EmployeePosition, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeePosition`.
   * @param positionId Key property. See [[EmployeePosition.positionId]].
   * @returns A request builder for creating requests that delete an entity of type `EmployeePosition`.
   */
  delete(positionId: number): DeleteRequestBuilderV4<EmployeePosition>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeePosition`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeePosition` by taking the entity as a parameter.
   */
  delete(entity: EmployeePosition): DeleteRequestBuilderV4<EmployeePosition>;
  delete(positionIdOrEntity: any): DeleteRequestBuilderV4<EmployeePosition> {
    return new DeleteRequestBuilderV4(EmployeePosition, positionIdOrEntity instanceof EmployeePosition ? positionIdOrEntity : { PositionID: positionIdOrEntity! });
  }
}
