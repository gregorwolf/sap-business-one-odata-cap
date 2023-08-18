/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemUoMTypeEnum } from './ItemUoMTypeEnum';
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
 * ItemUoMPackage
 */
export interface ItemUoMPackage<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Uo M Type.
   * @nullable
   */
  uoMType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Package Type Entry.
   * @nullable
   */
  packageTypeEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Length 1.
   * @nullable
   */
  length1?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Length 1 Unit.
   * @nullable
   */
  length1Unit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Length 2.
   * @nullable
   */
  length2?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Length 2 Unit.
   * @nullable
   */
  length2Unit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Width 1.
   * @nullable
   */
  width1?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Width 1 Unit.
   * @nullable
   */
  width1Unit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Width 2.
   * @nullable
   */
  width2?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Width 2 Unit.
   * @nullable
   */
  width2Unit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Height 1.
   * @nullable
   */
  height1?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Height 1 Unit.
   * @nullable
   */
  height1Unit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Height 2.
   * @nullable
   */
  height2?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Height 2 Unit.
   * @nullable
   */
  height2Unit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Volume.
   * @nullable
   */
  volume?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Volume Unit.
   * @nullable
   */
  volumeUnit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Weight 1.
   * @nullable
   */
  weight1?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Weight 1 Unit.
   * @nullable
   */
  weight1Unit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Weight 2.
   * @nullable
   */
  weight2?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Weight 2 Unit.
   * @nullable
   */
  weight2Unit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Quantity Per Package.
   * @nullable
   */
  quantityPerPackage?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * ItemUoMPackageField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemUoMPackageField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ItemUoMPackage,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ItemUoMPackage.uoMType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMType: EnumField<EntityT, DeSerializersT, ItemUoMTypeEnum, true, false> =
    this._fieldBuilder.buildEnumField('UoMType', ItemUoMTypeEnum, true);
  /**
   * Representation of the {@link ItemUoMPackage.uoMEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UoMEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemUoMPackage.packageTypeEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  packageTypeEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PackageTypeEntry',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ItemUoMPackage.length1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  length1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Length1', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemUoMPackage.length1Unit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  length1Unit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Length1Unit', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemUoMPackage.length2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  length2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Length2', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemUoMPackage.length2Unit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  length2Unit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Length2Unit', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemUoMPackage.width1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Width1', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemUoMPackage.width1Unit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width1Unit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Width1Unit', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemUoMPackage.width2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Width2', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemUoMPackage.width2Unit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width2Unit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Width2Unit', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemUoMPackage.height1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Height1', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemUoMPackage.height1Unit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height1Unit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Height1Unit', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemUoMPackage.height2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Height2', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemUoMPackage.height2Unit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height2Unit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Height2Unit', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemUoMPackage.volume} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  volume: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Volume', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemUoMPackage.volumeUnit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  volumeUnit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VolumeUnit', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemUoMPackage.weight1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Weight1', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemUoMPackage.weight1Unit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight1Unit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Weight1Unit', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemUoMPackage.weight2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Weight2', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemUoMPackage.weight2Unit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight2Unit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Weight2Unit', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemUoMPackage.quantityPerPackage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantityPerPackage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'QuantityPerPackage',
    'Edm.Double',
    true
  );

  /**
   * Creates an instance of ItemUoMPackageField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ItemUoMPackage, fieldOptions);
  }
}

export namespace ItemUoMPackage {
  /**
   * Metadata information on all properties of the `ItemUoMPackage` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemUoMPackage>[] = [
    {
      originalName: 'UoMType',
      name: 'uoMType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'UoMEntry',
      name: 'uoMEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PackageTypeEntry',
      name: 'packageTypeEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Length1',
      name: 'length1',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Length1Unit',
      name: 'length1Unit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Length2',
      name: 'length2',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Length2Unit',
      name: 'length2Unit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Width1',
      name: 'width1',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Width1Unit',
      name: 'width1Unit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Width2',
      name: 'width2',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Width2Unit',
      name: 'width2Unit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Height1',
      name: 'height1',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Height1Unit',
      name: 'height1Unit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Height2',
      name: 'height2',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Height2Unit',
      name: 'height2Unit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Volume',
      name: 'volume',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'VolumeUnit',
      name: 'volumeUnit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Weight1',
      name: 'weight1',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Weight1Unit',
      name: 'weight1Unit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Weight2',
      name: 'weight2',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Weight2Unit',
      name: 'weight2Unit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'QuantityPerPackage',
      name: 'quantityPerPackage',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
