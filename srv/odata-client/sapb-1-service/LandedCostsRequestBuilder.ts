/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { LandedCosts } from './LandedCosts';

/**
 * Request builder class for operations supported on the [[LandedCosts]] entity.
 */
export class LandedCostsRequestBuilder extends RequestBuilder<LandedCosts> {
  /**
   * Returns a request builder for retrieving one `LandedCosts` entity based on its keys.
   * @param docEntry Key property. See [[LandedCosts.docEntry]].
   * @returns A request builder for creating requests to retrieve one `LandedCosts` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilder<LandedCosts> {
    return new GetByKeyRequestBuilder(LandedCosts, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `LandedCosts` entities.
   * @returns A request builder for creating requests to retrieve all `LandedCosts` entities.
   */
  getAll(): GetAllRequestBuilder<LandedCosts> {
    return new GetAllRequestBuilder(LandedCosts);
  }

  /**
   * Returns a request builder for creating a `LandedCosts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LandedCosts`.
   */
  create(entity: LandedCosts): CreateRequestBuilder<LandedCosts> {
    return new CreateRequestBuilder(LandedCosts, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `LandedCosts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LandedCosts`.
   */
  update(entity: LandedCosts): UpdateRequestBuilder<LandedCosts> {
    return new UpdateRequestBuilder(LandedCosts, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LandedCosts`.
   * @param docEntry Key property. See [[LandedCosts.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `LandedCosts`.
   */
  delete(docEntry: number): DeleteRequestBuilder<LandedCosts>;
  /**
   * Returns a request builder for deleting an entity of type `LandedCosts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LandedCosts` by taking the entity as a parameter.
   */
  delete(entity: LandedCosts): DeleteRequestBuilder<LandedCosts>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<LandedCosts> {
    return new DeleteRequestBuilder(LandedCosts, docEntryOrEntity instanceof LandedCosts ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
