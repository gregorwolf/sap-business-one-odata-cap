/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * ItemGroupsWarehouseInfo
 */
export interface ItemGroupsWarehouseInfo<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Itms Grp Cod.
   * @nullable
   */
  itmsGrpCod?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Default Bin.
   * @nullable
   */
  defaultBin?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Default Bin Enforced.
   * @nullable
   */
  defaultBinEnforced?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * ItemGroupsWarehouseInfoField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemGroupsWarehouseInfoField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ItemGroupsWarehouseInfo,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ItemGroupsWarehouseInfo.itmsGrpCod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itmsGrpCod: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItmsGrpCod', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemGroupsWarehouseInfo.warehouseCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WarehouseCode', 'Edm.String', true);
  /**
   * Representation of the {@link ItemGroupsWarehouseInfo.defaultBin} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultBin: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DefaultBin', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemGroupsWarehouseInfo.defaultBinEnforced} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultBinEnforced: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DefaultBinEnforced',
    BoYesNoEnum,
    true
  );

  /**
   * Creates an instance of ItemGroupsWarehouseInfoField.
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
      ItemGroupsWarehouseInfo,
      fieldOptions
    );
  }
}

export namespace ItemGroupsWarehouseInfo {
  /**
   * Metadata information on all properties of the `ItemGroupsWarehouseInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemGroupsWarehouseInfo>[] =
    [
      {
        originalName: 'ItmsGrpCod',
        name: 'itmsGrpCod',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'WarehouseCode',
        name: 'warehouseCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DefaultBin',
        name: 'defaultBin',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'DefaultBinEnforced',
        name: 'defaultBinEnforced',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}
