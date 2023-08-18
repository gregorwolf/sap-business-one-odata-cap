/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { LineTypeEnum } from './LineTypeEnum';
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
 * DownPaymentToDrawDetails
 */
export interface DownPaymentToDrawDetails<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Internal Id.
   * @nullable
   */
  docInternalId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Row Num.
   * @nullable
   */
  rowNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Seq Num.
   * @nullable
   */
  seqNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Vat Group Code.
   * @nullable
   */
  vatGroupCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Vat Percent.
   * @nullable
   */
  vatPercent?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Amount To Draw.
   * @nullable
   */
  amountToDraw?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Amount To Draw Fc.
   * @nullable
   */
  amountToDrawFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Amount To Draw Sc.
   * @nullable
   */
  amountToDrawSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax.
   * @nullable
   */
  tax?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Fc.
   * @nullable
   */
  taxFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Sc.
   * @nullable
   */
  taxSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Is Gross Line.
   * @nullable
   */
  isGrossLine?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Gross Amount To Draw.
   * @nullable
   */
  grossAmountToDraw?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gross Amount To Draw Fc.
   * @nullable
   */
  grossAmountToDrawFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gross Amount To Draw Sc.
   * @nullable
   */
  grossAmountToDrawSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Line Type.
   * @nullable
   */
  lineType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Tax Adjust.
   * @nullable
   */
  taxAdjust?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * DownPaymentToDrawDetailsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DownPaymentToDrawDetailsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DownPaymentToDrawDetails,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DownPaymentToDrawDetails.docInternalId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docInternalId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocInternalID', 'Edm.Int32', true);
  /**
   * Representation of the {@link DownPaymentToDrawDetails.rowNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RowNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link DownPaymentToDrawDetails.seqNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  seqNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SeqNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link DownPaymentToDrawDetails.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link DownPaymentToDrawDetails.vatGroupCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatGroupCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VatGroupCode', 'Edm.String', true);
  /**
   * Representation of the {@link DownPaymentToDrawDetails.vatPercent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatPercent: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VatPercent', 'Edm.Double', true);
  /**
   * Representation of the {@link DownPaymentToDrawDetails.amountToDraw} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDraw: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AmountToDraw', 'Edm.Double', true);
  /**
   * Representation of the {@link DownPaymentToDrawDetails.amountToDrawFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDrawFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AmountToDrawFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DownPaymentToDrawDetails.amountToDrawSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDrawSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AmountToDrawSC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DownPaymentToDrawDetails.tax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Tax', 'Edm.Double', true);
  /**
   * Representation of the {@link DownPaymentToDrawDetails.taxFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxFC', 'Edm.Double', true);
  /**
   * Representation of the {@link DownPaymentToDrawDetails.taxSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxSC', 'Edm.Double', true);
  /**
   * Representation of the {@link DownPaymentToDrawDetails.isGrossLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isGrossLine: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsGrossLine', BoYesNoEnum, true);
  /**
   * Representation of the {@link DownPaymentToDrawDetails.grossAmountToDraw} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDraw: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GrossAmountToDraw',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DownPaymentToDrawDetails.grossAmountToDrawFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDrawFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GrossAmountToDrawFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DownPaymentToDrawDetails.grossAmountToDrawSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDrawSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GrossAmountToDrawSC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DownPaymentToDrawDetails.lineType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineType: EnumField<EntityT, DeSerializersT, LineTypeEnum, true, false> =
    this._fieldBuilder.buildEnumField('LineType', LineTypeEnum, true);
  /**
   * Representation of the {@link DownPaymentToDrawDetails.taxAdjust} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAdjust: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('TaxAdjust', BoYesNoEnum, true);

  /**
   * Creates an instance of DownPaymentToDrawDetailsField.
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
      DownPaymentToDrawDetails,
      fieldOptions
    );
  }
}

export namespace DownPaymentToDrawDetails {
  /**
   * Metadata information on all properties of the `DownPaymentToDrawDetails` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DownPaymentToDrawDetails>[] =
    [
      {
        originalName: 'DocInternalID',
        name: 'docInternalId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'RowNum',
        name: 'rowNum',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'SeqNum',
        name: 'seqNum',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'DocEntry',
        name: 'docEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'VatGroupCode',
        name: 'vatGroupCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'VatPercent',
        name: 'vatPercent',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'AmountToDraw',
        name: 'amountToDraw',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'AmountToDrawFC',
        name: 'amountToDrawFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'AmountToDrawSC',
        name: 'amountToDrawSc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'Tax',
        name: 'tax',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'TaxFC',
        name: 'taxFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'TaxSC',
        name: 'taxSc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'IsGrossLine',
        name: 'isGrossLine',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'GrossAmountToDraw',
        name: 'grossAmountToDraw',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'GrossAmountToDrawFC',
        name: 'grossAmountToDrawFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'GrossAmountToDrawSC',
        name: 'grossAmountToDrawSc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'LineType',
        name: 'lineType',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'TaxAdjust',
        name: 'taxAdjust',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}
