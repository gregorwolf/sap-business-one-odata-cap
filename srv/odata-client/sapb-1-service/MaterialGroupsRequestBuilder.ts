/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(absEntry: number): GetByKeyRequestBuilder<MaterialGroups> {
    return new GetByKeyRequestBuilder(MaterialGroups, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `MaterialGroups` entities.
   * @returns A request builder for creating requests to retrieve all `MaterialGroups` entities.
   */
  getAll(): GetAllRequestBuilder<MaterialGroups> {
    return new GetAllRequestBuilder(MaterialGroups);
  }

  /**
   * Returns a request builder for creating a `MaterialGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaterialGroups`.
   */
  create(entity: MaterialGroups): CreateRequestBuilder<MaterialGroups> {
    return new CreateRequestBuilder(MaterialGroups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `MaterialGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaterialGroups`.
   */
  update(entity: MaterialGroups): UpdateRequestBuilder<MaterialGroups> {
    return new UpdateRequestBuilder(MaterialGroups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MaterialGroups`.
   * @param absEntry Key property. See [[MaterialGroups.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `MaterialGroups`.
   */
  delete(absEntry: number): DeleteRequestBuilder<MaterialGroups>;
  /**
   * Returns a request builder for deleting an entity of type `MaterialGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaterialGroups` by taking the entity as a parameter.
   */
  delete(entity: MaterialGroups): DeleteRequestBuilder<MaterialGroups>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<MaterialGroups> {
    return new DeleteRequestBuilder(MaterialGroups, absEntryOrEntity instanceof MaterialGroups ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
