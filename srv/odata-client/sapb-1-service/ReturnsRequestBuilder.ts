/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Returns } from './Returns';

/**
 * Request builder class for operations supported on the [[Returns]] entity.
 */
export class ReturnsRequestBuilder extends RequestBuilder<Returns> {
  /**
   * Returns a request builder for retrieving one `Returns` entity based on its keys.
   * @param docEntry Key property. See [[Returns.docEntry]].
   * @returns A request builder for creating requests to retrieve one `Returns` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilder<Returns> {
    return new GetByKeyRequestBuilder(Returns, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `Returns` entities.
   * @returns A request builder for creating requests to retrieve all `Returns` entities.
   */
  getAll(): GetAllRequestBuilder<Returns> {
    return new GetAllRequestBuilder(Returns);
  }

  /**
   * Returns a request builder for creating a `Returns` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Returns`.
   */
  create(entity: Returns): CreateRequestBuilder<Returns> {
    return new CreateRequestBuilder(Returns, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Returns`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Returns`.
   */
  update(entity: Returns): UpdateRequestBuilder<Returns> {
    return new UpdateRequestBuilder(Returns, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Returns`.
   * @param docEntry Key property. See [[Returns.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `Returns`.
   */
  delete(docEntry: number): DeleteRequestBuilder<Returns>;
  /**
   * Returns a request builder for deleting an entity of type `Returns`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Returns` by taking the entity as a parameter.
   */
  delete(entity: Returns): DeleteRequestBuilder<Returns>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<Returns> {
    return new DeleteRequestBuilder(Returns, docEntryOrEntity instanceof Returns ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
