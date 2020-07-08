/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ServiceAppReportContent
 */
export interface ServiceAppReportContent {
  /**
   * Report Content.
   * @nullable
   */
  reportContent?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceAppReportContent.build]] instead.
 */
export function createServiceAppReportContent(json: any): ServiceAppReportContent {
  return ServiceAppReportContent.build(json);
}

/**
 * ServiceAppReportContentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceAppReportContentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ServiceAppReportContent.reportContent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportContent: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ReportContent', this, 'Edm.String');
}

export namespace ServiceAppReportContent {
  export function build(json: { [keys: string]: FieldType }): ServiceAppReportContent {
    return createComplexType(json, {
      ReportContent: (reportContent: string) => ({ reportContent: edmToTs(reportContent, 'Edm.String') })
    });
  }
}
