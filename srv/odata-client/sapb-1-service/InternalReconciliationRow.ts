/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreditOrDebitEnum } from './CreditOrDebitEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Credit Or Debit.
   * @nullable
   */
  creditOrDebit?: CreditOrDebitEnum;
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
export class InternalReconciliationRowField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InternalReconciliationRow> {
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
   * Representation of the [[InternalReconciliationRow.creditOrDebit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditOrDebit: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CreditOrDebit', this);
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

  /**
   * Creates an instance of InternalReconciliationRowField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, InternalReconciliationRow);
  }
}

export namespace InternalReconciliationRow {
  /**
   * Metadata information on all properties of the `InternalReconciliationRow` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InternalReconciliationRow>[] = [{
    originalName: 'LineSeq',
    name: 'lineSeq',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ShortName',
    name: 'shortName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TransId',
    name: 'transId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TransRowId',
    name: 'transRowId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SrcObjTyp',
    name: 'srcObjTyp',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SrcObjAbs',
    name: 'srcObjAbs',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CreditOrDebit',
    name: 'creditOrDebit',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ReconcileAmount',
    name: 'reconcileAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CashDiscount',
    name: 'cashDiscount',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): InternalReconciliationRow {
    return deserializeComplexTypeV4(json, InternalReconciliationRow);
  }
}
