/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MobileAppReportChoiceEnum } from './MobileAppReportChoiceEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ServiceAppReport
 */
export interface ServiceAppReport {
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * System Report Name.
   * @nullable
   */
  systemReportName?: string;
  /**
   * Customized Report Name.
   * @nullable
   */
  customizedReportName?: string;
  /**
   * Report Choice.
   * @nullable
   */
  reportChoice?: MobileAppReportChoiceEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceAppReport.build]] instead.
 */
export function createServiceAppReport(json: any): ServiceAppReport {
  return ServiceAppReport.build(json);
}

/**
 * ServiceAppReportField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceAppReportField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceAppReport> {
  /**
   * Representation of the [[ServiceAppReport.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceAppReport.systemReportName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemReportName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SystemReportName', this, 'Edm.String');
  /**
   * Representation of the [[ServiceAppReport.customizedReportName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customizedReportName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CustomizedReportName', this, 'Edm.String');
  /**
   * Representation of the [[ServiceAppReport.reportChoice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportChoice: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ReportChoice', this);

  /**
   * Creates an instance of ServiceAppReportField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ServiceAppReport);
  }
}

export namespace ServiceAppReport {
  /**
   * Metadata information on all properties of the `ServiceAppReport` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceAppReport>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SystemReportName',
    name: 'systemReportName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CustomizedReportName',
    name: 'customizedReportName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ReportChoice',
    name: 'reportChoice',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ServiceAppReport {
    return deserializeComplexTypeV4(json, ServiceAppReport);
  }
}
