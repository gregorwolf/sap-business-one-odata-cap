/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemUoMTypeEnum } from './ItemUoMTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ItemUoMPackage
 */
export interface ItemUoMPackage {
  /**
   * Uo M Type.
   * @nullable
   */
  uoMType?: ItemUoMTypeEnum;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: number;
  /**
   * Package Type Entry.
   * @nullable
   */
  packageTypeEntry?: number;
  /**
   * Length 1.
   * @nullable
   */
  length1?: number;
  /**
   * Length 1 Unit.
   * @nullable
   */
  length1Unit?: number;
  /**
   * Length 2.
   * @nullable
   */
  length2?: number;
  /**
   * Length 2 Unit.
   * @nullable
   */
  length2Unit?: number;
  /**
   * Width 1.
   * @nullable
   */
  width1?: number;
  /**
   * Width 1 Unit.
   * @nullable
   */
  width1Unit?: number;
  /**
   * Width 2.
   * @nullable
   */
  width2?: number;
  /**
   * Width 2 Unit.
   * @nullable
   */
  width2Unit?: number;
  /**
   * Height 1.
   * @nullable
   */
  height1?: number;
  /**
   * Height 1 Unit.
   * @nullable
   */
  height1Unit?: number;
  /**
   * Height 2.
   * @nullable
   */
  height2?: number;
  /**
   * Height 2 Unit.
   * @nullable
   */
  height2Unit?: number;
  /**
   * Volume.
   * @nullable
   */
  volume?: number;
  /**
   * Volume Unit.
   * @nullable
   */
  volumeUnit?: number;
  /**
   * Weight 1.
   * @nullable
   */
  weight1?: number;
  /**
   * Weight 1 Unit.
   * @nullable
   */
  weight1Unit?: number;
  /**
   * Weight 2.
   * @nullable
   */
  weight2?: number;
  /**
   * Weight 2 Unit.
   * @nullable
   */
  weight2Unit?: number;
  /**
   * Quantity Per Package.
   * @nullable
   */
  quantityPerPackage?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemUoMPackage.build]] instead.
 */
export function createItemUoMPackage(json: any): ItemUoMPackage {
  return ItemUoMPackage.build(json);
}

/**
 * ItemUoMPackageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemUoMPackageField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemUoMPackage> {
  /**
   * Representation of the [[ItemUoMPackage.uoMType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('UoMType', this);
  /**
   * Representation of the [[ItemUoMPackage.uoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUoMPackage.packageTypeEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  packageTypeEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PackageTypeEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUoMPackage.length1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  length1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Length1', this, 'Edm.Double');
  /**
   * Representation of the [[ItemUoMPackage.length1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  length1Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Length1Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUoMPackage.length2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  length2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Length2', this, 'Edm.Double');
  /**
   * Representation of the [[ItemUoMPackage.length2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  length2Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Length2Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUoMPackage.width1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Width1', this, 'Edm.Double');
  /**
   * Representation of the [[ItemUoMPackage.width1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width1Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Width1Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUoMPackage.width2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Width2', this, 'Edm.Double');
  /**
   * Representation of the [[ItemUoMPackage.width2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width2Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Width2Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUoMPackage.height1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Height1', this, 'Edm.Double');
  /**
   * Representation of the [[ItemUoMPackage.height1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height1Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Height1Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUoMPackage.height2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Height2', this, 'Edm.Double');
  /**
   * Representation of the [[ItemUoMPackage.height2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height2Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Height2Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUoMPackage.volume]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  volume: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Volume', this, 'Edm.Double');
  /**
   * Representation of the [[ItemUoMPackage.volumeUnit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  volumeUnit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VolumeUnit', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUoMPackage.weight1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Weight1', this, 'Edm.Double');
  /**
   * Representation of the [[ItemUoMPackage.weight1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight1Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Weight1Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUoMPackage.weight2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Weight2', this, 'Edm.Double');
  /**
   * Representation of the [[ItemUoMPackage.weight2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight2Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Weight2Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUoMPackage.quantityPerPackage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantityPerPackage: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('QuantityPerPackage', this, 'Edm.Double');

  /**
   * Creates an instance of ItemUoMPackageField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ItemUoMPackage);
  }
}

export namespace ItemUoMPackage {
  /**
   * Metadata information on all properties of the `ItemUoMPackage` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemUoMPackage>[] = [{
    originalName: 'UoMType',
    name: 'uoMType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'UoMEntry',
    name: 'uoMEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PackageTypeEntry',
    name: 'packageTypeEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Length1',
    name: 'length1',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Length1Unit',
    name: 'length1Unit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Length2',
    name: 'length2',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Length2Unit',
    name: 'length2Unit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Width1',
    name: 'width1',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Width1Unit',
    name: 'width1Unit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Width2',
    name: 'width2',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Width2Unit',
    name: 'width2Unit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Height1',
    name: 'height1',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Height1Unit',
    name: 'height1Unit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Height2',
    name: 'height2',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Height2Unit',
    name: 'height2Unit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Volume',
    name: 'volume',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'VolumeUnit',
    name: 'volumeUnit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Weight1',
    name: 'weight1',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Weight1Unit',
    name: 'weight1Unit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Weight2',
    name: 'weight2',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Weight2Unit',
    name: 'weight2Unit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'QuantityPerPackage',
    name: 'quantityPerPackage',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ItemUoMPackage {
    return deserializeComplexTypeV4(json, ItemUoMPackage);
  }
}
