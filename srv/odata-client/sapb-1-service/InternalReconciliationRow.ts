/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * InternalReconciliationRow
 */
export interface InternalReconciliationRow {
  /**
   * Line Seq.
   * @nullable
   */
  lineSeq?: number;
  /**
   * Short Name.
   * @nullable
   */
  shortName?: string;
  /**
   * Trans Id.
   * @nullable
   */
  transId?: number;
  /**
   * Trans Row Id.
   * @nullable
   */
  transRowId?: number;
  /**
   * Src Obj Typ.
   * @nullable
   */
  srcObjTyp?: string;
  /**
   * Src Obj Abs.
   * @nullable
   */
  srcObjAbs?: number;
  /**
   * Reconcile Amount.
   * @nullable
   */
  reconcileAmount?: number;
  /**
   * Cash Discount.
   * @nullable
   */
  cashDiscount?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationRow.build]] instead.
 */
export function createInternalReconciliationRow(json: any): InternalReconciliationRow {
  return InternalReconciliationRow.build(json);
}

/**
 * InternalReconciliationRowField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InternalReconciliationRowField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[InternalReconciliationRow.lineSeq]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineSeq: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineSeq', this, 'Edm.Int32');
  /**
   * Representation of the [[InternalReconciliationRow.shortName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shortName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShortName', this, 'Edm.String');
  /**
   * Representation of the [[InternalReconciliationRow.transId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TransId', this, 'Edm.Int32');
  /**
   * Representation of the [[InternalReconciliationRow.transRowId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transRowId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TransRowId', this, 'Edm.Int32');
  /**
   * Representation of the [[InternalReconciliationRow.srcObjTyp]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  srcObjTyp: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SrcObjTyp', this, 'Edm.String');
  /**
   * Representation of the [[InternalReconciliationRow.srcObjAbs]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  srcObjAbs: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SrcObjAbs', this, 'Edm.Int32');
  /**
   * Representation of the [[InternalReconciliationRow.reconcileAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconcileAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReconcileAmount', this, 'Edm.Double');
  /**
   * Representation of the [[InternalReconciliationRow.cashDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashDiscount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CashDiscount', this, 'Edm.Double');
}

export namespace InternalReconciliationRow {
  export function build(json: { [keys: string]: FieldType }): InternalReconciliationRow {
    return createComplexType(json, {
      LineSeq: (lineSeq: number) => ({ lineSeq: edmToTs(lineSeq, 'Edm.Int32') }),
      ShortName: (shortName: string) => ({ shortName: edmToTs(shortName, 'Edm.String') }),
      TransId: (transId: number) => ({ transId: edmToTs(transId, 'Edm.Int32') }),
      TransRowId: (transRowId: number) => ({ transRowId: edmToTs(transRowId, 'Edm.Int32') }),
      SrcObjTyp: (srcObjTyp: string) => ({ srcObjTyp: edmToTs(srcObjTyp, 'Edm.String') }),
      SrcObjAbs: (srcObjAbs: number) => ({ srcObjAbs: edmToTs(srcObjAbs, 'Edm.Int32') }),
      ReconcileAmount: (reconcileAmount: number) => ({ reconcileAmount: edmToTs(reconcileAmount, 'Edm.Double') }),
      CashDiscount: (cashDiscount: number) => ({ cashDiscount: edmToTs(cashDiscount, 'Edm.Double') })
    });
  }
}
