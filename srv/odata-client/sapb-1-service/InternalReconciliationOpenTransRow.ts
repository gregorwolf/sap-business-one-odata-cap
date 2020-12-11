/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { CreditOrDebitEnum } from './CreditOrDebitEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * InternalReconciliationOpenTransRow
 */
export interface InternalReconciliationOpenTransRow {
  /**
   * Selected.
   * @nullable
   */
  selected?: BoYesNoEnum;
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
 * @deprecated Since v1.6.0. Use [[InternalReconciliationOpenTransRow.build]] instead.
 */
export function createInternalReconciliationOpenTransRow(json: any): InternalReconciliationOpenTransRow {
  return InternalReconciliationOpenTransRow.build(json);
}

/**
 * InternalReconciliationOpenTransRowField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InternalReconciliationOpenTransRowField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InternalReconciliationOpenTransRow> {
  /**
   * Representation of the [[InternalReconciliationOpenTransRow.selected]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  selected: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Selected', this);
  /**
   * Representation of the [[InternalReconciliationOpenTransRow.shortName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shortName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShortName', this, 'Edm.String');
  /**
   * Representation of the [[InternalReconciliationOpenTransRow.transId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TransId', this, 'Edm.Int32');
  /**
   * Representation of the [[InternalReconciliationOpenTransRow.transRowId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transRowId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TransRowId', this, 'Edm.Int32');
  /**
   * Representation of the [[InternalReconciliationOpenTransRow.srcObjTyp]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  srcObjTyp: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SrcObjTyp', this, 'Edm.String');
  /**
   * Representation of the [[InternalReconciliationOpenTransRow.srcObjAbs]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  srcObjAbs: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SrcObjAbs', this, 'Edm.Int32');
  /**
   * Representation of the [[InternalReconciliationOpenTransRow.creditOrDebit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditOrDebit: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CreditOrDebit', this);
  /**
   * Representation of the [[InternalReconciliationOpenTransRow.reconcileAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconcileAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReconcileAmount', this, 'Edm.Double');
  /**
   * Representation of the [[InternalReconciliationOpenTransRow.cashDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashDiscount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CashDiscount', this, 'Edm.Double');

  /**
   * Creates an instance of InternalReconciliationOpenTransRowField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, InternalReconciliationOpenTransRow);
  }
}

export namespace InternalReconciliationOpenTransRow {
  /**
   * Metadata information on all properties of the `InternalReconciliationOpenTransRow` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InternalReconciliationOpenTransRow>[] = [{
    originalName: 'Selected',
    name: 'selected',
    type: 'Edm.Enum',
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
  export function build(json: { [keys: string]: FieldType }): InternalReconciliationOpenTransRow {
    return deserializeComplexTypeV4(json, InternalReconciliationOpenTransRow);
  }
}
