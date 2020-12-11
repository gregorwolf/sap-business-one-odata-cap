/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { MaterialGroups } from './MaterialGroups';

/**
 * Request builder class for operations supported on the [[MaterialGroups]] entity.
 */
export class MaterialGroupsRequestBuilder extends RequestBuilder<MaterialGroups> {
  /**
   * Returns a request builder for retrieving one `MaterialGroups` entity based on its keys.
   * @param absEntry Key property. See [[MaterialGroups.absEntry]].
   * @returns A request builder for creating requests to retrieve one `MaterialGroups` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilderV4<MaterialGroups> {
    return new GetByKeyRequestBuilderV4(MaterialGroups, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `MaterialGroups` entities.
   * @returns A request builder for creating requests to retrieve all `MaterialGroups` entities.
   */
  getAll(): GetAllRequestBuilderV4<MaterialGroups> {
    return new GetAllRequestBuilderV4(MaterialGroups);
  }

  /**
   * Returns a request builder for creating a `MaterialGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaterialGroups`.
   */
  create(entity: MaterialGroups): CreateRequestBuilderV4<MaterialGroups> {
    return new CreateRequestBuilderV4(MaterialGroups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `MaterialGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaterialGroups`.
   */
  update(entity: MaterialGroups): UpdateRequestBuilderV4<MaterialGroups> {
    return new UpdateRequestBuilderV4(MaterialGroups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MaterialGroups`.
   * @param absEntry Key property. See [[MaterialGroups.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `MaterialGroups`.
   */
  delete(absEntry: number): DeleteRequestBuilderV4<MaterialGroups>;
  /**
   * Returns a request builder for deleting an entity of type `MaterialGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaterialGroups` by taking the entity as a parameter.
   */
  delete(entity: MaterialGroups): DeleteRequestBuilderV4<MaterialGroups>;
  delete(absEntryOrEntity: any): DeleteRequestBuilderV4<MaterialGroups> {
    return new DeleteRequestBuilderV4(MaterialGroups, absEntryOrEntity instanceof MaterialGroups ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
