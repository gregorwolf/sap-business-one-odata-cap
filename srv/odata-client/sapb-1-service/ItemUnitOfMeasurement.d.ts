import { ItemUoMPackage } from './ItemUoMPackage';
import { ItemUoMTypeEnum } from './ItemUoMTypeEnum';
import { CollectionField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ItemUnitOfMeasurement
 */
export interface ItemUnitOfMeasurement {
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
    itemUoMPackageCollection?: ItemUoMPackage[];
}
/**
 * @deprecated Since v1.6.0. Use [[ItemUnitOfMeasurement.build]] instead.
 */
export declare function createItemUnitOfMeasurement(json: any): ItemUnitOfMeasurement;
/**
 * ItemUnitOfMeasurementField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemUnitOfMeasurementField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemUnitOfMeasurement> {
    /**
     * Representation of the [[ItemUnitOfMeasurement.uoMType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.uoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.defaultBarcode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultBarcode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.defaultPackage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultPackage: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.length1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    length1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.length1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    length1Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.length2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    length2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.length2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    length2Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.width1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    width1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.width1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    width1Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.width2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    width2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.width2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    width2Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.height1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    height1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.height1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    height1Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.height2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    height2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.height2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    height2Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.volume]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    volume: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.volumeUnit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    volumeUnit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.weight1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weight1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.weight1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weight1Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.weight2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weight2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.weight2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weight2Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUnitOfMeasurement.itemUoMPackageCollection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemUoMPackageCollection: CollectionField<EntityT, ItemUoMPackage>;
    /**
     * Creates an instance of ItemUnitOfMeasurementField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ItemUnitOfMeasurement {
    /**
     * Metadata information on all properties of the `ItemUnitOfMeasurement` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ItemUnitOfMeasurement>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | ItemUoMPackage;
    }): ItemUnitOfMeasurement;
}
//# sourceMappingURL=ItemUnitOfMeasurement.d.ts.map