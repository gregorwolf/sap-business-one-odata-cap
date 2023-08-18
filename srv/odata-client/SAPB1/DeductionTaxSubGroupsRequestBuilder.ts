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
import { DeductionTaxSubGroups } from './DeductionTaxSubGroups';

/**
 * Request builder class for operations supported on the {@link DeductionTaxSubGroups} entity.
 */
export class DeductionTaxSubGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DeductionTaxSubGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `DeductionTaxSubGroups` entity based on its keys.
   * @param groupCode Key property. See {@link DeductionTaxSubGroups.groupCode}.
   * @returns A request builder for creating requests to retrieve one `DeductionTaxSubGroups` entity based on its keys.
   */
  getByKey(
    groupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DeductionTaxSubGroups<T>, T> {
    return new GetByKeyRequestBuilder<DeductionTaxSubGroups<T>, T>(
      this.entityApi,
      { GroupCode: groupCode }
    );
  }

  /**
   * Returns a request builder for querying all `DeductionTaxSubGroups` entities.
   * @returns A request builder for creating requests to retrieve all `DeductionTaxSubGroups` entities.
   */
  getAll(): GetAllRequestBuilder<DeductionTaxSubGroups<T>, T> {
    return new GetAllRequestBuilder<DeductionTaxSubGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DeductionTaxSubGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeductionTaxSubGroups`.
   */
  create(
    entity: DeductionTaxSubGroups<T>
  ): CreateRequestBuilder<DeductionTaxSubGroups<T>, T> {
    return new CreateRequestBuilder<DeductionTaxSubGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DeductionTaxSubGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeductionTaxSubGroups`.
   */
  update(
    entity: DeductionTaxSubGroups<T>
  ): UpdateRequestBuilder<DeductionTaxSubGroups<T>, T> {
    return new UpdateRequestBuilder<DeductionTaxSubGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DeductionTaxSubGroups`.
   * @param groupCode Key property. See {@link DeductionTaxSubGroups.groupCode}.
   * @returns A request builder for creating requests that delete an entity of type `DeductionTaxSubGroups`.
   */
  delete(groupCode: string): DeleteRequestBuilder<DeductionTaxSubGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DeductionTaxSubGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeductionTaxSubGroups` by taking the entity as a parameter.
   */
  delete(
    entity: DeductionTaxSubGroups<T>
  ): DeleteRequestBuilder<DeductionTaxSubGroups<T>, T>;
  delete(
    groupCodeOrEntity: any
  ): DeleteRequestBuilder<DeductionTaxSubGroups<T>, T> {
    return new DeleteRequestBuilder<DeductionTaxSubGroups<T>, T>(
      this.entityApi,
      groupCodeOrEntity instanceof DeductionTaxSubGroups
        ? groupCodeOrEntity
        : { GroupCode: groupCodeOrEntity! }
    );
  }
}
