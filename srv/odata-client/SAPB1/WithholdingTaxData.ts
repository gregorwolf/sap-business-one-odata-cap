/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoStatus } from './BoStatus';
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
 * WithholdingTaxData
 */
export interface WithholdingTaxData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Wt Code.
   * @nullable
   */
  wtCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
   * Rounding Type.
   * @nullable
   */
  roundingType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Rate.
   * @nullable
   */
  rate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Criteria.
   * @nullable
   */
  criteria?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
  baseDocType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Document Reference.
   * @nullable
   */
  baseDocumentReference?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Target Abs Entry.
   * @nullable
   */
  targetAbsEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Target Document Type.
   * @nullable
   */
  targetDocumentType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * WithholdingTaxDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WithholdingTaxDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WithholdingTaxData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WithholdingTaxData.wtCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WTCode', 'Edm.String', true);
  /**
   * Representation of the {@link WithholdingTaxData.wtAmountSys} property for query construction.
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
   * Representation of the {@link WithholdingTaxData.wtAmountFc} property for query construction.
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
   * Representation of the {@link WithholdingTaxData.wtAmount} property for query construction.
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
   * Representation of the {@link WithholdingTaxData.withholdingType} property for query construction.
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
   * Representation of the {@link WithholdingTaxData.taxableAmountinSys} property for query construction.
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
   * Representation of the {@link WithholdingTaxData.taxableAmountFc} property for query construction.
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
   * Representation of the {@link WithholdingTaxData.taxableAmount} property for query construction.
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
   * Representation of the {@link WithholdingTaxData.roundingType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  roundingType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RoundingType', 'Edm.String', true);
  /**
   * Representation of the {@link WithholdingTaxData.rate} property for query construction.
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
   * Representation of the {@link WithholdingTaxData.criteria} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  criteria: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Criteria', 'Edm.String', true);
  /**
   * Representation of the {@link WithholdingTaxData.category} property for query construction.
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
   * Representation of the {@link WithholdingTaxData.baseType} property for query construction.
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
   * Representation of the {@link WithholdingTaxData.appliedWtAmountSys} property for query construction.
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
   * Representation of the {@link WithholdingTaxData.appliedWtAmountFc} property for query construction.
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
   * Representation of the {@link WithholdingTaxData.appliedWtAmount} property for query construction.
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
   * Representation of the {@link WithholdingTaxData.glAccount} property for query construction.
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
   * Representation of the {@link WithholdingTaxData.lineNum} property for query construction.
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
   * Representation of the {@link WithholdingTaxData.baseDocEntry} property for query construction.
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
   * Representation of the {@link WithholdingTaxData.baseDocLine} property for query construction.
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
   * Representation of the {@link WithholdingTaxData.baseDocType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseDocType', 'Edm.Int32', true);
  /**
   * Representation of the {@link WithholdingTaxData.baseDocumentReference} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocumentReference: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BaseDocumentReference',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxData.status} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: EnumField<EntityT, DeSerializersT, BoStatus, true, false> =
    this._fieldBuilder.buildEnumField('Status', BoStatus, true);
  /**
   * Representation of the {@link WithholdingTaxData.targetAbsEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetAbsEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TargetAbsEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link WithholdingTaxData.targetDocumentType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetDocumentType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TargetDocumentType',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of WithholdingTaxDataField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, WithholdingTaxData, fieldOptions);
  }
}

export namespace WithholdingTaxData {
  /**
   * Metadata information on all properties of the `WithholdingTaxData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WithholdingTaxData>[] = [
    {
      originalName: 'WTCode',
      name: 'wtCode',
      type: 'Edm.String',
      isCollection: false
    },
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
      originalName: 'RoundingType',
      name: 'roundingType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Rate',
      name: 'rate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Criteria',
      name: 'criteria',
      type: 'Edm.String',
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
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BaseDocumentReference',
      name: 'baseDocumentReference',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Status',
      name: 'status',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'TargetAbsEntry',
      name: 'targetAbsEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TargetDocumentType',
      name: 'targetDocumentType',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
