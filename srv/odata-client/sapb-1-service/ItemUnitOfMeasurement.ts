/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemUoMPackage, ItemUoMPackageField } from './ItemUoMPackage';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ItemUnitOfMeasurement
 */
export interface ItemUnitOfMeasurement {
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: number;
  /**
   * Default Barcode.
   * @nullable
   */
  defaultBarcode?: number;
  /**
   * Default Package.
   * @nullable
   */
  defaultPackage?: number;
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
   * Item Uo M Package Collection.
   * @nullable
   */
  itemUoMPackageCollection?: ItemUoMPackage;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemUnitOfMeasurement.build]] instead.
 */
export function createItemUnitOfMeasurement(json: any): ItemUnitOfMeasurement {
  return ItemUnitOfMeasurement.build(json);
}

/**
 * ItemUnitOfMeasurementField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemUnitOfMeasurementField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ItemUnitOfMeasurement.uoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUnitOfMeasurement.defaultBarcode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultBarcode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DefaultBarcode', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUnitOfMeasurement.defaultPackage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultPackage: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DefaultPackage', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUnitOfMeasurement.length1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  length1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Length1', this, 'Edm.Double');
  /**
   * Representation of the [[ItemUnitOfMeasurement.length1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  length1Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Length1Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUnitOfMeasurement.length2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  length2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Length2', this, 'Edm.Double');
  /**
   * Representation of the [[ItemUnitOfMeasurement.length2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  length2Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Length2Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUnitOfMeasurement.width1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Width1', this, 'Edm.Double');
  /**
   * Representation of the [[ItemUnitOfMeasurement.width1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width1Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Width1Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUnitOfMeasurement.width2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Width2', this, 'Edm.Double');
  /**
   * Representation of the [[ItemUnitOfMeasurement.width2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width2Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Width2Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUnitOfMeasurement.height1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Height1', this, 'Edm.Double');
  /**
   * Representation of the [[ItemUnitOfMeasurement.height1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height1Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Height1Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUnitOfMeasurement.height2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Height2', this, 'Edm.Double');
  /**
   * Representation of the [[ItemUnitOfMeasurement.height2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height2Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Height2Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUnitOfMeasurement.volume]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  volume: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Volume', this, 'Edm.Double');
  /**
   * Representation of the [[ItemUnitOfMeasurement.volumeUnit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  volumeUnit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VolumeUnit', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUnitOfMeasurement.weight1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Weight1', this, 'Edm.Double');
  /**
   * Representation of the [[ItemUnitOfMeasurement.weight1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight1Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Weight1Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUnitOfMeasurement.weight2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Weight2', this, 'Edm.Double');
  /**
   * Representation of the [[ItemUnitOfMeasurement.weight2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight2Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Weight2Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemUnitOfMeasurement.itemUoMPackageCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemUoMPackageCollection: ItemUoMPackageField<EntityT> = new ItemUoMPackageField('ItemUoMPackageCollection', this);
}

export namespace ItemUnitOfMeasurement {
  export function build(json: { [keys: string]: FieldType | ItemUoMPackage }): ItemUnitOfMeasurement {
    return createComplexType(json, {
      UoMEntry: (uoMEntry: number) => ({ uoMEntry: edmToTs(uoMEntry, 'Edm.Int32') }),
      DefaultBarcode: (defaultBarcode: number) => ({ defaultBarcode: edmToTs(defaultBarcode, 'Edm.Int32') }),
      DefaultPackage: (defaultPackage: number) => ({ defaultPackage: edmToTs(defaultPackage, 'Edm.Int32') }),
      Length1: (length1: number) => ({ length1: edmToTs(length1, 'Edm.Double') }),
      Length1Unit: (length1Unit: number) => ({ length1Unit: edmToTs(length1Unit, 'Edm.Int32') }),
      Length2: (length2: number) => ({ length2: edmToTs(length2, 'Edm.Double') }),
      Length2Unit: (length2Unit: number) => ({ length2Unit: edmToTs(length2Unit, 'Edm.Int32') }),
      Width1: (width1: number) => ({ width1: edmToTs(width1, 'Edm.Double') }),
      Width1Unit: (width1Unit: number) => ({ width1Unit: edmToTs(width1Unit, 'Edm.Int32') }),
      Width2: (width2: number) => ({ width2: edmToTs(width2, 'Edm.Double') }),
      Width2Unit: (width2Unit: number) => ({ width2Unit: edmToTs(width2Unit, 'Edm.Int32') }),
      Height1: (height1: number) => ({ height1: edmToTs(height1, 'Edm.Double') }),
      Height1Unit: (height1Unit: number) => ({ height1Unit: edmToTs(height1Unit, 'Edm.Int32') }),
      Height2: (height2: number) => ({ height2: edmToTs(height2, 'Edm.Double') }),
      Height2Unit: (height2Unit: number) => ({ height2Unit: edmToTs(height2Unit, 'Edm.Int32') }),
      Volume: (volume: number) => ({ volume: edmToTs(volume, 'Edm.Double') }),
      VolumeUnit: (volumeUnit: number) => ({ volumeUnit: edmToTs(volumeUnit, 'Edm.Int32') }),
      Weight1: (weight1: number) => ({ weight1: edmToTs(weight1, 'Edm.Double') }),
      Weight1Unit: (weight1Unit: number) => ({ weight1Unit: edmToTs(weight1Unit, 'Edm.Int32') }),
      Weight2: (weight2: number) => ({ weight2: edmToTs(weight2, 'Edm.Double') }),
      Weight2Unit: (weight2Unit: number) => ({ weight2Unit: edmToTs(weight2Unit, 'Edm.Int32') }),
      ItemUoMPackageCollection: (itemUoMPackageCollection: ItemUoMPackage) => ({ itemUoMPackageCollection: ItemUoMPackage.build(itemUoMPackageCollection) })
    });
  }
}
