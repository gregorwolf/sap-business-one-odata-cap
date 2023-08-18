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
 * WtdValueRange
 */
export interface WtdValueRange<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Seq Num.
   * @nullable
   */
  seqNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Effective From.
   * @nullable
   */
  effectiveFrom?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Value From.
   * @nullable
   */
  valueFrom?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Rate.
   * @nullable
   */
  rate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * WtdValueRangeField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WtdValueRangeField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WtdValueRange,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WtdValueRange.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link WtdValueRange.seqNum} property for query construction.
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
   * Representation of the {@link WtdValueRange.effectiveFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EffectiveFrom',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link WtdValueRange.valueFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  valueFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ValueFrom', 'Edm.Double', true);
  /**
   * Representation of the {@link WtdValueRange.rate} property for query construction.
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
   * Creates an instance of WtdValueRangeField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, WtdValueRange, fieldOptions);
  }
}

export namespace WtdValueRange {
  /**
   * Metadata information on all properties of the `WtdValueRange` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WtdValueRange>[] = [
    {
      originalName: 'LineNumber',
      name: 'lineNumber',
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
      originalName: 'EffectiveFrom',
      name: 'effectiveFrom',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ValueFrom',
      name: 'valueFrom',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Rate',
      name: 'rate',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
