/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ProgressiveTaxLine
 */
export interface ProgressiveTaxLine {
  /**
   * Tax Rate.
   * @nullable
   */
  taxRate?: number;
  /**
   * Min Amount.
   * @nullable
   */
  minAmount?: number;
  /**
   * Max Amount.
   * @nullable
   */
  maxAmount?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ProgressiveTaxLine.build]] instead.
 */
export function createProgressiveTaxLine(json: any): ProgressiveTaxLine {
  return ProgressiveTaxLine.build(json);
}

/**
 * ProgressiveTaxLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProgressiveTaxLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ProgressiveTaxLine> {
  /**
   * Representation of the [[ProgressiveTaxLine.taxRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxRate', this, 'Edm.Double');
  /**
   * Representation of the [[ProgressiveTaxLine.minAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  minAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MinAmount', this, 'Edm.Double');
  /**
   * Representation of the [[ProgressiveTaxLine.maxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MaxAmount', this, 'Edm.Double');

  /**
   * Creates an instance of ProgressiveTaxLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ProgressiveTaxLine);
  }
}

export namespace ProgressiveTaxLine {
  /**
   * Metadata information on all properties of the `ProgressiveTaxLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ProgressiveTaxLine>[] = [{
    originalName: 'TaxRate',
    name: 'taxRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'MinAmount',
    name: 'minAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'MaxAmount',
    name: 'maxAmount',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ProgressiveTaxLine {
    return deserializeComplexTypeV4(json, ProgressiveTaxLine);
  }
}
