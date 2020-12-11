/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { DeductionTaxHierarchies } from './DeductionTaxHierarchies';

/**
 * Request builder class for operations supported on the [[DeductionTaxHierarchies]] entity.
 */
export class DeductionTaxHierarchiesRequestBuilder extends RequestBuilder<DeductionTaxHierarchies> {
  /**
   * Returns a request builder for retrieving one `DeductionTaxHierarchies` entity based on its keys.
   * @param absEntry Key property. See [[DeductionTaxHierarchies.absEntry]].
   * @returns A request builder for creating requests to retrieve one `DeductionTaxHierarchies` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilderV4<DeductionTaxHierarchies> {
    return new GetByKeyRequestBuilderV4(DeductionTaxHierarchies, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `DeductionTaxHierarchies` entities.
   * @returns A request builder for creating requests to retrieve all `DeductionTaxHierarchies` entities.
   */
  getAll(): GetAllRequestBuilderV4<DeductionTaxHierarchies> {
    return new GetAllRequestBuilderV4(DeductionTaxHierarchies);
  }

  /**
   * Returns a request builder for creating a `DeductionTaxHierarchies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeductionTaxHierarchies`.
   */
  create(entity: DeductionTaxHierarchies): CreateRequestBuilderV4<DeductionTaxHierarchies> {
    return new CreateRequestBuilderV4(DeductionTaxHierarchies, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `DeductionTaxHierarchies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeductionTaxHierarchies`.
   */
  update(entity: DeductionTaxHierarchies): UpdateRequestBuilderV4<DeductionTaxHierarchies> {
    return new UpdateRequestBuilderV4(DeductionTaxHierarchies, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DeductionTaxHierarchies`.
   * @param absEntry Key property. See [[DeductionTaxHierarchies.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `DeductionTaxHierarchies`.
   */
  delete(absEntry: number): DeleteRequestBuilderV4<DeductionTaxHierarchies>;
  /**
   * Returns a request builder for deleting an entity of type `DeductionTaxHierarchies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeductionTaxHierarchies` by taking the entity as a parameter.
   */
  delete(entity: DeductionTaxHierarchies): DeleteRequestBuilderV4<DeductionTaxHierarchies>;
  delete(absEntryOrEntity: any): DeleteRequestBuilderV4<DeductionTaxHierarchies> {
    return new DeleteRequestBuilderV4(DeductionTaxHierarchies, absEntryOrEntity instanceof DeductionTaxHierarchies ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
