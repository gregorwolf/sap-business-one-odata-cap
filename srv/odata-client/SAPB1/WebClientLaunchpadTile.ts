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
 * WebClientLaunchpadTile
 */
export interface WebClientLaunchpadTile<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Guid.
   * @nullable
   */
  guid?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Order.
   * @nullable
   */
  order?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Tile Id.
   * @nullable
   */
  tileId?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * WebClientLaunchpadTileField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WebClientLaunchpadTileField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WebClientLaunchpadTile,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WebClientLaunchpadTile.guid} property for query construction.
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
   * Representation of the {@link WebClientLaunchpadTile.order} property for query construction.
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
   * Representation of the {@link WebClientLaunchpadTile.tileId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tileId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TileId', 'Edm.String', true);

  /**
   * Creates an instance of WebClientLaunchpadTileField.
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
      WebClientLaunchpadTile,
      fieldOptions
    );
  }
}

export namespace WebClientLaunchpadTile {
  /**
   * Metadata information on all properties of the `WebClientLaunchpadTile` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WebClientLaunchpadTile>[] = [
    {
      originalName: 'Guid',
      name: 'guid',
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
      originalName: 'TileId',
      name: 'tileId',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
