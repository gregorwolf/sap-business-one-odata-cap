/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Drafts } from './Drafts';

/**
 * Request builder class for operations supported on the [[Drafts]] entity.
 */
export class DraftsRequestBuilder extends RequestBuilder<Drafts> {
  /**
   * Returns a request builder for retrieving one `Drafts` entity based on its keys.
   * @param docEntry Key property. See [[Drafts.docEntry]].
   * @returns A request builder for creating requests to retrieve one `Drafts` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<Drafts> {
    return new GetByKeyRequestBuilderV4(Drafts, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `Drafts` entities.
   * @returns A request builder for creating requests to retrieve all `Drafts` entities.
   */
  getAll(): GetAllRequestBuilderV4<Drafts> {
    return new GetAllRequestBuilderV4(Drafts);
  }

  /**
   * Returns a request builder for creating a `Drafts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Drafts`.
   */
  create(entity: Drafts): CreateRequestBuilderV4<Drafts> {
    return new CreateRequestBuilderV4(Drafts, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Drafts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Drafts`.
   */
  update(entity: Drafts): UpdateRequestBuilderV4<Drafts> {
    return new UpdateRequestBuilderV4(Drafts, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Drafts`.
   * @param docEntry Key property. See [[Drafts.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `Drafts`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<Drafts>;
  /**
   * Returns a request builder for deleting an entity of type `Drafts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Drafts` by taking the entity as a parameter.
   */
  delete(entity: Drafts): DeleteRequestBuilderV4<Drafts>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<Drafts> {
    return new DeleteRequestBuilderV4(Drafts, docEntryOrEntity instanceof Drafts ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
