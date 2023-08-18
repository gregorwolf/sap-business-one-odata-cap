/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WtdValueRange } from './WtdValueRange';
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
 * WtdEffectiveDate
 */
export interface WtdEffectiveDate<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Effective From.
   * @nullable
   */
  effectiveFrom?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Rate.
   * @nullable
   */
  rate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Wtd Value Range Collection.
   * @nullable
   */
  wtdValueRangeCollection?: DeserializedType<
    DeSerializersT,
    'SAPB1.WTDValueRange'
  >;
}

/**
 * WtdEffectiveDateField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WtdEffectiveDateField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WtdEffectiveDate,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WtdEffectiveDate.lineNumber} property for query construction.
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
   * Representation of the {@link WtdEffectiveDate.effectiveFrom} property for query construction.
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
   * Representation of the {@link WtdEffectiveDate.rate} property for query construction.
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
   * Representation of the {@link WtdEffectiveDate.wtdValueRangeCollection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtdValueRangeCollection: CollectionField<
    EntityT,
    DeSerializersT,
    WtdValueRange,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'WTDValueRangeCollection',
    WtdValueRange,
    true
  );

  /**
   * Creates an instance of WtdEffectiveDateField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, WtdEffectiveDate, fieldOptions);
  }
}

export namespace WtdEffectiveDate {
  /**
   * Metadata information on all properties of the `WtdEffectiveDate` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WtdEffectiveDate>[] = [
    {
      originalName: 'LineNumber',
      name: 'lineNumber',
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
      originalName: 'Rate',
      name: 'rate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WTDValueRangeCollection',
      name: 'wtdValueRangeCollection',
      type: WtdValueRange,
      isCollection: true
    }
  ];
}
