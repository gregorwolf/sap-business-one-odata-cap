/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxCodeDeterminationTcdKeyFieldValuePeriod } from './TaxCodeDeterminationTcdKeyFieldValuePeriod';
import { TaxCodeDeterminationTcdKeyFieldValueDefaultWt } from './TaxCodeDeterminationTcdKeyFieldValueDefaultWt';
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
 * TaxCodeDeterminationTcdKeyFieldValue
 */
export interface TaxCodeDeterminationTcdKeyFieldValue<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Disp Order.
   * @nullable
   */
  dispOrder?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Key Fld 1 V.
   * @nullable
   */
  keyFld1V?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Key Fld 2 V.
   * @nullable
   */
  keyFld2V?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Key Fld 3 V.
   * @nullable
   */
  keyFld3V?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Key Fld 4 V.
   * @nullable
   */
  keyFld4V?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Key Fld 5 V.
   * @nullable
   */
  keyFld5V?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Code Determination Tcd Key Field Value Periods.
   * @nullable
   */
  taxCodeDeterminationTcdKeyFieldValuePeriods?: DeserializedType<
    DeSerializersT,
    'SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod'
  >;
  /**
   * Tax Code Determination Tcd Key Field Value Default W Ts.
   * @nullable
   */
  taxCodeDeterminationTcdKeyFieldValueDefaultWTs?: DeserializedType<
    DeSerializersT,
    'SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWT'
  >;
}

/**
 * TaxCodeDeterminationTcdKeyFieldValueField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxCodeDeterminationTcdKeyFieldValueField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TaxCodeDeterminationTcdKeyFieldValue,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyFieldValue.absId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsId', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyFieldValue.dispOrder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dispOrder: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DispOrder', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyFieldValue.keyFld1V} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld1V: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KeyFld_1_V', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyFieldValue.keyFld2V} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld2V: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KeyFld_2_V', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyFieldValue.keyFld3V} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld3V: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KeyFld_3_V', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyFieldValue.keyFld4V} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld4V: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KeyFld_4_V', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyFieldValue.keyFld5V} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld5V: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KeyFld_5_V', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyFieldValue.taxCodeDeterminationTcdKeyFieldValuePeriods} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCodeDeterminationTcdKeyFieldValuePeriods: CollectionField<
    EntityT,
    DeSerializersT,
    TaxCodeDeterminationTcdKeyFieldValuePeriod,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'TaxCodeDeterminationTCDKeyFieldValuePeriods',
    TaxCodeDeterminationTcdKeyFieldValuePeriod,
    true
  );
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyFieldValue.taxCodeDeterminationTcdKeyFieldValueDefaultWTs} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCodeDeterminationTcdKeyFieldValueDefaultWTs: CollectionField<
    EntityT,
    DeSerializersT,
    TaxCodeDeterminationTcdKeyFieldValueDefaultWt,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'TaxCodeDeterminationTCDKeyFieldValueDefaultWTs',
    TaxCodeDeterminationTcdKeyFieldValueDefaultWt,
    true
  );

  /**
   * Creates an instance of TaxCodeDeterminationTcdKeyFieldValueField.
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
      TaxCodeDeterminationTcdKeyFieldValue,
      fieldOptions
    );
  }
}

export namespace TaxCodeDeterminationTcdKeyFieldValue {
  /**
   * Metadata information on all properties of the `TaxCodeDeterminationTcdKeyFieldValue` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationTcdKeyFieldValue>[] =
    [
      {
        originalName: 'AbsId',
        name: 'absId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'DispOrder',
        name: 'dispOrder',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'KeyFld_1_V',
        name: 'keyFld1V',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'KeyFld_2_V',
        name: 'keyFld2V',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'KeyFld_3_V',
        name: 'keyFld3V',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'KeyFld_4_V',
        name: 'keyFld4V',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'KeyFld_5_V',
        name: 'keyFld5V',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'TaxCodeDeterminationTCDKeyFieldValuePeriods',
        name: 'taxCodeDeterminationTcdKeyFieldValuePeriods',
        type: TaxCodeDeterminationTcdKeyFieldValuePeriod,
        isCollection: true
      },
      {
        originalName: 'TaxCodeDeterminationTCDKeyFieldValueDefaultWTs',
        name: 'taxCodeDeterminationTcdKeyFieldValueDefaultWTs',
        type: TaxCodeDeterminationTcdKeyFieldValueDefaultWt,
        isCollection: true
      }
    ];
}
