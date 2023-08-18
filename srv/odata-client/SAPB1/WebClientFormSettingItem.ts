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
 * WebClientFormSettingItem
 */
export interface WebClientFormSettingItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Guid.
   * @nullable
   */
  guid?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Id.
   * @nullable
   */
  itemId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Order.
   * @nullable
   */
  order?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Visible.
   * @nullable
   */
  visible?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Editable.
   * @nullable
   */
  editable?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Visible In Grid.
   * @nullable
   */
  visibleInGrid?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Editable In Grid.
   * @nullable
   */
  editableInGrid?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * WebClientFormSettingItemField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WebClientFormSettingItemField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WebClientFormSettingItem,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WebClientFormSettingItem.guid} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  guid: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Guid', 'Edm.String', true);
  /**
   * Representation of the {@link WebClientFormSettingItem.itemId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true);
  /**
   * Representation of the {@link WebClientFormSettingItem.order} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  order: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Order', 'Edm.Int32', true);
  /**
   * Representation of the {@link WebClientFormSettingItem.visible} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visible: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Visible', 'Edm.String', true);
  /**
   * Representation of the {@link WebClientFormSettingItem.editable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  editable: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Editable', 'Edm.String', true);
  /**
   * Representation of the {@link WebClientFormSettingItem.visibleInGrid} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visibleInGrid: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VisibleInGrid', 'Edm.String', true);
  /**
   * Representation of the {@link WebClientFormSettingItem.editableInGrid} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  editableInGrid: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EditableInGrid',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of WebClientFormSettingItemField.
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
      WebClientFormSettingItem,
      fieldOptions
    );
  }
}

export namespace WebClientFormSettingItem {
  /**
   * Metadata information on all properties of the `WebClientFormSettingItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WebClientFormSettingItem>[] =
    [
      {
        originalName: 'Guid',
        name: 'guid',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ItemId',
        name: 'itemId',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Order',
        name: 'order',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Visible',
        name: 'visible',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Editable',
        name: 'editable',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'VisibleInGrid',
        name: 'visibleInGrid',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'EditableInGrid',
        name: 'editableInGrid',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
