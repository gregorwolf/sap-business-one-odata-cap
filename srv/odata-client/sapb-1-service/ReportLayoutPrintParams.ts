/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ReportLayoutPrintParams
 */
export interface ReportLayoutPrintParams {
  /**
   * Layout Code.
   * @nullable
   */
  layoutCode?: string;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ReportLayoutPrintParams.build]] instead.
 */
export function createReportLayoutPrintParams(json: any): ReportLayoutPrintParams {
  return ReportLayoutPrintParams.build(json);
}

/**
 * ReportLayoutPrintParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReportLayoutPrintParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ReportLayoutPrintParams> {
  /**
   * Representation of the [[ReportLayoutPrintParams.layoutCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layoutCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LayoutCode', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayoutPrintParams.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');

  /**
   * Creates an instance of ReportLayoutPrintParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ReportLayoutPrintParams);
  }
}

export namespace ReportLayoutPrintParams {
  /**
   * Metadata information on all properties of the `ReportLayoutPrintParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReportLayoutPrintParams>[] = [{
    originalName: 'LayoutCode',
    name: 'layoutCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ReportLayoutPrintParams {
    return deserializeComplexTypeV4(json, ReportLayoutPrintParams);
  }
}
