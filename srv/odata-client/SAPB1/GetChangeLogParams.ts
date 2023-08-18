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
 * GetChangeLogParams
 */
export interface GetChangeLogParams<
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
}

/**
 * GetChangeLogParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class GetChangeLogParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  GetChangeLogParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link GetChangeLogParams.primaryKey} property for query construction.
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
   * Representation of the {@link GetChangeLogParams.udoObjectCode} property for query construction.
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
   * Representation of the {@link GetChangeLogParams.object} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  object: EnumField<EntityT, DeSerializersT, BoChangeLogEnum, true, false> =
    this._fieldBuilder.buildEnumField('Object', BoChangeLogEnum, true);

  /**
   * Creates an instance of GetChangeLogParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, GetChangeLogParams, fieldOptions);
  }
}

export namespace GetChangeLogParams {
  /**
   * Metadata information on all properties of the `GetChangeLogParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<GetChangeLogParams>[] = [
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
    }
  ];
}
