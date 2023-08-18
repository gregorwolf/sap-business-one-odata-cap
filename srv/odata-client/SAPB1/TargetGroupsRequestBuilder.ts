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
import { TargetGroups } from './TargetGroups';

/**
 * Request builder class for operations supported on the {@link TargetGroups} entity.
 */
export class TargetGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TargetGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `TargetGroups` entity based on its keys.
   * @param targetGroupCode Key property. See {@link TargetGroups.targetGroupCode}.
   * @returns A request builder for creating requests to retrieve one `TargetGroups` entity based on its keys.
   */
  getByKey(
    targetGroupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TargetGroups<T>, T> {
    return new GetByKeyRequestBuilder<TargetGroups<T>, T>(this.entityApi, {
      TargetGroupCode: targetGroupCode
    });
  }

  /**
   * Returns a request builder for querying all `TargetGroups` entities.
   * @returns A request builder for creating requests to retrieve all `TargetGroups` entities.
   */
  getAll(): GetAllRequestBuilder<TargetGroups<T>, T> {
    return new GetAllRequestBuilder<TargetGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TargetGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TargetGroups`.
   */
  create(entity: TargetGroups<T>): CreateRequestBuilder<TargetGroups<T>, T> {
    return new CreateRequestBuilder<TargetGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TargetGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TargetGroups`.
   */
  update(entity: TargetGroups<T>): UpdateRequestBuilder<TargetGroups<T>, T> {
    return new UpdateRequestBuilder<TargetGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TargetGroups`.
   * @param targetGroupCode Key property. See {@link TargetGroups.targetGroupCode}.
   * @returns A request builder for creating requests that delete an entity of type `TargetGroups`.
   */
  delete(targetGroupCode: string): DeleteRequestBuilder<TargetGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TargetGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TargetGroups` by taking the entity as a parameter.
   */
  delete(entity: TargetGroups<T>): DeleteRequestBuilder<TargetGroups<T>, T>;
  delete(
    targetGroupCodeOrEntity: any
  ): DeleteRequestBuilder<TargetGroups<T>, T> {
    return new DeleteRequestBuilder<TargetGroups<T>, T>(
      this.entityApi,
      targetGroupCodeOrEntity instanceof TargetGroups
        ? targetGroupCodeOrEntity
        : { TargetGroupCode: targetGroupCodeOrEntity! }
    );
  }
}
