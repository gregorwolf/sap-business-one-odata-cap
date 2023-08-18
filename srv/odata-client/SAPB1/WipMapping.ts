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
 * WipMapping
 */
export interface WipMapping<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Account From.
   * @nullable
   */
  accountFrom?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Account To.
   * @nullable
   */
  accountTo?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * WipMappingField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WipMappingField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WipMapping,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WipMapping.absoluteEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsoluteEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link WipMapping.lineNumber} property for query construction.
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
   * Representation of the {@link WipMapping.accountFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccountFrom', 'Edm.String', true);
  /**
   * Representation of the {@link WipMapping.accountTo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountTo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccountTo', 'Edm.String', true);

  /**
   * Creates an instance of WipMappingField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, WipMapping, fieldOptions);
  }
}

export namespace WipMapping {
  /**
   * Metadata information on all properties of the `WipMapping` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WipMapping>[] = [
    {
      originalName: 'AbsoluteEntry',
      name: 'absoluteEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineNumber',
      name: 'lineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AccountFrom',
      name: 'accountFrom',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AccountTo',
      name: 'accountTo',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
