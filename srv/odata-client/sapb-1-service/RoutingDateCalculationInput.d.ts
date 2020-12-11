import { Moment } from 'moment';
import { ResourceAllocationEnum } from './ResourceAllocationEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * RoutingDateCalculationInput
 */
export interface RoutingDateCalculationInput {
    /**
     * Resource Code.
     * @nullable
     */
    resourceCode?: string;
    /**
     * Warehouse Code.
     * @nullable
     */
    warehouseCode?: string;
    /**
     * Calculate From Date.
     * @nullable
     */
    calculateFromDate?: Moment;
    /**
     * Calculate Until Date.
     * @nullable
     */
    calculateUntilDate?: Moment;
    /**
     * Capacity Sum.
     * @nullable
     */
    capacitySum?: number;
    /**
     * First Date Proportion.
     * @nullable
     */
    firstDateProportion?: number;
    /**
     * Resource Alloc.
     * @nullable
     */
    resourceAlloc?: ResourceAllocationEnum;
    /**
     * Wor Obj Abs.
     * @nullable
     */
    worObjAbs?: number;
    /**
     * Wor Line.
     * @nullable
     */
    worLine?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[RoutingDateCalculationInput.build]] instead.
 */
export declare function createRoutingDateCalculationInput(json: any): RoutingDateCalculationInput;
/**
 * RoutingDateCalculationInputField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class RoutingDateCalculationInputField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, RoutingDateCalculationInput> {
    /**
     * Representation of the [[RoutingDateCalculationInput.resourceCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    resourceCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[RoutingDateCalculationInput.warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouseCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[RoutingDateCalculationInput.calculateFromDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    calculateFromDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[RoutingDateCalculationInput.calculateUntilDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    calculateUntilDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[RoutingDateCalculationInput.capacitySum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    capacitySum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[RoutingDateCalculationInput.firstDateProportion]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    firstDateProportion: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[RoutingDateCalculationInput.resourceAlloc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    resourceAlloc: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[RoutingDateCalculationInput.worObjAbs]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    worObjAbs: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[RoutingDateCalculationInput.worLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    worLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of RoutingDateCalculationInputField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace RoutingDateCalculationInput {
    /**
     * Metadata information on all properties of the `RoutingDateCalculationInput` complex type.
     */
    const _propertyMetadata: PropertyMetadata<RoutingDateCalculationInput>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): RoutingDateCalculationInput;
}
//# sourceMappingURL=RoutingDateCalculationInput.d.ts.map