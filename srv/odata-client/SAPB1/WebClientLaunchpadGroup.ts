/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WebClientLaunchpadTile } from './WebClientLaunchpadTile';
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * WebClientLaunchpadGroup
 */
export interface WebClientLaunchpadGroup<
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
   * Group Id.
   * @nullable
   */
  groupId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Group Name.
   * @nullable
   */
  groupName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Visible.
   * @nullable
   */
  visible?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Web Client Launchpad Tiles.
   * @nullable
   */
  webClientLaunchpadTiles?: DeserializedType<
    DeSerializersT,
    'SAPB1.WebClientLaunchpadTile'
  >;
}

/**
 * WebClientLaunchpadGroupField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WebClientLaunchpadGroupField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WebClientLaunchpadGroup,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WebClientLaunchpadGroup.guid} property for query construction.
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
   * Representation of the {@link WebClientLaunchpadGroup.order} property for query construction.
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
   * Representation of the {@link WebClientLaunchpadGroup.groupId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GroupId', 'Edm.String', true);
  /**
   * Representation of the {@link WebClientLaunchpadGroup.groupName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GroupName', 'Edm.String', true);
  /**
   * Representation of the {@link WebClientLaunchpadGroup.visible} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visible: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Visible', BoYesNoEnum, true);
  /**
   * Representation of the {@link WebClientLaunchpadGroup.webClientLaunchpadTiles} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  webClientLaunchpadTiles: CollectionField<
    EntityT,
    DeSerializersT,
    WebClientLaunchpadTile,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'WebClientLaunchpadTiles',
    WebClientLaunchpadTile,
    true
  );

  /**
   * Creates an instance of WebClientLaunchpadGroupField.
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
      WebClientLaunchpadGroup,
      fieldOptions
    );
  }
}

export namespace WebClientLaunchpadGroup {
  /**
   * Metadata information on all properties of the `WebClientLaunchpadGroup` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WebClientLaunchpadGroup>[] =
    [
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
        originalName: 'GroupId',
        name: 'groupId',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'GroupName',
        name: 'groupName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Visible',
        name: 'visible',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'WebClientLaunchpadTiles',
        name: 'webClientLaunchpadTiles',
        type: WebClientLaunchpadTile,
        isCollection: true
      }
    ];
}
