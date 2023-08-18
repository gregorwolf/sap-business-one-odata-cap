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
 * ItemLocalizationInfo
 */
export interface ItemLocalizationInfo<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Income Nature.
   * @nullable
   */
  incomeNature?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ItemLocalizationInfoField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemLocalizationInfoField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ItemLocalizationInfo,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ItemLocalizationInfo.itemCode} property for query construction.
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
   * Representation of the {@link ItemLocalizationInfo.incomeNature} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  incomeNature: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('IncomeNature', 'Edm.String', true);

  /**
   * Creates an instance of ItemLocalizationInfoField.
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
      ItemLocalizationInfo,
      fieldOptions
    );
  }
}

export namespace ItemLocalizationInfo {
  /**
   * Metadata information on all properties of the `ItemLocalizationInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemLocalizationInfo>[] = [
    {
      originalName: 'ItemCode',
      name: 'itemCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'IncomeNature',
      name: 'incomeNature',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
