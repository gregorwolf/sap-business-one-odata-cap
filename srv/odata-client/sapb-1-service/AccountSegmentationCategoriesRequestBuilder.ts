/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(segmentId: number, code: string): GetByKeyRequestBuilder<AccountSegmentationCategories> {
    return new GetByKeyRequestBuilder(AccountSegmentationCategories, {
      SegmentID: segmentId,
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `AccountSegmentationCategories` entities.
   * @returns A request builder for creating requests to retrieve all `AccountSegmentationCategories` entities.
   */
  getAll(): GetAllRequestBuilder<AccountSegmentationCategories> {
    return new GetAllRequestBuilder(AccountSegmentationCategories);
  }

  /**
   * Returns a request builder for creating a `AccountSegmentationCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccountSegmentationCategories`.
   */
  create(entity: AccountSegmentationCategories): CreateRequestBuilder<AccountSegmentationCategories> {
    return new CreateRequestBuilder(AccountSegmentationCategories, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AccountSegmentationCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccountSegmentationCategories`.
   */
  update(entity: AccountSegmentationCategories): UpdateRequestBuilder<AccountSegmentationCategories> {
    return new UpdateRequestBuilder(AccountSegmentationCategories, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AccountSegmentationCategories`.
   * @param segmentId Key property. See [[AccountSegmentationCategories.segmentId]].
   * @param code Key property. See [[AccountSegmentationCategories.code]].
   * @returns A request builder for creating requests that delete an entity of type `AccountSegmentationCategories`.
   */
  delete(segmentId: number, code: string): DeleteRequestBuilder<AccountSegmentationCategories>;
  /**
   * Returns a request builder for deleting an entity of type `AccountSegmentationCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccountSegmentationCategories` by taking the entity as a parameter.
   */
  delete(entity: AccountSegmentationCategories): DeleteRequestBuilder<AccountSegmentationCategories>;
  delete(segmentIdOrEntity: any, code?: string): DeleteRequestBuilder<AccountSegmentationCategories> {
    return new DeleteRequestBuilder(AccountSegmentationCategories, segmentIdOrEntity instanceof AccountSegmentationCategories ? segmentIdOrEntity : {
      SegmentID: segmentIdOrEntity!,
      Code: code!
    });
  }
}
