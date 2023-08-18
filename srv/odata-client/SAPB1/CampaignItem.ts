/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CampaignItemTypeEnum } from './CampaignItemTypeEnum';
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
 * CampaignItem
 */
export interface CampaignItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Campaign Number.
   * @nullable
   */
  campaignNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Campaign Line Number.
   * @nullable
   */
  campaignLineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
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
   * Item Type.
   * @nullable
   */
  itemType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Item Group.
   * @nullable
   */
  itemGroup?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * CampaignItemField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CampaignItemField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CampaignItem,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CampaignItem.campaignNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  campaignNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CampaignNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link CampaignItem.campaignLineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  campaignLineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CampaignLineNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link CampaignItem.itemCode} property for query construction.
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
   * Representation of the {@link CampaignItem.itemName} property for query construction.
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
   * Representation of the {@link CampaignItem.itemType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemType: EnumField<
    EntityT,
    DeSerializersT,
    CampaignItemTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('ItemType', CampaignItemTypeEnum, true);
  /**
   * Representation of the {@link CampaignItem.itemGroup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemGroup: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemGroup', 'Edm.String', true);

  /**
   * Creates an instance of CampaignItemField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, CampaignItem, fieldOptions);
  }
}

export namespace CampaignItem {
  /**
   * Metadata information on all properties of the `CampaignItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CampaignItem>[] = [
    {
      originalName: 'CampaignNumber',
      name: 'campaignNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CampaignLineNumber',
      name: 'campaignLineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
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
      originalName: 'ItemType',
      name: 'itemType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ItemGroup',
      name: 'itemGroup',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
