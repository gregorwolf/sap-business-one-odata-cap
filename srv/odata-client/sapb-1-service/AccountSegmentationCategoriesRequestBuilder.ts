/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { AccountSegmentationCategories } from './AccountSegmentationCategories';

/**
 * Request builder class for operations supported on the [[AccountSegmentationCategories]] entity.
 */
export class AccountSegmentationCategoriesRequestBuilder extends RequestBuilder<AccountSegmentationCategories> {
  /**
   * Returns a request builder for retrieving one `AccountSegmentationCategories` entity based on its keys.
   * @param segmentId Key property. See [[AccountSegmentationCategories.segmentId]].
   * @param code Key property. See [[AccountSegmentationCategories.code]].
   * @returns A request builder for creating requests to retrieve one `AccountSegmentationCategories` entity based on its keys.
   */
  getByKey(segmentId: number, code: string): GetByKeyRequestBuilderV4<AccountSegmentationCategories> {
    return new GetByKeyRequestBuilderV4(AccountSegmentationCategories, {
      SegmentID: segmentId,
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `AccountSegmentationCategories` entities.
   * @returns A request builder for creating requests to retrieve all `AccountSegmentationCategories` entities.
   */
  getAll(): GetAllRequestBuilderV4<AccountSegmentationCategories> {
    return new GetAllRequestBuilderV4(AccountSegmentationCategories);
  }

  /**
   * Returns a request builder for creating a `AccountSegmentationCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccountSegmentationCategories`.
   */
  create(entity: AccountSegmentationCategories): CreateRequestBuilderV4<AccountSegmentationCategories> {
    return new CreateRequestBuilderV4(AccountSegmentationCategories, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AccountSegmentationCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccountSegmentationCategories`.
   */
  update(entity: AccountSegmentationCategories): UpdateRequestBuilderV4<AccountSegmentationCategories> {
    return new UpdateRequestBuilderV4(AccountSegmentationCategories, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AccountSegmentationCategories`.
   * @param segmentId Key property. See [[AccountSegmentationCategories.segmentId]].
   * @param code Key property. See [[AccountSegmentationCategories.code]].
   * @returns A request builder for creating requests that delete an entity of type `AccountSegmentationCategories`.
   */
  delete(segmentId: number, code: string): DeleteRequestBuilderV4<AccountSegmentationCategories>;
  /**
   * Returns a request builder for deleting an entity of type `AccountSegmentationCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccountSegmentationCategories` by taking the entity as a parameter.
   */
  delete(entity: AccountSegmentationCategories): DeleteRequestBuilderV4<AccountSegmentationCategories>;
  delete(segmentIdOrEntity: any, code?: string): DeleteRequestBuilderV4<AccountSegmentationCategories> {
    return new DeleteRequestBuilderV4(AccountSegmentationCategories, segmentIdOrEntity instanceof AccountSegmentationCategories ? segmentIdOrEntity : {
      SegmentID: segmentIdOrEntity!,
      Code: code!
    });
  }
}
