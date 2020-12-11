/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DeductionTaxHierarchiesLine
 */
export interface DeductionTaxHierarchiesLine {
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: number;
  /**
   * Deduction Percent.
   * @nullable
   */
  deductionPercent?: number;
  /**
   * Maximum Total.
   * @nullable
   */
  maximumTotal?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DeductionTaxHierarchiesLine.build]] instead.
 */
export function createDeductionTaxHierarchiesLine(json: any): DeductionTaxHierarchiesLine {
  return DeductionTaxHierarchiesLine.build(json);
}

/**
 * DeductionTaxHierarchiesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DeductionTaxHierarchiesLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DeductionTaxHierarchiesLine> {
  /**
   * Representation of the [[DeductionTaxHierarchiesLine.rowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[DeductionTaxHierarchiesLine.deductionPercent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deductionPercent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DeductionPercent', this, 'Edm.Double');
  /**
   * Representation of the [[DeductionTaxHierarchiesLine.maximumTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maximumTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MaximumTotal', this, 'Edm.Double');

  /**
   * Creates an instance of DeductionTaxHierarchiesLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DeductionTaxHierarchiesLine);
  }
}

export namespace DeductionTaxHierarchiesLine {
  /**
   * Metadata information on all properties of the `DeductionTaxHierarchiesLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DeductionTaxHierarchiesLine>[] = [{
    originalName: 'RowNumber',
    name: 'rowNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DeductionPercent',
    name: 'deductionPercent',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'MaximumTotal',
    name: 'maximumTotal',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DeductionTaxHierarchiesLine {
    return deserializeComplexTypeV4(json, DeductionTaxHierarchiesLine);
  }
}
