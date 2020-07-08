/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { TaxWebSites } from './TaxWebSites';

/**
 * Request builder class for operations supported on the [[TaxWebSites]] entity.
 */
export class TaxWebSitesRequestBuilder extends RequestBuilder<TaxWebSites> {
  /**
   * Returns a request builder for retrieving one `TaxWebSites` entity based on its keys.
   * @param absEntry Key property. See [[TaxWebSites.absEntry]].
   * @returns A request builder for creating requests to retrieve one `TaxWebSites` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilder<TaxWebSites> {
    return new GetByKeyRequestBuilder(TaxWebSites, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `TaxWebSites` entities.
   * @returns A request builder for creating requests to retrieve all `TaxWebSites` entities.
   */
  getAll(): GetAllRequestBuilder<TaxWebSites> {
    return new GetAllRequestBuilder(TaxWebSites);
  }

  /**
   * Returns a request builder for creating a `TaxWebSites` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxWebSites`.
   */
  create(entity: TaxWebSites): CreateRequestBuilder<TaxWebSites> {
    return new CreateRequestBuilder(TaxWebSites, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TaxWebSites`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxWebSites`.
   */
  update(entity: TaxWebSites): UpdateRequestBuilder<TaxWebSites> {
    return new UpdateRequestBuilder(TaxWebSites, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxWebSites`.
   * @param absEntry Key property. See [[TaxWebSites.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `TaxWebSites`.
   */
  delete(absEntry: number): DeleteRequestBuilder<TaxWebSites>;
  /**
   * Returns a request builder for deleting an entity of type `TaxWebSites`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxWebSites` by taking the entity as a parameter.
   */
  delete(entity: TaxWebSites): DeleteRequestBuilder<TaxWebSites>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<TaxWebSites> {
    return new DeleteRequestBuilder(TaxWebSites, absEntryOrEntity instanceof TaxWebSites ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
