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
import { EnhancedDiscountGroups } from './EnhancedDiscountGroups';

/**
 * Request builder class for operations supported on the {@link EnhancedDiscountGroups} entity.
 */
export class EnhancedDiscountGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EnhancedDiscountGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `EnhancedDiscountGroups` entity based on its keys.
   * @param absEntry Key property. See {@link EnhancedDiscountGroups.absEntry}.
   * @returns A request builder for creating requests to retrieve one `EnhancedDiscountGroups` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<EnhancedDiscountGroups<T>, T> {
    return new GetByKeyRequestBuilder<EnhancedDiscountGroups<T>, T>(
      this.entityApi,
      { AbsEntry: absEntry }
    );
  }

  /**
   * Returns a request builder for querying all `EnhancedDiscountGroups` entities.
   * @returns A request builder for creating requests to retrieve all `EnhancedDiscountGroups` entities.
   */
  getAll(): GetAllRequestBuilder<EnhancedDiscountGroups<T>, T> {
    return new GetAllRequestBuilder<EnhancedDiscountGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EnhancedDiscountGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EnhancedDiscountGroups`.
   */
  create(
    entity: EnhancedDiscountGroups<T>
  ): CreateRequestBuilder<EnhancedDiscountGroups<T>, T> {
    return new CreateRequestBuilder<EnhancedDiscountGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EnhancedDiscountGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EnhancedDiscountGroups`.
   */
  update(
    entity: EnhancedDiscountGroups<T>
  ): UpdateRequestBuilder<EnhancedDiscountGroups<T>, T> {
    return new UpdateRequestBuilder<EnhancedDiscountGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EnhancedDiscountGroups`.
   * @param absEntry Key property. See {@link EnhancedDiscountGroups.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `EnhancedDiscountGroups`.
   */
  delete(absEntry: number): DeleteRequestBuilder<EnhancedDiscountGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EnhancedDiscountGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EnhancedDiscountGroups` by taking the entity as a parameter.
   */
  delete(
    entity: EnhancedDiscountGroups<T>
  ): DeleteRequestBuilder<EnhancedDiscountGroups<T>, T>;
  delete(
    absEntryOrEntity: any
  ): DeleteRequestBuilder<EnhancedDiscountGroups<T>, T> {
    return new DeleteRequestBuilder<EnhancedDiscountGroups<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof EnhancedDiscountGroups
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
