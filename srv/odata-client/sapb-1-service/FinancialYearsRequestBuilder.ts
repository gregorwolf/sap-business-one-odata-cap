/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { FinancialYears } from './FinancialYears';

/**
 * Request builder class for operations supported on the [[FinancialYears]] entity.
 */
export class FinancialYearsRequestBuilder extends RequestBuilder<FinancialYears> {
  /**
   * Returns a request builder for retrieving one `FinancialYears` entity based on its keys.
   * @param absEntry Key property. See [[FinancialYears.absEntry]].
   * @returns A request builder for creating requests to retrieve one `FinancialYears` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilderV4<FinancialYears> {
    return new GetByKeyRequestBuilderV4(FinancialYears, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `FinancialYears` entities.
   * @returns A request builder for creating requests to retrieve all `FinancialYears` entities.
   */
  getAll(): GetAllRequestBuilderV4<FinancialYears> {
    return new GetAllRequestBuilderV4(FinancialYears);
  }

  /**
   * Returns a request builder for creating a `FinancialYears` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FinancialYears`.
   */
  create(entity: FinancialYears): CreateRequestBuilderV4<FinancialYears> {
    return new CreateRequestBuilderV4(FinancialYears, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `FinancialYears`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FinancialYears`.
   */
  update(entity: FinancialYears): UpdateRequestBuilderV4<FinancialYears> {
    return new UpdateRequestBuilderV4(FinancialYears, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FinancialYears`.
   * @param absEntry Key property. See [[FinancialYears.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `FinancialYears`.
   */
  delete(absEntry: number): DeleteRequestBuilderV4<FinancialYears>;
  /**
   * Returns a request builder for deleting an entity of type `FinancialYears`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FinancialYears` by taking the entity as a parameter.
   */
  delete(entity: FinancialYears): DeleteRequestBuilderV4<FinancialYears>;
  delete(absEntryOrEntity: any): DeleteRequestBuilderV4<FinancialYears> {
    return new DeleteRequestBuilderV4(FinancialYears, absEntryOrEntity instanceof FinancialYears ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
