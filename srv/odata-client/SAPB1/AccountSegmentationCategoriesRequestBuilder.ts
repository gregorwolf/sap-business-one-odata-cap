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
import { AccountSegmentationCategories } from './AccountSegmentationCategories';

/**
 * Request builder class for operations supported on the {@link AccountSegmentationCategories} entity.
 */
export class AccountSegmentationCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AccountSegmentationCategories<T>, T> {
  /**
   * Returns a request builder for retrieving one `AccountSegmentationCategories` entity based on its keys.
   * @param segmentId Key property. See {@link AccountSegmentationCategories.segmentId}.
   * @param code Key property. See {@link AccountSegmentationCategories.code}.
   * @returns A request builder for creating requests to retrieve one `AccountSegmentationCategories` entity based on its keys.
   */
  getByKey(
    segmentId: DeserializedType<T, 'Edm.Int32'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AccountSegmentationCategories<T>, T> {
    return new GetByKeyRequestBuilder<AccountSegmentationCategories<T>, T>(
      this.entityApi,
      {
        SegmentID: segmentId,
        Code: code
      }
    );
  }

  /**
   * Returns a request builder for querying all `AccountSegmentationCategories` entities.
   * @returns A request builder for creating requests to retrieve all `AccountSegmentationCategories` entities.
   */
  getAll(): GetAllRequestBuilder<AccountSegmentationCategories<T>, T> {
    return new GetAllRequestBuilder<AccountSegmentationCategories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AccountSegmentationCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccountSegmentationCategories`.
   */
  create(
    entity: AccountSegmentationCategories<T>
  ): CreateRequestBuilder<AccountSegmentationCategories<T>, T> {
    return new CreateRequestBuilder<AccountSegmentationCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AccountSegmentationCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccountSegmentationCategories`.
   */
  update(
    entity: AccountSegmentationCategories<T>
  ): UpdateRequestBuilder<AccountSegmentationCategories<T>, T> {
    return new UpdateRequestBuilder<AccountSegmentationCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AccountSegmentationCategories`.
   * @param segmentId Key property. See {@link AccountSegmentationCategories.segmentId}.
   * @param code Key property. See {@link AccountSegmentationCategories.code}.
   * @returns A request builder for creating requests that delete an entity of type `AccountSegmentationCategories`.
   */
  delete(
    segmentId: number,
    code: string
  ): DeleteRequestBuilder<AccountSegmentationCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AccountSegmentationCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccountSegmentationCategories` by taking the entity as a parameter.
   */
  delete(
    entity: AccountSegmentationCategories<T>
  ): DeleteRequestBuilder<AccountSegmentationCategories<T>, T>;
  delete(
    segmentIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<AccountSegmentationCategories<T>, T> {
    return new DeleteRequestBuilder<AccountSegmentationCategories<T>, T>(
      this.entityApi,
      segmentIdOrEntity instanceof AccountSegmentationCategories
        ? segmentIdOrEntity
        : {
            SegmentID: segmentIdOrEntity!,
            Code: code!
          }
    );
  }
}
