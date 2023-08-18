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
import { DeductionTaxGroups } from './DeductionTaxGroups';

/**
 * Request builder class for operations supported on the {@link DeductionTaxGroups} entity.
 */
export class DeductionTaxGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DeductionTaxGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `DeductionTaxGroups` entity based on its keys.
   * @param groupKey Key property. See {@link DeductionTaxGroups.groupKey}.
   * @returns A request builder for creating requests to retrieve one `DeductionTaxGroups` entity based on its keys.
   */
  getByKey(
    groupKey: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DeductionTaxGroups<T>, T> {
    return new GetByKeyRequestBuilder<DeductionTaxGroups<T>, T>(
      this.entityApi,
      { GroupKey: groupKey }
    );
  }

  /**
   * Returns a request builder for querying all `DeductionTaxGroups` entities.
   * @returns A request builder for creating requests to retrieve all `DeductionTaxGroups` entities.
   */
  getAll(): GetAllRequestBuilder<DeductionTaxGroups<T>, T> {
    return new GetAllRequestBuilder<DeductionTaxGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DeductionTaxGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeductionTaxGroups`.
   */
  create(
    entity: DeductionTaxGroups<T>
  ): CreateRequestBuilder<DeductionTaxGroups<T>, T> {
    return new CreateRequestBuilder<DeductionTaxGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DeductionTaxGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeductionTaxGroups`.
   */
  update(
    entity: DeductionTaxGroups<T>
  ): UpdateRequestBuilder<DeductionTaxGroups<T>, T> {
    return new UpdateRequestBuilder<DeductionTaxGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DeductionTaxGroups`.
   * @param groupKey Key property. See {@link DeductionTaxGroups.groupKey}.
   * @returns A request builder for creating requests that delete an entity of type `DeductionTaxGroups`.
   */
  delete(groupKey: number): DeleteRequestBuilder<DeductionTaxGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DeductionTaxGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeductionTaxGroups` by taking the entity as a parameter.
   */
  delete(
    entity: DeductionTaxGroups<T>
  ): DeleteRequestBuilder<DeductionTaxGroups<T>, T>;
  delete(
    groupKeyOrEntity: any
  ): DeleteRequestBuilder<DeductionTaxGroups<T>, T> {
    return new DeleteRequestBuilder<DeductionTaxGroups<T>, T>(
      this.entityApi,
      groupKeyOrEntity instanceof DeductionTaxGroups
        ? groupKeyOrEntity
        : { GroupKey: groupKeyOrEntity! }
    );
  }
}
