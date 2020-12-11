/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ChecksforPaymentLine
 */
export interface ChecksforPaymentLine {
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: number;
  /**
   * Row Details.
   * @nullable
   */
  rowDetails?: string;
  /**
   * Row Total.
   * @nullable
   */
  rowTotal?: number;
  /**
   * Row Currency.
   * @nullable
   */
  rowCurrency?: string;
  /**
   * Tax Definition.
   * @nullable
   */
  taxDefinition?: string;
  /**
   * Tax Percent.
   * @nullable
   */
  taxPercent?: number;
  /**
   * Credited Account.
   * @nullable
   */
  creditedAccount?: string;
  /**
   * Line Total.
   * @nullable
   */
  lineTotal?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ChecksforPaymentLine.build]] instead.
 */
export function createChecksforPaymentLine(json: any): ChecksforPaymentLine {
  return ChecksforPaymentLine.build(json);
}

/**
 * ChecksforPaymentLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ChecksforPaymentLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ChecksforPaymentLine> {
  /**
   * Representation of the [[ChecksforPaymentLine.rowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ChecksforPaymentLine.rowDetails]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowDetails: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('RowDetails', this, 'Edm.String');
  /**
   * Representation of the [[ChecksforPaymentLine.rowTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowTotal', this, 'Edm.Double');
  /**
   * Representation of the [[ChecksforPaymentLine.rowCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('RowCurrency', this, 'Edm.String');
  /**
   * Representation of the [[ChecksforPaymentLine.taxDefinition]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxDefinition: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxDefinition', this, 'Edm.String');
  /**
   * Representation of the [[ChecksforPaymentLine.taxPercent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPercent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxPercent', this, 'Edm.Double');
  /**
   * Representation of the [[ChecksforPaymentLine.creditedAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditedAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CreditedAccount', this, 'Edm.String');
  /**
   * Representation of the [[ChecksforPaymentLine.lineTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineTotal', this, 'Edm.Double');

  /**
   * Creates an instance of ChecksforPaymentLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ChecksforPaymentLine);
  }
}

export namespace ChecksforPaymentLine {
  /**
   * Metadata information on all properties of the `ChecksforPaymentLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ChecksforPaymentLine>[] = [{
    originalName: 'RowNumber',
    name: 'rowNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'RowDetails',
    name: 'rowDetails',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'RowTotal',
    name: 'rowTotal',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'RowCurrency',
    name: 'rowCurrency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxDefinition',
    name: 'taxDefinition',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxPercent',
    name: 'taxPercent',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CreditedAccount',
    name: 'creditedAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LineTotal',
    name: 'lineTotal',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ChecksforPaymentLine {
    return deserializeComplexTypeV4(json, ChecksforPaymentLine);
  }
}
