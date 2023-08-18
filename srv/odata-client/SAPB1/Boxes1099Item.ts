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
 * Boxes1099Item
 */
export interface Boxes1099Item<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Form Code.
   * @nullable
   */
  formCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Box 1099.
   * @nullable
   */
  box1099?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Box Description.
   * @nullable
   */
  boxDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Minimum 1099 Amount.
   * @nullable
   */
  minimum1099Amount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * Boxes1099ItemField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class Boxes1099ItemField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  Boxes1099Item,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link Boxes1099Item.formCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FormCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link Boxes1099Item.box1099} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  box1099: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Box1099', 'Edm.String', true);
  /**
   * Representation of the {@link Boxes1099Item.boxDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boxDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BoxDescription',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link Boxes1099Item.minimum1099Amount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  minimum1099Amount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'Minimum1099Amount',
    'Edm.Double',
    true
  );

  /**
   * Creates an instance of Boxes1099ItemField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, Boxes1099Item, fieldOptions);
  }
}

export namespace Boxes1099Item {
  /**
   * Metadata information on all properties of the `Boxes1099Item` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Boxes1099Item>[] = [
    {
      originalName: 'FormCode',
      name: 'formCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Box1099',
      name: 'box1099',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BoxDescription',
      name: 'boxDescription',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Minimum1099Amount',
      name: 'minimum1099Amount',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
