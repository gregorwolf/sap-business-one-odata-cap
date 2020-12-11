/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { TaxCodeDeterminations } from './TaxCodeDeterminations';

/**
 * Request builder class for operations supported on the [[TaxCodeDeterminations]] entity.
 */
export class TaxCodeDeterminationsRequestBuilder extends RequestBuilder<TaxCodeDeterminations> {
  /**
   * Returns a request builder for retrieving one `TaxCodeDeterminations` entity based on its keys.
   * @param docEntry Key property. See [[TaxCodeDeterminations.docEntry]].
   * @returns A request builder for creating requests to retrieve one `TaxCodeDeterminations` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<TaxCodeDeterminations> {
    return new GetByKeyRequestBuilderV4(TaxCodeDeterminations, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `TaxCodeDeterminations` entities.
   * @returns A request builder for creating requests to retrieve all `TaxCodeDeterminations` entities.
   */
  getAll(): GetAllRequestBuilderV4<TaxCodeDeterminations> {
    return new GetAllRequestBuilderV4(TaxCodeDeterminations);
  }

  /**
   * Returns a request builder for creating a `TaxCodeDeterminations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxCodeDeterminations`.
   */
  create(entity: TaxCodeDeterminations): CreateRequestBuilderV4<TaxCodeDeterminations> {
    return new CreateRequestBuilderV4(TaxCodeDeterminations, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TaxCodeDeterminations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxCodeDeterminations`.
   */
  update(entity: TaxCodeDeterminations): UpdateRequestBuilderV4<TaxCodeDeterminations> {
    return new UpdateRequestBuilderV4(TaxCodeDeterminations, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxCodeDeterminations`.
   * @param docEntry Key property. See [[TaxCodeDeterminations.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `TaxCodeDeterminations`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<TaxCodeDeterminations>;
  /**
   * Returns a request builder for deleting an entity of type `TaxCodeDeterminations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxCodeDeterminations` by taking the entity as a parameter.
   */
  delete(entity: TaxCodeDeterminations): DeleteRequestBuilderV4<TaxCodeDeterminations>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<TaxCodeDeterminations> {
    return new DeleteRequestBuilderV4(TaxCodeDeterminations, docEntryOrEntity instanceof TaxCodeDeterminations ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
