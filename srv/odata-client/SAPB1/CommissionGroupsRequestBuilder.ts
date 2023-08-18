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
import { CommissionGroups } from './CommissionGroups';

/**
 * Request builder class for operations supported on the {@link CommissionGroups} entity.
 */
export class CommissionGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CommissionGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `CommissionGroups` entity based on its keys.
   * @param commissionGroupCode Key property. See {@link CommissionGroups.commissionGroupCode}.
   * @returns A request builder for creating requests to retrieve one `CommissionGroups` entity based on its keys.
   */
  getByKey(
    commissionGroupCode: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CommissionGroups<T>, T> {
    return new GetByKeyRequestBuilder<CommissionGroups<T>, T>(this.entityApi, {
      CommissionGroupCode: commissionGroupCode
    });
  }

  /**
   * Returns a request builder for querying all `CommissionGroups` entities.
   * @returns A request builder for creating requests to retrieve all `CommissionGroups` entities.
   */
  getAll(): GetAllRequestBuilder<CommissionGroups<T>, T> {
    return new GetAllRequestBuilder<CommissionGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CommissionGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CommissionGroups`.
   */
  create(
    entity: CommissionGroups<T>
  ): CreateRequestBuilder<CommissionGroups<T>, T> {
    return new CreateRequestBuilder<CommissionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CommissionGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CommissionGroups`.
   */
  update(
    entity: CommissionGroups<T>
  ): UpdateRequestBuilder<CommissionGroups<T>, T> {
    return new UpdateRequestBuilder<CommissionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CommissionGroups`.
   * @param commissionGroupCode Key property. See {@link CommissionGroups.commissionGroupCode}.
   * @returns A request builder for creating requests that delete an entity of type `CommissionGroups`.
   */
  delete(
    commissionGroupCode: number
  ): DeleteRequestBuilder<CommissionGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CommissionGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CommissionGroups` by taking the entity as a parameter.
   */
  delete(
    entity: CommissionGroups<T>
  ): DeleteRequestBuilder<CommissionGroups<T>, T>;
  delete(
    commissionGroupCodeOrEntity: any
  ): DeleteRequestBuilder<CommissionGroups<T>, T> {
    return new DeleteRequestBuilder<CommissionGroups<T>, T>(
      this.entityApi,
      commissionGroupCodeOrEntity instanceof CommissionGroups
        ? commissionGroupCodeOrEntity
        : { CommissionGroupCode: commissionGroupCodeOrEntity! }
    );
  }
}
