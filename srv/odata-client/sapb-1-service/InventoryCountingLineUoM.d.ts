import { CounterTypeEnum } from './CounterTypeEnum';
import { MultipleCounterRoleEnum } from './MultipleCounterRoleEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * InventoryCountingLineUoM
 */
export interface InventoryCountingLineUoM {
    /**
     * Document Entry.
     * @nullable
     */
    documentEntry?: number;
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Child Number.
     * @nullable
     */
    childNumber?: number;
    /**
     * Uo M Counted Quantity.
     * @nullable
     */
    uoMCountedQuantity?: number;
    /**
     * Items Per Unit.
     * @nullable
     */
    itemsPerUnit?: number;
    /**
     * Counted Quantity.
     * @nullable
     */
    countedQuantity?: number;
    /**
     * Uo M Code.
     * @nullable
     */
    uoMCode?: string;
    /**
     * Bar Code.
     * @nullable
     */
    barCode?: string;
    /**
     * Counter Type.
     * @nullable
     */
    counterType?: CounterTypeEnum;
    /**
     * Counter Id.
     * @nullable
     */
    counterId?: number;
    /**
     * Multiple Counter Role.
     * @nullable
     */
    multipleCounterRole?: MultipleCounterRoleEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[InventoryCountingLineUoM.build]] instead.
 */
export declare function createInventoryCountingLineUoM(json: any): InventoryCountingLineUoM;
/**
 * InventoryCountingLineUoMField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InventoryCountingLineUoMField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InventoryCountingLineUoM> {
    /**
     * Representation of the [[InventoryCountingLineUoM.documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLineUoM.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLineUoM.childNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    childNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLineUoM.uoMCountedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMCountedQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLineUoM.itemsPerUnit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemsPerUnit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLineUoM.countedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    countedQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLineUoM.uoMCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLineUoM.barCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    barCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLineUoM.counterType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    counterType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLineUoM.counterId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    counterId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLineUoM.multipleCounterRole]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    multipleCounterRole: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of InventoryCountingLineUoMField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace InventoryCountingLineUoM {
    /**
     * Metadata information on all properties of the `InventoryCountingLineUoM` complex type.
     */
    const _propertyMetadata: PropertyMetadata<InventoryCountingLineUoM>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): InventoryCountingLineUoM;
}
//# sourceMappingURL=InventoryCountingLineUoM.d.ts.map