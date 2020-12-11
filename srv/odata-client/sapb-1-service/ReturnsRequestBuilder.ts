/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<Returns> {
    return new GetByKeyRequestBuilderV4(Returns, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `Returns` entities.
   * @returns A request builder for creating requests to retrieve all `Returns` entities.
   */
  getAll(): GetAllRequestBuilderV4<Returns> {
    return new GetAllRequestBuilderV4(Returns);
  }

  /**
   * Returns a request builder for creating a `Returns` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Returns`.
   */
  create(entity: Returns): CreateRequestBuilderV4<Returns> {
    return new CreateRequestBuilderV4(Returns, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Returns`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Returns`.
   */
  update(entity: Returns): UpdateRequestBuilderV4<Returns> {
    return new UpdateRequestBuilderV4(Returns, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Returns`.
   * @param docEntry Key property. See [[Returns.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `Returns`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<Returns>;
  /**
   * Returns a request builder for deleting an entity of type `Returns`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Returns` by taking the entity as a parameter.
   */
  delete(entity: Returns): DeleteRequestBuilderV4<Returns>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<Returns> {
    return new DeleteRequestBuilderV4(Returns, docEntryOrEntity instanceof Returns ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
