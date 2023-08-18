/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProgressiveTaxLine } from './ProgressiveTaxLine';
import { WithholdingTaxCodesValueRange_Line } from './WithholdingTaxCodesValueRange_Line';
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
 * WithholdingTaxCodesLine
 */
export interface WithholdingTaxCodesLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Effectivefrom.
   * @nullable
   */
  effectivefrom?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Rate.
   * @nullable
   */
  rate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tds Rate.
   * @nullable
   */
  tdsRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Surcharge Rate.
   * @nullable
   */
  surchargeRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Cess Rate.
   * @nullable
   */
  cessRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Hsc Rate.
   * @nullable
   */
  hscRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Igst Rate.
   * @nullable
   */
  igstRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Cgst Rate.
   * @nullable
   */
  cgstRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Sgst Rate.
   * @nullable
   */
  sgstRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Utgst Rate.
   * @nullable
   */
  utgstRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Cess Gst Rate.
   * @nullable
   */
  cessGstRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Uo M Code.
   * @nullable
   */
  uoMCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fixed Amount.
   * @nullable
   */
  fixedAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Itr Non Compliant Rate.
   * @nullable
   */
  itrNonCompliantRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Pan Non Compliant Rate.
   * @nullable
   */
  panNonCompliantRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Progressive Tax Lines.
   * @nullable
   */
  progressiveTaxLines?: DeserializedType<
    DeSerializersT,
    'SAPB1.ProgressiveTax_Line'
  >;
  /**
   * Withholding Tax Codes Value Range Lines.
   * @nullable
   */
  withholdingTaxCodesValueRangeLines?: DeserializedType<
    DeSerializersT,
    'SAPB1.WithholdingTaxCodes_ValueRange_Line'
  >;
}

/**
 * WithholdingTaxCodesLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WithholdingTaxCodesLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WithholdingTaxCodesLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WithholdingTaxCodesLine.effectivefrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectivefrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'Effectivefrom',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxCodesLine.rate} property for query construction.
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
   * Representation of the {@link WithholdingTaxCodesLine.tdsRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tdsRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TDSRate', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxCodesLine.surchargeRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  surchargeRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SurchargeRate', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxCodesLine.cessRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cessRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CessRate', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxCodesLine.hscRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hscRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('HSCRate', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxCodesLine.igstRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  igstRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('IGSTRate', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxCodesLine.cgstRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cgstRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CGSTRate', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxCodesLine.sgstRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sgstRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SGSTRate', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxCodesLine.utgstRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  utgstRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UTGSTRate', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxCodesLine.cessGstRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cessGstRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CessGSTRate', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxCodesLine.lineNum} property for query construction.
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
   * Representation of the {@link WithholdingTaxCodesLine.uoMEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UoMEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link WithholdingTaxCodesLine.uoMCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UoMCode', 'Edm.String', true);
  /**
   * Representation of the {@link WithholdingTaxCodesLine.fixedAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fixedAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FixedAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxCodesLine.currency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true);
  /**
   * Representation of the {@link WithholdingTaxCodesLine.itrNonCompliantRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itrNonCompliantRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ITRNonCompliantRate',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxCodesLine.panNonCompliantRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  panNonCompliantRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PANNonCompliantRate',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxCodesLine.progressiveTaxLines} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  progressiveTaxLines: CollectionField<
    EntityT,
    DeSerializersT,
    ProgressiveTaxLine,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'ProgressiveTax_Lines',
    ProgressiveTaxLine,
    true
  );
  /**
   * Representation of the {@link WithholdingTaxCodesLine.withholdingTaxCodesValueRangeLines} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingTaxCodesValueRangeLines: CollectionField<
    EntityT,
    DeSerializersT,
    WithholdingTaxCodesValueRange_Line,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'WithholdingTaxCodes_ValueRange_Lines',
    WithholdingTaxCodesValueRange_Line,
    true
  );

  /**
   * Creates an instance of WithholdingTaxCodesLineField.
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
      WithholdingTaxCodesLine,
      fieldOptions
    );
  }
}

export namespace WithholdingTaxCodesLine {
  /**
   * Metadata information on all properties of the `WithholdingTaxCodesLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WithholdingTaxCodesLine>[] =
    [
      {
        originalName: 'Effectivefrom',
        name: 'effectivefrom',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'Rate',
        name: 'rate',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'TDSRate',
        name: 'tdsRate',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'SurchargeRate',
        name: 'surchargeRate',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'CessRate',
        name: 'cessRate',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'HSCRate',
        name: 'hscRate',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'IGSTRate',
        name: 'igstRate',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'CGSTRate',
        name: 'cgstRate',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'SGSTRate',
        name: 'sgstRate',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'UTGSTRate',
        name: 'utgstRate',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'CessGSTRate',
        name: 'cessGstRate',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'LineNum',
        name: 'lineNum',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'UoMEntry',
        name: 'uoMEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'UoMCode',
        name: 'uoMCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'FixedAmount',
        name: 'fixedAmount',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'Currency',
        name: 'currency',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ITRNonCompliantRate',
        name: 'itrNonCompliantRate',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'PANNonCompliantRate',
        name: 'panNonCompliantRate',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'ProgressiveTax_Lines',
        name: 'progressiveTaxLines',
        type: ProgressiveTaxLine,
        isCollection: true
      },
      {
        originalName: 'WithholdingTaxCodes_ValueRange_Lines',
        name: 'withholdingTaxCodesValueRangeLines',
        type: WithholdingTaxCodesValueRange_Line,
        isCollection: true
      }
    ];
}
