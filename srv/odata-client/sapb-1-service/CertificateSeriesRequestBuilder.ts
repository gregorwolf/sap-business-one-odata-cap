/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { CertificateSeries } from './CertificateSeries';

/**
 * Request builder class for operations supported on the [[CertificateSeries]] entity.
 */
export class CertificateSeriesRequestBuilder extends RequestBuilder<CertificateSeries> {
  /**
   * Returns a request builder for retrieving one `CertificateSeries` entity based on its keys.
   * @param absEntry Key property. See [[CertificateSeries.absEntry]].
   * @returns A request builder for creating requests to retrieve one `CertificateSeries` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilder<CertificateSeries> {
    return new GetByKeyRequestBuilder(CertificateSeries, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `CertificateSeries` entities.
   * @returns A request builder for creating requests to retrieve all `CertificateSeries` entities.
   */
  getAll(): GetAllRequestBuilder<CertificateSeries> {
    return new GetAllRequestBuilder(CertificateSeries);
  }

  /**
   * Returns a request builder for creating a `CertificateSeries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CertificateSeries`.
   */
  create(entity: CertificateSeries): CreateRequestBuilder<CertificateSeries> {
    return new CreateRequestBuilder(CertificateSeries, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CertificateSeries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CertificateSeries`.
   */
  update(entity: CertificateSeries): UpdateRequestBuilder<CertificateSeries> {
    return new UpdateRequestBuilder(CertificateSeries, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CertificateSeries`.
   * @param absEntry Key property. See [[CertificateSeries.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `CertificateSeries`.
   */
  delete(absEntry: number): DeleteRequestBuilder<CertificateSeries>;
  /**
   * Returns a request builder for deleting an entity of type `CertificateSeries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CertificateSeries` by taking the entity as a parameter.
   */
  delete(entity: CertificateSeries): DeleteRequestBuilder<CertificateSeries>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<CertificateSeries> {
    return new DeleteRequestBuilder(CertificateSeries, absEntryOrEntity instanceof CertificateSeries ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
