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
 * ChangeLogDifferenceParams
 */
export interface ChangeLogDifferenceParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Date.
   * @nullable
   */
  date?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Changed Field.
   * @nullable
   */
  changedField?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Old Value.
   * @nullable
   */
  oldValue?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * New Value.
   * @nullable
   */
  newValue?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * User Name.
   * @nullable
   */
  userName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Array Offset.
   * @nullable
   */
  arrayOffset?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ChangeLogDifferenceParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ChangeLogDifferenceParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ChangeLogDifferenceParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ChangeLogDifferenceParams.date} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Date', 'Edm.DateTimeOffset', true);
  /**
   * Representation of the {@link ChangeLogDifferenceParams.changedField} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changedField: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ChangedField', 'Edm.String', true);
  /**
   * Representation of the {@link ChangeLogDifferenceParams.oldValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  oldValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OldValue', 'Edm.String', true);
  /**
   * Representation of the {@link ChangeLogDifferenceParams.newValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  newValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NewValue', 'Edm.String', true);
  /**
   * Representation of the {@link ChangeLogDifferenceParams.userName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UserName', 'Edm.String', true);
  /**
   * Representation of the {@link ChangeLogDifferenceParams.arrayOffset} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  arrayOffset: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ArrayOffset', 'Edm.Int32', true);
  /**
   * Representation of the {@link ChangeLogDifferenceParams.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.String', true);

  /**
   * Creates an instance of ChangeLogDifferenceParamsField.
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
      ChangeLogDifferenceParams,
      fieldOptions
    );
  }
}

export namespace ChangeLogDifferenceParams {
  /**
   * Metadata information on all properties of the `ChangeLogDifferenceParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ChangeLogDifferenceParams>[] =
    [
      {
        originalName: 'Date',
        name: 'date',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'ChangedField',
        name: 'changedField',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'OldValue',
        name: 'oldValue',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'NewValue',
        name: 'newValue',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'UserName',
        name: 'userName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ArrayOffset',
        name: 'arrayOffset',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'LineNumber',
        name: 'lineNumber',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
