/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * WithholdingTaxDataWtx
 */
export interface WithholdingTaxDataWtx<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Wt Amount Sys.
   * @nullable
   */
  wtAmountSys?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Wt Amount Fc.
   * @nullable
   */
  wtAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Wt Amount.
   * @nullable
   */
  wtAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Withholding Type.
   * @nullable
   */
  withholdingType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Taxable Amountin Sys.
   * @nullable
   */
  taxableAmountinSys?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Taxable Amount Fc.
   * @nullable
   */
  taxableAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Taxable Amount.
   * @nullable
   */
  taxableAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Rate.
   * @nullable
   */
  rate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Category.
   * @nullable
   */
  category?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Base Type.
   * @nullable
   */
  baseType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Applied Wt Amount Sys.
   * @nullable
   */
  appliedWtAmountSys?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Applied Wt Amount Fc.
   * @nullable
   */
  appliedWtAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Applied Wt Amount.
   * @nullable
   */
  appliedWtAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gl Account.
   * @nullable
   */
  glAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Doc Entry.
   * @nullable
   */
  baseDocEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Doc Line.
   * @nullable
   */
  baseDocLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Doc Type.
   * @nullable
   */
  baseDocType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Wt Abs Id.
   * @nullable
   */
  wtAbsId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Exempt Rate.
   * @nullable
   */
  exemptRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Base Net Amount Sys.
   * @nullable
   */
  baseNetAmountSys?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Base Net Amount Fc.
   * @nullable
   */
  baseNetAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Base Net Amount.
   * @nullable
   */
  baseNetAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Base Vatmount Sys.
   * @nullable
   */
  baseVatmountSys?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Base Vatmount Fc.
   * @nullable
   */
  baseVatmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Base Vatmount.
   * @nullable
   */
  baseVatmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accum Base Amount Sys.
   * @nullable
   */
  accumBaseAmountSys?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accum Base Amount Fc.
   * @nullable
   */
  accumBaseAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accum Base Amount.
   * @nullable
   */
  accumBaseAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accum W Tax Amount Sys.
   * @nullable
   */
  accumWTaxAmountSys?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accum W Tax Amount Fc.
   * @nullable
   */
  accumWTaxAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accum W Tax Amount.
   * @nullable
   */
  accumWTaxAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * WithholdingTaxDataWtxField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WithholdingTaxDataWtxField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WithholdingTaxDataWtx,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WithholdingTaxDataWtx.wtAmountSys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAmountSys: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WTAmountSys', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxDataWtx.wtAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WTAmountFC', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxDataWtx.wtAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WTAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxDataWtx.withholdingType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WithholdingType',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxDataWtx.taxableAmountinSys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxableAmountinSys: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TaxableAmountinSys',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxDataWtx.taxableAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxableAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TaxableAmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxDataWtx.taxableAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxableAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxableAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxDataWtx.rate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Rate', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxDataWtx.category} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  category: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Category', 'Edm.String', true);
  /**
   * Representation of the {@link WithholdingTaxDataWtx.baseType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseType', 'Edm.String', true);
  /**
   * Representation of the {@link WithholdingTaxDataWtx.appliedWtAmountSys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedWtAmountSys: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AppliedWTAmountSys',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxDataWtx.appliedWtAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedWtAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AppliedWTAmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxDataWtx.appliedWtAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedWtAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AppliedWTAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxDataWtx.glAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GLAccount', 'Edm.String', true);
  /**
   * Representation of the {@link WithholdingTaxDataWtx.lineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link WithholdingTaxDataWtx.baseDocEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseDocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link WithholdingTaxDataWtx.baseDocLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseDocLine', 'Edm.Int32', true);
  /**
   * Representation of the {@link WithholdingTaxDataWtx.baseDocType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseDocType', 'Edm.String', true);
  /**
   * Representation of the {@link WithholdingTaxDataWtx.wtAbsId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAbsId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WTAbsId', 'Edm.String', true);
  /**
   * Representation of the {@link WithholdingTaxDataWtx.exemptRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exemptRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ExemptRate', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxDataWtx.baseNetAmountSys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseNetAmountSys: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BaseNetAmountSys',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxDataWtx.baseNetAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseNetAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BaseNetAmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxDataWtx.baseNetAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseNetAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseNetAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxDataWtx.baseVatmountSys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseVatmountSys: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BaseVatmountSys',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxDataWtx.baseVatmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseVatmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BaseVatmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxDataWtx.baseVatmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseVatmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseVatmount', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxDataWtx.accumBaseAmountSys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumBaseAmountSys: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumBaseAmountSys',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxDataWtx.accumBaseAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumBaseAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumBaseAmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxDataWtx.accumBaseAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumBaseAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumBaseAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxDataWtx.accumWTaxAmountSys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumWTaxAmountSys: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumWTaxAmountSys',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxDataWtx.accumWTaxAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumWTaxAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumWTaxAmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxDataWtx.accumWTaxAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumWTaxAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumWTaxAmount',
    'Edm.Double',
    true
  );

  /**
   * Creates an instance of WithholdingTaxDataWtxField.
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
      WithholdingTaxDataWtx,
      fieldOptions
    );
  }
}

export namespace WithholdingTaxDataWtx {
  /**
   * Metadata information on all properties of the `WithholdingTaxDataWtx` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WithholdingTaxDataWtx>[] = [
    {
      originalName: 'WTAmountSys',
      name: 'wtAmountSys',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WTAmountFC',
      name: 'wtAmountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WTAmount',
      name: 'wtAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WithholdingType',
      name: 'withholdingType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxableAmountinSys',
      name: 'taxableAmountinSys',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TaxableAmountFC',
      name: 'taxableAmountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TaxableAmount',
      name: 'taxableAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Rate',
      name: 'rate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Category',
      name: 'category',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BaseType',
      name: 'baseType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AppliedWTAmountSys',
      name: 'appliedWtAmountSys',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AppliedWTAmountFC',
      name: 'appliedWtAmountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AppliedWTAmount',
      name: 'appliedWtAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'GLAccount',
      name: 'glAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LineNum',
      name: 'lineNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BaseDocEntry',
      name: 'baseDocEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BaseDocLine',
      name: 'baseDocLine',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BaseDocType',
      name: 'baseDocType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WTAbsId',
      name: 'wtAbsId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExemptRate',
      name: 'exemptRate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BaseNetAmountSys',
      name: 'baseNetAmountSys',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BaseNetAmountFC',
      name: 'baseNetAmountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BaseNetAmount',
      name: 'baseNetAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BaseVatmountSys',
      name: 'baseVatmountSys',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BaseVatmountFC',
      name: 'baseVatmountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BaseVatmount',
      name: 'baseVatmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumBaseAmountSys',
      name: 'accumBaseAmountSys',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumBaseAmountFC',
      name: 'accumBaseAmountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumBaseAmount',
      name: 'accumBaseAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumWTaxAmountSys',
      name: 'accumWTaxAmountSys',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumWTaxAmountFC',
      name: 'accumWTaxAmountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumWTaxAmount',
      name: 'accumWTaxAmount',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
