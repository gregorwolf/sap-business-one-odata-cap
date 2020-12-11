/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { UnitOfMeasurementGroups } from './UnitOfMeasurementGroups';

/**
 * Request builder class for operations supported on the [[UnitOfMeasurementGroups]] entity.
 */
export class UnitOfMeasurementGroupsRequestBuilder extends RequestBuilder<UnitOfMeasurementGroups> {
  /**
   * Returns a request builder for retrieving one `UnitOfMeasurementGroups` entity based on its keys.
   * @param absEntry Key property. See [[UnitOfMeasurementGroups.absEntry]].
   * @returns A request builder for creating requests to retrieve one `UnitOfMeasurementGroups` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilderV4<UnitOfMeasurementGroups> {
    return new GetByKeyRequestBuilderV4(UnitOfMeasurementGroups, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `UnitOfMeasurementGroups` entities.
   * @returns A request builder for creating requests to retrieve all `UnitOfMeasurementGroups` entities.
   */
  getAll(): GetAllRequestBuilderV4<UnitOfMeasurementGroups> {
    return new GetAllRequestBuilderV4(UnitOfMeasurementGroups);
  }

  /**
   * Returns a request builder for creating a `UnitOfMeasurementGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UnitOfMeasurementGroups`.
   */
  create(entity: UnitOfMeasurementGroups): CreateRequestBuilderV4<UnitOfMeasurementGroups> {
    return new CreateRequestBuilderV4(UnitOfMeasurementGroups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `UnitOfMeasurementGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UnitOfMeasurementGroups`.
   */
  update(entity: UnitOfMeasurementGroups): UpdateRequestBuilderV4<UnitOfMeasurementGroups> {
    return new UpdateRequestBuilderV4(UnitOfMeasurementGroups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UnitOfMeasurementGroups`.
   * @param absEntry Key property. See [[UnitOfMeasurementGroups.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `UnitOfMeasurementGroups`.
   */
  delete(absEntry: number): DeleteRequestBuilderV4<UnitOfMeasurementGroups>;
  /**
   * Returns a request builder for deleting an entity of type `UnitOfMeasurementGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UnitOfMeasurementGroups` by taking the entity as a parameter.
   */
  delete(entity: UnitOfMeasurementGroups): DeleteRequestBuilderV4<UnitOfMeasurementGroups>;
  delete(absEntryOrEntity: any): DeleteRequestBuilderV4<UnitOfMeasurementGroups> {
    return new DeleteRequestBuilderV4(UnitOfMeasurementGroups, absEntryOrEntity instanceof UnitOfMeasurementGroups ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
