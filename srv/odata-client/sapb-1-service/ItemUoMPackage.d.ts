import { ItemUoMTypeEnum } from './ItemUoMTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare function createItemUoMPackage(json: any): ItemUoMPackage;
/**
 * ItemUoMPackageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemUoMPackageField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemUoMPackage> {
    /**
     * Representation of the [[ItemUoMPackage.uoMType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.uoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.packageTypeEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    packageTypeEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.length1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    length1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.length1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    length1Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.length2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    length2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.length2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    length2Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.width1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    width1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.width1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    width1Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.width2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    width2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.width2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    width2Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.height1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    height1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.height1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    height1Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.height2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    height2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.height2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    height2Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.volume]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    volume: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.volumeUnit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    volumeUnit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.weight1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weight1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.weight1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weight1Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.weight2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weight2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.weight2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weight2Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemUoMPackage.quantityPerPackage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantityPerPackage: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ItemUoMPackageField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ItemUoMPackage {
    /**
     * Metadata information on all properties of the `ItemUoMPackage` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ItemUoMPackage>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ItemUoMPackage;
}
//# sourceMappingURL=ItemUoMPackage.d.ts.map