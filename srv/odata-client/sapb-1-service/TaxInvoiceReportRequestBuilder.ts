/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { TaxInvoiceReport } from './TaxInvoiceReport';

/**
 * Request builder class for operations supported on the [[TaxInvoiceReport]] entity.
 */
export class TaxInvoiceReportRequestBuilder extends RequestBuilder<TaxInvoiceReport> {
  /**
   * Returns a request builder for retrieving one `TaxInvoiceReport` entity based on its keys.
   * @param taxInvoiceReportNumber Key property. See [[TaxInvoiceReport.taxInvoiceReportNumber]].
   * @returns A request builder for creating requests to retrieve one `TaxInvoiceReport` entity based on its keys.
   */
  getByKey(taxInvoiceReportNumber: string): GetByKeyRequestBuilder<TaxInvoiceReport> {
    return new GetByKeyRequestBuilder(TaxInvoiceReport, { TaxInvoiceReportNumber: taxInvoiceReportNumber });
  }

  /**
   * Returns a request builder for querying all `TaxInvoiceReport` entities.
   * @returns A request builder for creating requests to retrieve all `TaxInvoiceReport` entities.
   */
  getAll(): GetAllRequestBuilder<TaxInvoiceReport> {
    return new GetAllRequestBuilder(TaxInvoiceReport);
  }

  /**
   * Returns a request builder for creating a `TaxInvoiceReport` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxInvoiceReport`.
   */
  create(entity: TaxInvoiceReport): CreateRequestBuilder<TaxInvoiceReport> {
    return new CreateRequestBuilder(TaxInvoiceReport, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TaxInvoiceReport`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxInvoiceReport`.
   */
  update(entity: TaxInvoiceReport): UpdateRequestBuilder<TaxInvoiceReport> {
    return new UpdateRequestBuilder(TaxInvoiceReport, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxInvoiceReport`.
   * @param taxInvoiceReportNumber Key property. See [[TaxInvoiceReport.taxInvoiceReportNumber]].
   * @returns A request builder for creating requests that delete an entity of type `TaxInvoiceReport`.
   */
  delete(taxInvoiceReportNumber: string): DeleteRequestBuilder<TaxInvoiceReport>;
  /**
   * Returns a request builder for deleting an entity of type `TaxInvoiceReport`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxInvoiceReport` by taking the entity as a parameter.
   */
  delete(entity: TaxInvoiceReport): DeleteRequestBuilder<TaxInvoiceReport>;
  delete(taxInvoiceReportNumberOrEntity: any): DeleteRequestBuilder<TaxInvoiceReport> {
    return new DeleteRequestBuilder(TaxInvoiceReport, taxInvoiceReportNumberOrEntity instanceof TaxInvoiceReport ? taxInvoiceReportNumberOrEntity : { TaxInvoiceReportNumber: taxInvoiceReportNumberOrEntity! });
  }
}
