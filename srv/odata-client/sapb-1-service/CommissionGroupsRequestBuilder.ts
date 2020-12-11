/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { CommissionGroups } from './CommissionGroups';

/**
 * Request builder class for operations supported on the [[CommissionGroups]] entity.
 */
export class CommissionGroupsRequestBuilder extends RequestBuilder<CommissionGroups> {
  /**
   * Returns a request builder for retrieving one `CommissionGroups` entity based on its keys.
   * @param commissionGroupCode Key property. See [[CommissionGroups.commissionGroupCode]].
   * @returns A request builder for creating requests to retrieve one `CommissionGroups` entity based on its keys.
   */
  getByKey(commissionGroupCode: number): GetByKeyRequestBuilderV4<CommissionGroups> {
    return new GetByKeyRequestBuilderV4(CommissionGroups, { CommissionGroupCode: commissionGroupCode });
  }

  /**
   * Returns a request builder for querying all `CommissionGroups` entities.
   * @returns A request builder for creating requests to retrieve all `CommissionGroups` entities.
   */
  getAll(): GetAllRequestBuilderV4<CommissionGroups> {
    return new GetAllRequestBuilderV4(CommissionGroups);
  }

  /**
   * Returns a request builder for creating a `CommissionGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CommissionGroups`.
   */
  create(entity: CommissionGroups): CreateRequestBuilderV4<CommissionGroups> {
    return new CreateRequestBuilderV4(CommissionGroups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CommissionGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CommissionGroups`.
   */
  update(entity: CommissionGroups): UpdateRequestBuilderV4<CommissionGroups> {
    return new UpdateRequestBuilderV4(CommissionGroups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CommissionGroups`.
   * @param commissionGroupCode Key property. See [[CommissionGroups.commissionGroupCode]].
   * @returns A request builder for creating requests that delete an entity of type `CommissionGroups`.
   */
  delete(commissionGroupCode: number): DeleteRequestBuilderV4<CommissionGroups>;
  /**
   * Returns a request builder for deleting an entity of type `CommissionGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CommissionGroups` by taking the entity as a parameter.
   */
  delete(entity: CommissionGroups): DeleteRequestBuilderV4<CommissionGroups>;
  delete(commissionGroupCodeOrEntity: any): DeleteRequestBuilderV4<CommissionGroups> {
    return new DeleteRequestBuilderV4(CommissionGroups, commissionGroupCodeOrEntity instanceof CommissionGroups ? commissionGroupCodeOrEntity : { CommissionGroupCode: commissionGroupCodeOrEntity! });
  }
}
