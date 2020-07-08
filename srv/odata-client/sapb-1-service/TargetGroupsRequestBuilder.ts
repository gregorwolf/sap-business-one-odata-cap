/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { TargetGroups } from './TargetGroups';

/**
 * Request builder class for operations supported on the [[TargetGroups]] entity.
 */
export class TargetGroupsRequestBuilder extends RequestBuilder<TargetGroups> {
  /**
   * Returns a request builder for retrieving one `TargetGroups` entity based on its keys.
   * @param targetGroupCode Key property. See [[TargetGroups.targetGroupCode]].
   * @returns A request builder for creating requests to retrieve one `TargetGroups` entity based on its keys.
   */
  getByKey(targetGroupCode: string): GetByKeyRequestBuilder<TargetGroups> {
    return new GetByKeyRequestBuilder(TargetGroups, { TargetGroupCode: targetGroupCode });
  }

  /**
   * Returns a request builder for querying all `TargetGroups` entities.
   * @returns A request builder for creating requests to retrieve all `TargetGroups` entities.
   */
  getAll(): GetAllRequestBuilder<TargetGroups> {
    return new GetAllRequestBuilder(TargetGroups);
  }

  /**
   * Returns a request builder for creating a `TargetGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TargetGroups`.
   */
  create(entity: TargetGroups): CreateRequestBuilder<TargetGroups> {
    return new CreateRequestBuilder(TargetGroups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TargetGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TargetGroups`.
   */
  update(entity: TargetGroups): UpdateRequestBuilder<TargetGroups> {
    return new UpdateRequestBuilder(TargetGroups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TargetGroups`.
   * @param targetGroupCode Key property. See [[TargetGroups.targetGroupCode]].
   * @returns A request builder for creating requests that delete an entity of type `TargetGroups`.
   */
  delete(targetGroupCode: string): DeleteRequestBuilder<TargetGroups>;
  /**
   * Returns a request builder for deleting an entity of type `TargetGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TargetGroups` by taking the entity as a parameter.
   */
  delete(entity: TargetGroups): DeleteRequestBuilder<TargetGroups>;
  delete(targetGroupCodeOrEntity: any): DeleteRequestBuilder<TargetGroups> {
    return new DeleteRequestBuilder(TargetGroups, targetGroupCodeOrEntity instanceof TargetGroups ? targetGroupCodeOrEntity : { TargetGroupCode: targetGroupCodeOrEntity! });
  }
}
