/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoChangeLogEnum } from './BoChangeLogEnum';
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
 * ShowDifferenceParams
 */
export interface ShowDifferenceParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Primary Key.
   * @nullable
   */
  primaryKey?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Udo Object Code.
   * @nullable
   */
  udoObjectCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Object.
   * @nullable
   */
  object?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Log Instance 2.
   * @nullable
   */
  logInstance2?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Log Instance.
   * @nullable
   */
  logInstance?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * ShowDifferenceParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ShowDifferenceParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ShowDifferenceParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ShowDifferenceParams.primaryKey} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  primaryKey: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PrimaryKey', 'Edm.String', true);
  /**
   * Representation of the {@link ShowDifferenceParams.udoObjectCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udoObjectCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UDOObjectCode', 'Edm.String', true);
  /**
   * Representation of the {@link ShowDifferenceParams.object} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  object: EnumField<EntityT, DeSerializersT, BoChangeLogEnum, true, false> =
    this._fieldBuilder.buildEnumField('Object', BoChangeLogEnum, true);
  /**
   * Representation of the {@link ShowDifferenceParams.logInstance2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logInstance2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LogInstance2', 'Edm.Int32', true);
  /**
   * Representation of the {@link ShowDifferenceParams.logInstance} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logInstance: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LogInstance', 'Edm.Int32', true);

  /**
   * Creates an instance of ShowDifferenceParamsField.
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
      ShowDifferenceParams,
      fieldOptions
    );
  }
}

export namespace ShowDifferenceParams {
  /**
   * Metadata information on all properties of the `ShowDifferenceParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ShowDifferenceParams>[] = [
    {
      originalName: 'PrimaryKey',
      name: 'primaryKey',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UDOObjectCode',
      name: 'udoObjectCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Object',
      name: 'object',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'LogInstance2',
      name: 'logInstance2',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LogInstance',
      name: 'logInstance',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
