/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DocumentSpecialLine
 */
export interface DocumentSpecialLine {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * After Line Number.
   * @nullable
   */
  afterLineNumber?: number;
  /**
   * Order Number.
   * @nullable
   */
  orderNumber?: number;
  /**
   * Subtotal.
   * @nullable
   */
  subtotal?: number;
  /**
   * Line Text.
   * @nullable
   */
  lineText?: string;
  /**
   * Subtotal Fc.
   * @nullable
   */
  subtotalFc?: number;
  /**
   * Subtotal Sc.
   * @nullable
   */
  subtotalSc?: number;
  /**
   * Tax Amount.
   * @nullable
   */
  taxAmount?: number;
  /**
   * Tax Amount Fc.
   * @nullable
   */
  taxAmountFc?: number;
  /**
   * Tax Amount Sc.
   * @nullable
   */
  taxAmountSc?: number;
  /**
   * Freight 1.
   * @nullable
   */
  freight1?: number;
  /**
   * Freight 1 Fc.
   * @nullable
   */
  freight1Fc?: number;
  /**
   * Freight 1 Sc.
   * @nullable
   */
  freight1Sc?: number;
  /**
   * Freight 2.
   * @nullable
   */
  freight2?: number;
  /**
   * Freight 2 Fc.
   * @nullable
   */
  freight2Fc?: number;
  /**
   * Freight 2 Sc.
   * @nullable
   */
  freight2Sc?: number;
  /**
   * Freight 3.
   * @nullable
   */
  freight3?: number;
  /**
   * Freight 3 Fc.
   * @nullable
   */
  freight3Fc?: number;
  /**
   * Freight 3 Sc.
   * @nullable
   */
  freight3Sc?: number;
  /**
   * Gross Total.
   * @nullable
   */
  grossTotal?: number;
  /**
   * Gross Total Fc.
   * @nullable
   */
  grossTotalFc?: number;
  /**
   * Gross Total Sc.
   * @nullable
   */
  grossTotalSc?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DocumentSpecialLine.build]] instead.
 */
export function createDocumentSpecialLine(json: any): DocumentSpecialLine {
  return DocumentSpecialLine.build(json);
}

/**
 * DocumentSpecialLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentSpecialLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DocumentSpecialLine.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentSpecialLine.afterLineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  afterLineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AfterLineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentSpecialLine.orderNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  orderNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OrderNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentSpecialLine.subtotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subtotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Subtotal', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.lineText]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineText: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LineText', this, 'Edm.String');
  /**
   * Representation of the [[DocumentSpecialLine.subtotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subtotalFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SubtotalFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.subtotalSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subtotalSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SubtotalSC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.taxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxAmount', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.taxAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.taxAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmountSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxAmountSC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.freight1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Freight1', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.freight1Fc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight1Fc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Freight1FC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.freight1Sc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight1Sc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Freight1SC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.freight2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Freight2', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.freight2Fc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight2Fc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Freight2FC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.freight2Sc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight2Sc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Freight2SC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.freight3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight3: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Freight3', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.freight3Fc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight3Fc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Freight3FC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.freight3Sc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freight3Sc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Freight3SC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.grossTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossTotal', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.grossTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossTotalFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossTotalFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentSpecialLine.grossTotalSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossTotalSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossTotalSC', this, 'Edm.Double');
}

export namespace DocumentSpecialLine {
  export function build(json: { [keys: string]: FieldType }): DocumentSpecialLine {
    return createComplexType(json, {
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      AfterLineNumber: (afterLineNumber: number) => ({ afterLineNumber: edmToTs(afterLineNumber, 'Edm.Int32') }),
      OrderNumber: (orderNumber: number) => ({ orderNumber: edmToTs(orderNumber, 'Edm.Int32') }),
      Subtotal: (subtotal: number) => ({ subtotal: edmToTs(subtotal, 'Edm.Double') }),
      LineText: (lineText: string) => ({ lineText: edmToTs(lineText, 'Edm.String') }),
      SubtotalFC: (subtotalFc: number) => ({ subtotalFc: edmToTs(subtotalFc, 'Edm.Double') }),
      SubtotalSC: (subtotalSc: number) => ({ subtotalSc: edmToTs(subtotalSc, 'Edm.Double') }),
      TaxAmount: (taxAmount: number) => ({ taxAmount: edmToTs(taxAmount, 'Edm.Double') }),
      TaxAmountFC: (taxAmountFc: number) => ({ taxAmountFc: edmToTs(taxAmountFc, 'Edm.Double') }),
      TaxAmountSC: (taxAmountSc: number) => ({ taxAmountSc: edmToTs(taxAmountSc, 'Edm.Double') }),
      Freight1: (freight1: number) => ({ freight1: edmToTs(freight1, 'Edm.Double') }),
      Freight1FC: (freight1Fc: number) => ({ freight1Fc: edmToTs(freight1Fc, 'Edm.Double') }),
      Freight1SC: (freight1Sc: number) => ({ freight1Sc: edmToTs(freight1Sc, 'Edm.Double') }),
      Freight2: (freight2: number) => ({ freight2: edmToTs(freight2, 'Edm.Double') }),
      Freight2FC: (freight2Fc: number) => ({ freight2Fc: edmToTs(freight2Fc, 'Edm.Double') }),
      Freight2SC: (freight2Sc: number) => ({ freight2Sc: edmToTs(freight2Sc, 'Edm.Double') }),
      Freight3: (freight3: number) => ({ freight3: edmToTs(freight3, 'Edm.Double') }),
      Freight3FC: (freight3Fc: number) => ({ freight3Fc: edmToTs(freight3Fc, 'Edm.Double') }),
      Freight3SC: (freight3Sc: number) => ({ freight3Sc: edmToTs(freight3Sc, 'Edm.Double') }),
      GrossTotal: (grossTotal: number) => ({ grossTotal: edmToTs(grossTotal, 'Edm.Double') }),
      GrossTotalFC: (grossTotalFc: number) => ({ grossTotalFc: edmToTs(grossTotalFc, 'Edm.Double') }),
      GrossTotalSC: (grossTotalSc: number) => ({ grossTotalSc: edmToTs(grossTotalSc, 'Edm.Double') })
    });
  }
}
