/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { AssetManualDepreciation } from './AssetManualDepreciation';

/**
 * Request builder class for operations supported on the [[AssetManualDepreciation]] entity.
 */
export class AssetManualDepreciationRequestBuilder extends RequestBuilder<AssetManualDepreciation> {
  /**
   * Returns a request builder for retrieving one `AssetManualDepreciation` entity based on its keys.
   * @param docEntry Key property. See [[AssetManualDepreciation.docEntry]].
   * @returns A request builder for creating requests to retrieve one `AssetManualDepreciation` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilder<AssetManualDepreciation> {
    return new GetByKeyRequestBuilder(AssetManualDepreciation, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `AssetManualDepreciation` entities.
   * @returns A request builder for creating requests to retrieve all `AssetManualDepreciation` entities.
   */
  getAll(): GetAllRequestBuilder<AssetManualDepreciation> {
    return new GetAllRequestBuilder(AssetManualDepreciation);
  }

  /**
   * Returns a request builder for creating a `AssetManualDepreciation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetManualDepreciation`.
   */
  create(entity: AssetManualDepreciation): CreateRequestBuilder<AssetManualDepreciation> {
    return new CreateRequestBuilder(AssetManualDepreciation, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AssetManualDepreciation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetManualDepreciation`.
   */
  update(entity: AssetManualDepreciation): UpdateRequestBuilder<AssetManualDepreciation> {
    return new UpdateRequestBuilder(AssetManualDepreciation, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetManualDepreciation`.
   * @param docEntry Key property. See [[AssetManualDepreciation.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `AssetManualDepreciation`.
   */
  delete(docEntry: number): DeleteRequestBuilder<AssetManualDepreciation>;
  /**
   * Returns a request builder for deleting an entity of type `AssetManualDepreciation`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetManualDepreciation` by taking the entity as a parameter.
   */
  delete(entity: AssetManualDepreciation): DeleteRequestBuilder<AssetManualDepreciation>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<AssetManualDepreciation> {
    return new DeleteRequestBuilder(AssetManualDepreciation, docEntryOrEntity instanceof AssetManualDepreciation ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
