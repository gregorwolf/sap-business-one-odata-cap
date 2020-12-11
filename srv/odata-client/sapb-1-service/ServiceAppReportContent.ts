/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ServiceAppReportContentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceAppReportContent> {
  /**
   * Representation of the [[ServiceAppReportContent.reportContent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportContent: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ReportContent', this, 'Edm.String');

  /**
   * Creates an instance of ServiceAppReportContentField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ServiceAppReportContent);
  }
}

export namespace ServiceAppReportContent {
  /**
   * Metadata information on all properties of the `ServiceAppReportContent` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceAppReportContent>[] = [{
    originalName: 'ReportContent',
    name: 'reportContent',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ServiceAppReportContent {
    return deserializeComplexTypeV4(json, ServiceAppReportContent);
  }
}
