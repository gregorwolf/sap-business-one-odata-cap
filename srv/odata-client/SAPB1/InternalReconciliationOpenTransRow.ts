/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { CreditOrDebitEnum } from './CreditOrDebitEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * InternalReconciliationOpenTransRow
 */
export interface InternalReconciliationOpenTransRow<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Selected.
   * @nullable
   */
  selected?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Short Name.
   * @nullable
   */
  shortName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Trans Id.
   * @nullable
   */
  transId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Trans Row Id.
   * @nullable
   */
  transRowId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Src Obj Typ.
   * @nullable
   */
  srcObjTyp?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Src Obj Abs.
   * @nullable
   */
  srcObjAbs?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Credit Or Debit.
   * @nullable
   */
  creditOrDebit?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Reconcile Amount.
   * @nullable
   */
  reconcileAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Cash Discount.
   * @nullable
   */
  cashDiscount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * InternalReconciliationOpenTransRowField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class InternalReconciliationOpenTransRowField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  InternalReconciliationOpenTransRow,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link InternalReconciliationOpenTransRow.selected} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  selected: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Selected', BoYesNoEnum, true);
  /**
   * Representation of the {@link InternalReconciliationOpenTransRow.shortName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shortName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShortName', 'Edm.String', true);
  /**
   * Representation of the {@link InternalReconciliationOpenTransRow.transId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TransId', 'Edm.Int32', true);
  /**
   * Representation of the {@link InternalReconciliationOpenTransRow.transRowId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transRowId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TransRowId', 'Edm.Int32', true);
  /**
   * Representation of the {@link InternalReconciliationOpenTransRow.srcObjTyp} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  srcObjTyp: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SrcObjTyp', 'Edm.String', true);
  /**
   * Representation of the {@link InternalReconciliationOpenTransRow.srcObjAbs} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  srcObjAbs: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SrcObjAbs', 'Edm.Int32', true);
  /**
   * Representation of the {@link InternalReconciliationOpenTransRow.creditOrDebit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditOrDebit: EnumField<
    EntityT,
    DeSerializersT,
    CreditOrDebitEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CreditOrDebit',
    CreditOrDebitEnum,
    true
  );
  /**
   * Representation of the {@link InternalReconciliationOpenTransRow.reconcileAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconcileAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReconcileAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link InternalReconciliationOpenTransRow.cashDiscount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashDiscount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CashDiscount', 'Edm.Double', true);

  /**
   * Creates an instance of InternalReconciliationOpenTransRowField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      InternalReconciliationOpenTransRow,
      fieldOptions
    );
  }
}

export namespace InternalReconciliationOpenTransRow {
  /**
   * Metadata information on all properties of the `InternalReconciliationOpenTransRow` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InternalReconciliationOpenTransRow>[] =
    [
      {
        originalName: 'Selected',
        name: 'selected',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'ShortName',
        name: 'shortName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'TransId',
        name: 'transId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'TransRowId',
        name: 'transRowId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'SrcObjTyp',
        name: 'srcObjTyp',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'SrcObjAbs',
        name: 'srcObjAbs',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'CreditOrDebit',
        name: 'creditOrDebit',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'ReconcileAmount',
        name: 'reconcileAmount',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'CashDiscount',
        name: 'cashDiscount',
        type: 'Edm.Double',
        isCollection: false
      }
    ];
}
