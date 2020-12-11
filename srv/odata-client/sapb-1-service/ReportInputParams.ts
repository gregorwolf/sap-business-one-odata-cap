/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ReportInputParams
 */
export interface ReportInputParams {
  /**
   * Report Layout Menu Id.
   * @nullable
   */
  reportLayoutMenuId?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ReportInputParams.build]] instead.
 */
export function createReportInputParams(json: any): ReportInputParams {
  return ReportInputParams.build(json);
}

/**
 * ReportInputParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReportInputParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ReportInputParams> {
  /**
   * Representation of the [[ReportInputParams.reportLayoutMenuId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportLayoutMenuId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ReportLayoutMenuID', this, 'Edm.String');

  /**
   * Creates an instance of ReportInputParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ReportInputParams);
  }
}

export namespace ReportInputParams {
  /**
   * Metadata information on all properties of the `ReportInputParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReportInputParams>[] = [{
    originalName: 'ReportLayoutMenuID',
    name: 'reportLayoutMenuId',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ReportInputParams {
    return deserializeComplexTypeV4(json, ReportInputParams);
  }
}
