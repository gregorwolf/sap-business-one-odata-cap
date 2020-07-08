/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ChecksforPaymentLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace ChecksforPaymentLine {
  export function build(json: { [keys: string]: FieldType }): ChecksforPaymentLine {
    return createComplexType(json, {
      RowNumber: (rowNumber: number) => ({ rowNumber: edmToTs(rowNumber, 'Edm.Int32') }),
      RowDetails: (rowDetails: string) => ({ rowDetails: edmToTs(rowDetails, 'Edm.String') }),
      RowTotal: (rowTotal: number) => ({ rowTotal: edmToTs(rowTotal, 'Edm.Double') }),
      RowCurrency: (rowCurrency: string) => ({ rowCurrency: edmToTs(rowCurrency, 'Edm.String') }),
      TaxDefinition: (taxDefinition: string) => ({ taxDefinition: edmToTs(taxDefinition, 'Edm.String') }),
      TaxPercent: (taxPercent: number) => ({ taxPercent: edmToTs(taxPercent, 'Edm.Double') }),
      CreditedAccount: (creditedAccount: string) => ({ creditedAccount: edmToTs(creditedAccount, 'Edm.String') }),
      LineTotal: (lineTotal: number) => ({ lineTotal: edmToTs(lineTotal, 'Edm.Double') })
    });
  }
}
