/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { EnhancedDiscountGroups } from './EnhancedDiscountGroups';

/**
 * Request builder class for operations supported on the [[EnhancedDiscountGroups]] entity.
 */
export class EnhancedDiscountGroupsRequestBuilder extends RequestBuilder<EnhancedDiscountGroups> {
  /**
   * Returns a request builder for retrieving one `EnhancedDiscountGroups` entity based on its keys.
   * @param absEntry Key property. See [[EnhancedDiscountGroups.absEntry]].
   * @returns A request builder for creating requests to retrieve one `EnhancedDiscountGroups` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilderV4<EnhancedDiscountGroups> {
    return new GetByKeyRequestBuilderV4(EnhancedDiscountGroups, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `EnhancedDiscountGroups` entities.
   * @returns A request builder for creating requests to retrieve all `EnhancedDiscountGroups` entities.
   */
  getAll(): GetAllRequestBuilderV4<EnhancedDiscountGroups> {
    return new GetAllRequestBuilderV4(EnhancedDiscountGroups);
  }

  /**
   * Returns a request builder for creating a `EnhancedDiscountGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EnhancedDiscountGroups`.
   */
  create(entity: EnhancedDiscountGroups): CreateRequestBuilderV4<EnhancedDiscountGroups> {
    return new CreateRequestBuilderV4(EnhancedDiscountGroups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EnhancedDiscountGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EnhancedDiscountGroups`.
   */
  update(entity: EnhancedDiscountGroups): UpdateRequestBuilderV4<EnhancedDiscountGroups> {
    return new UpdateRequestBuilderV4(EnhancedDiscountGroups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EnhancedDiscountGroups`.
   * @param absEntry Key property. See [[EnhancedDiscountGroups.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `EnhancedDiscountGroups`.
   */
  delete(absEntry: number): DeleteRequestBuilderV4<EnhancedDiscountGroups>;
  /**
   * Returns a request builder for deleting an entity of type `EnhancedDiscountGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EnhancedDiscountGroups` by taking the entity as a parameter.
   */
  delete(entity: EnhancedDiscountGroups): DeleteRequestBuilderV4<EnhancedDiscountGroups>;
  delete(absEntryOrEntity: any): DeleteRequestBuilderV4<EnhancedDiscountGroups> {
    return new DeleteRequestBuilderV4(EnhancedDiscountGroups, absEntryOrEntity instanceof EnhancedDiscountGroups ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
