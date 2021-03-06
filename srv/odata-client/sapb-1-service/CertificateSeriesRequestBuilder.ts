/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(absEntry: number): GetByKeyRequestBuilderV4<CertificateSeries> {
    return new GetByKeyRequestBuilderV4(CertificateSeries, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `CertificateSeries` entities.
   * @returns A request builder for creating requests to retrieve all `CertificateSeries` entities.
   */
  getAll(): GetAllRequestBuilderV4<CertificateSeries> {
    return new GetAllRequestBuilderV4(CertificateSeries);
  }

  /**
   * Returns a request builder for creating a `CertificateSeries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CertificateSeries`.
   */
  create(entity: CertificateSeries): CreateRequestBuilderV4<CertificateSeries> {
    return new CreateRequestBuilderV4(CertificateSeries, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CertificateSeries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CertificateSeries`.
   */
  update(entity: CertificateSeries): UpdateRequestBuilderV4<CertificateSeries> {
    return new UpdateRequestBuilderV4(CertificateSeries, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CertificateSeries`.
   * @param absEntry Key property. See [[CertificateSeries.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `CertificateSeries`.
   */
  delete(absEntry: number): DeleteRequestBuilderV4<CertificateSeries>;
  /**
   * Returns a request builder for deleting an entity of type `CertificateSeries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CertificateSeries` by taking the entity as a parameter.
   */
  delete(entity: CertificateSeries): DeleteRequestBuilderV4<CertificateSeries>;
  delete(absEntryOrEntity: any): DeleteRequestBuilderV4<CertificateSeries> {
    return new DeleteRequestBuilderV4(CertificateSeries, absEntryOrEntity instanceof CertificateSeries ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
