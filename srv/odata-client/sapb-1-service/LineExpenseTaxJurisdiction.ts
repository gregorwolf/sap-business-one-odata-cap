/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * LineExpenseTaxJurisdiction
 */
export interface LineExpenseTaxJurisdiction {
  /**
   * Jurisdiction Code.
   * @nullable
   */
  jurisdictionCode?: string;
  /**
   * Jurisdiction Type.
   * @nullable
   */
  jurisdictionType?: number;
  /**
   * Tax Amount.
   * @nullable
   */
  taxAmount?: number;
  /**
   * Tax Amount Sc.
   * @nullable
   */
  taxAmountSc?: number;
  /**
   * Tax Amount Fc.
   * @nullable
   */
  taxAmountFc?: number;
  /**
   * Tax Rate.
   * @nullable
   */
  taxRate?: number;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Row Sequence.
   * @nullable
   */
  rowSequence?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[LineExpenseTaxJurisdiction.build]] instead.
 */
export function createLineExpenseTaxJurisdiction(json: any): LineExpenseTaxJurisdiction {
  return LineExpenseTaxJurisdiction.build(json);
}

/**
 * LineExpenseTaxJurisdictionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class LineExpenseTaxJurisdictionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, LineExpenseTaxJurisdiction> {
  /**
   * Representation of the [[LineExpenseTaxJurisdiction.jurisdictionCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  jurisdictionCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('JurisdictionCode', this, 'Edm.String');
  /**
   * Representation of the [[LineExpenseTaxJurisdiction.jurisdictionType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  jurisdictionType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('JurisdictionType', this, 'Edm.Int32');
  /**
   * Representation of the [[LineExpenseTaxJurisdiction.taxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxAmount', this, 'Edm.Double');
  /**
   * Representation of the [[LineExpenseTaxJurisdiction.taxAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmountSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxAmountSC', this, 'Edm.Double');
  /**
   * Representation of the [[LineExpenseTaxJurisdiction.taxAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[LineExpenseTaxJurisdiction.taxRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxRate', this, 'Edm.Double');
  /**
   * Representation of the [[LineExpenseTaxJurisdiction.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[LineExpenseTaxJurisdiction.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[LineExpenseTaxJurisdiction.rowSequence]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowSequence: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowSequence', this, 'Edm.Int32');

  /**
   * Creates an instance of LineExpenseTaxJurisdictionField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, LineExpenseTaxJurisdiction);
  }
}

export namespace LineExpenseTaxJurisdiction {
  /**
   * Metadata information on all properties of the `LineExpenseTaxJurisdiction` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<LineExpenseTaxJurisdiction>[] = [{
    originalName: 'JurisdictionCode',
    name: 'jurisdictionCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'JurisdictionType',
    name: 'jurisdictionType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TaxAmount',
    name: 'taxAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxAmountSC',
    name: 'taxAmountSc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxAmountFC',
    name: 'taxAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxRate',
    name: 'taxRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'RowSequence',
    name: 'rowSequence',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): LineExpenseTaxJurisdiction {
    return deserializeComplexTypeV4(json, LineExpenseTaxJurisdiction);
  }
}
