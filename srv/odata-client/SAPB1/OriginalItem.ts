/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AlternativeItem } from './AlternativeItem';
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
 * OriginalItem
 */
export interface OriginalItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Name.
   * @nullable
   */
  itemName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Alternative Items.
   * @nullable
   */
  alternativeItems?: DeserializedType<DeSerializersT, 'SAPB1.AlternativeItem'>;
}

/**
 * OriginalItemField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class OriginalItemField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  OriginalItem,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link OriginalItem.itemCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemCode', 'Edm.String', true);
  /**
   * Representation of the {@link OriginalItem.itemName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemName', 'Edm.String', true);
  /**
   * Representation of the {@link OriginalItem.alternativeItems} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alternativeItems: CollectionField<
    EntityT,
    DeSerializersT,
    AlternativeItem,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'AlternativeItems',
    AlternativeItem,
    true
  );

  /**
   * Creates an instance of OriginalItemField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, OriginalItem, fieldOptions);
  }
}

export namespace OriginalItem {
  /**
   * Metadata information on all properties of the `OriginalItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<OriginalItem>[] = [
    {
      originalName: 'ItemCode',
      name: 'itemCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ItemName',
      name: 'itemName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AlternativeItems',
      name: 'alternativeItems',
      type: AlternativeItem,
      isCollection: true
    }
  ];
}
