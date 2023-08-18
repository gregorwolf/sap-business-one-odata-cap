/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxCodeDeterminationTcdKeyFieldValue } from './TaxCodeDeterminationTcdKeyFieldValue';
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
 * TaxCodeDeterminationTcdKeyField
 */
export interface TaxCodeDeterminationTcdKeyField<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Descr.
   * @nullable
   */
  descr?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Priority.
   * @nullable
   */
  priority?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Key Fld 1.
   * @nullable
   */
  keyFld1?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Udf Table 1.
   * @nullable
   */
  udfTable1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Udf Alias 1.
   * @nullable
   */
  udfAlias1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Key Fld 2.
   * @nullable
   */
  keyFld2?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Udf Table 2.
   * @nullable
   */
  udfTable2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Udf Alias 2.
   * @nullable
   */
  udfAlias2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Key Fld 3.
   * @nullable
   */
  keyFld3?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Udf Table 3.
   * @nullable
   */
  udfTable3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Udf Alias 3.
   * @nullable
   */
  udfAlias3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Key Fld 4.
   * @nullable
   */
  keyFld4?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Udf Table 4.
   * @nullable
   */
  udfTable4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Udf Alias 4.
   * @nullable
   */
  udfAlias4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Legal Text.
   * @nullable
   */
  legalText?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Key Fld 5.
   * @nullable
   */
  keyFld5?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Udf Table 5.
   * @nullable
   */
  udfTable5?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Udf Alias 5.
   * @nullable
   */
  udfAlias5?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Code Determination Tcd Key Field Values.
   * @nullable
   */
  taxCodeDeterminationTcdKeyFieldValues?: DeserializedType<
    DeSerializersT,
    'SAPB1.TaxCodeDeterminationTCDKeyFieldValue'
  >;
}

/**
 * TaxCodeDeterminationTcdKeyFieldField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxCodeDeterminationTcdKeyFieldField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TaxCodeDeterminationTcdKeyField,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.absId} property for query construction.
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
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.descr} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  descr: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Descr', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.priority} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priority: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Priority', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.keyFld1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KeyFld_1', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.udfTable1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfTable1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UDFTable_1', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.udfAlias1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfAlias1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UDFAlias_1', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.keyFld2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KeyFld_2', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.udfTable2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfTable2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UDFTable_2', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.udfAlias2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfAlias2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UDFAlias_2', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.keyFld3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KeyFld_3', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.udfTable3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfTable3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UDFTable_3', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.udfAlias3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfAlias3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UDFAlias_3', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.keyFld4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KeyFld_4', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.udfTable4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfTable4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UDFTable_4', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.udfAlias4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfAlias4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UDFAlias_4', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.legalText} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  legalText: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LegalText', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.keyFld5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KeyFld_5', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.udfTable5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfTable5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UDFTable_5', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.udfAlias5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfAlias5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UDFAlias_5', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyField.taxCodeDeterminationTcdKeyFieldValues} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCodeDeterminationTcdKeyFieldValues: CollectionField<
    EntityT,
    DeSerializersT,
    TaxCodeDeterminationTcdKeyFieldValue,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'TaxCodeDeterminationTCDKeyFieldValues',
    TaxCodeDeterminationTcdKeyFieldValue,
    true
  );

  /**
   * Creates an instance of TaxCodeDeterminationTcdKeyFieldField.
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
      TaxCodeDeterminationTcdKeyField,
      fieldOptions
    );
  }
}

export namespace TaxCodeDeterminationTcdKeyField {
  /**
   * Metadata information on all properties of the `TaxCodeDeterminationTcdKeyField` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationTcdKeyField>[] =
    [
      {
        originalName: 'AbsId',
        name: 'absId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Descr',
        name: 'descr',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Priority',
        name: 'priority',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'KeyFld_1',
        name: 'keyFld1',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'UDFTable_1',
        name: 'udfTable1',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'UDFAlias_1',
        name: 'udfAlias1',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'KeyFld_2',
        name: 'keyFld2',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'UDFTable_2',
        name: 'udfTable2',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'UDFAlias_2',
        name: 'udfAlias2',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'KeyFld_3',
        name: 'keyFld3',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'UDFTable_3',
        name: 'udfTable3',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'UDFAlias_3',
        name: 'udfAlias3',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'KeyFld_4',
        name: 'keyFld4',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'UDFTable_4',
        name: 'udfTable4',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'UDFAlias_4',
        name: 'udfAlias4',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'LegalText',
        name: 'legalText',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'KeyFld_5',
        name: 'keyFld5',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'UDFTable_5',
        name: 'udfTable5',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'UDFAlias_5',
        name: 'udfAlias5',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'TaxCodeDeterminationTCDKeyFieldValues',
        name: 'taxCodeDeterminationTcdKeyFieldValues',
        type: TaxCodeDeterminationTcdKeyFieldValue,
        isCollection: true
      }
    ];
}
