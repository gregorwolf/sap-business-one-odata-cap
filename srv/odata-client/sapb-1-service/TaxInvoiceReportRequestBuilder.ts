/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(taxInvoiceReportNumber: string): GetByKeyRequestBuilderV4<TaxInvoiceReport> {
    return new GetByKeyRequestBuilderV4(TaxInvoiceReport, { TaxInvoiceReportNumber: taxInvoiceReportNumber });
  }

  /**
   * Returns a request builder for querying all `TaxInvoiceReport` entities.
   * @returns A request builder for creating requests to retrieve all `TaxInvoiceReport` entities.
   */
  getAll(): GetAllRequestBuilderV4<TaxInvoiceReport> {
    return new GetAllRequestBuilderV4(TaxInvoiceReport);
  }

  /**
   * Returns a request builder for creating a `TaxInvoiceReport` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxInvoiceReport`.
   */
  create(entity: TaxInvoiceReport): CreateRequestBuilderV4<TaxInvoiceReport> {
    return new CreateRequestBuilderV4(TaxInvoiceReport, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TaxInvoiceReport`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxInvoiceReport`.
   */
  update(entity: TaxInvoiceReport): UpdateRequestBuilderV4<TaxInvoiceReport> {
    return new UpdateRequestBuilderV4(TaxInvoiceReport, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxInvoiceReport`.
   * @param taxInvoiceReportNumber Key property. See [[TaxInvoiceReport.taxInvoiceReportNumber]].
   * @returns A request builder for creating requests that delete an entity of type `TaxInvoiceReport`.
   */
  delete(taxInvoiceReportNumber: string): DeleteRequestBuilderV4<TaxInvoiceReport>;
  /**
   * Returns a request builder for deleting an entity of type `TaxInvoiceReport`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxInvoiceReport` by taking the entity as a parameter.
   */
  delete(entity: TaxInvoiceReport): DeleteRequestBuilderV4<TaxInvoiceReport>;
  delete(taxInvoiceReportNumberOrEntity: any): DeleteRequestBuilderV4<TaxInvoiceReport> {
    return new DeleteRequestBuilderV4(TaxInvoiceReport, taxInvoiceReportNumberOrEntity instanceof TaxInvoiceReport ? taxInvoiceReportNumberOrEntity : { TaxInvoiceReportNumber: taxInvoiceReportNumberOrEntity! });
  }
}
