/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ItemUoMPackage
 */
export interface ItemUoMPackage {
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
export class ItemUoMPackageField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace ItemUoMPackage {
  export function build(json: { [keys: string]: FieldType }): ItemUoMPackage {
    return createComplexType(json, {
      UoMEntry: (uoMEntry: number) => ({ uoMEntry: edmToTs(uoMEntry, 'Edm.Int32') }),
      PackageTypeEntry: (packageTypeEntry: number) => ({ packageTypeEntry: edmToTs(packageTypeEntry, 'Edm.Int32') }),
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
      QuantityPerPackage: (quantityPerPackage: number) => ({ quantityPerPackage: edmToTs(quantityPerPackage, 'Edm.Double') })
    });
  }
}
