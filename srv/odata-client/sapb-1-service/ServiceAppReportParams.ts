/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MobileAppReportChoiceEnum } from './MobileAppReportChoiceEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ServiceAppReportParams
 */
export interface ServiceAppReportParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Report Choice.
   * @nullable
   */
  reportChoice?: MobileAppReportChoiceEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceAppReportParams.build]] instead.
 */
export function createServiceAppReportParams(json: any): ServiceAppReportParams {
  return ServiceAppReportParams.build(json);
}

/**
 * ServiceAppReportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceAppReportParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceAppReportParams> {
  /**
   * Representation of the [[ServiceAppReportParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceAppReportParams.reportChoice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportChoice: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ReportChoice', this);

  /**
   * Creates an instance of ServiceAppReportParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ServiceAppReportParams);
  }
}

export namespace ServiceAppReportParams {
  /**
   * Metadata information on all properties of the `ServiceAppReportParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceAppReportParams>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.Int32',
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
  export function build(json: { [keys: string]: FieldType }): ServiceAppReportParams {
    return deserializeComplexTypeV4(json, ServiceAppReportParams);
  }
}
