/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { DeductionTaxSubGroups } from './DeductionTaxSubGroups';

/**
 * Request builder class for operations supported on the [[DeductionTaxSubGroups]] entity.
 */
export class DeductionTaxSubGroupsRequestBuilder extends RequestBuilder<DeductionTaxSubGroups> {
  /**
   * Returns a request builder for retrieving one `DeductionTaxSubGroups` entity based on its keys.
   * @param groupCode Key property. See [[DeductionTaxSubGroups.groupCode]].
   * @returns A request builder for creating requests to retrieve one `DeductionTaxSubGroups` entity based on its keys.
   */
  getByKey(groupCode: string): GetByKeyRequestBuilderV4<DeductionTaxSubGroups> {
    return new GetByKeyRequestBuilderV4(DeductionTaxSubGroups, { GroupCode: groupCode });
  }

  /**
   * Returns a request builder for querying all `DeductionTaxSubGroups` entities.
   * @returns A request builder for creating requests to retrieve all `DeductionTaxSubGroups` entities.
   */
  getAll(): GetAllRequestBuilderV4<DeductionTaxSubGroups> {
    return new GetAllRequestBuilderV4(DeductionTaxSubGroups);
  }

  /**
   * Returns a request builder for creating a `DeductionTaxSubGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeductionTaxSubGroups`.
   */
  create(entity: DeductionTaxSubGroups): CreateRequestBuilderV4<DeductionTaxSubGroups> {
    return new CreateRequestBuilderV4(DeductionTaxSubGroups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `DeductionTaxSubGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeductionTaxSubGroups`.
   */
  update(entity: DeductionTaxSubGroups): UpdateRequestBuilderV4<DeductionTaxSubGroups> {
    return new UpdateRequestBuilderV4(DeductionTaxSubGroups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DeductionTaxSubGroups`.
   * @param groupCode Key property. See [[DeductionTaxSubGroups.groupCode]].
   * @returns A request builder for creating requests that delete an entity of type `DeductionTaxSubGroups`.
   */
  delete(groupCode: string): DeleteRequestBuilderV4<DeductionTaxSubGroups>;
  /**
   * Returns a request builder for deleting an entity of type `DeductionTaxSubGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeductionTaxSubGroups` by taking the entity as a parameter.
   */
  delete(entity: DeductionTaxSubGroups): DeleteRequestBuilderV4<DeductionTaxSubGroups>;
  delete(groupCodeOrEntity: any): DeleteRequestBuilderV4<DeductionTaxSubGroups> {
    return new DeleteRequestBuilderV4(DeductionTaxSubGroups, groupCodeOrEntity instanceof DeductionTaxSubGroups ? groupCodeOrEntity : { GroupCode: groupCodeOrEntity! });
  }
}
