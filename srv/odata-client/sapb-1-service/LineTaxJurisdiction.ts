/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * LineTaxJurisdiction
 */
export interface LineTaxJurisdiction {
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
 * @deprecated Since v1.6.0. Use [[LineTaxJurisdiction.build]] instead.
 */
export function createLineTaxJurisdiction(json: any): LineTaxJurisdiction {
  return LineTaxJurisdiction.build(json);
}

/**
 * LineTaxJurisdictionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class LineTaxJurisdictionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[LineTaxJurisdiction.jurisdictionCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  jurisdictionCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('JurisdictionCode', this, 'Edm.String');
  /**
   * Representation of the [[LineTaxJurisdiction.jurisdictionType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  jurisdictionType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('JurisdictionType', this, 'Edm.Int32');
  /**
   * Representation of the [[LineTaxJurisdiction.taxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxAmount', this, 'Edm.Double');
  /**
   * Representation of the [[LineTaxJurisdiction.taxAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmountSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxAmountSC', this, 'Edm.Double');
  /**
   * Representation of the [[LineTaxJurisdiction.taxAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[LineTaxJurisdiction.taxRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxRate', this, 'Edm.Double');
  /**
   * Representation of the [[LineTaxJurisdiction.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[LineTaxJurisdiction.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[LineTaxJurisdiction.rowSequence]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowSequence: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowSequence', this, 'Edm.Int32');
}

export namespace LineTaxJurisdiction {
  export function build(json: { [keys: string]: FieldType }): LineTaxJurisdiction {
    return createComplexType(json, {
      JurisdictionCode: (jurisdictionCode: string) => ({ jurisdictionCode: edmToTs(jurisdictionCode, 'Edm.String') }),
      JurisdictionType: (jurisdictionType: number) => ({ jurisdictionType: edmToTs(jurisdictionType, 'Edm.Int32') }),
      TaxAmount: (taxAmount: number) => ({ taxAmount: edmToTs(taxAmount, 'Edm.Double') }),
      TaxAmountSC: (taxAmountSc: number) => ({ taxAmountSc: edmToTs(taxAmountSc, 'Edm.Double') }),
      TaxAmountFC: (taxAmountFc: number) => ({ taxAmountFc: edmToTs(taxAmountFc, 'Edm.Double') }),
      TaxRate: (taxRate: number) => ({ taxRate: edmToTs(taxRate, 'Edm.Double') }),
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      RowSequence: (rowSequence: number) => ({ rowSequence: edmToTs(rowSequence, 'Edm.Int32') })
    });
  }
}
