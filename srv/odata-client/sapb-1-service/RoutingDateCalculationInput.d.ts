import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class RoutingDateCalculationInputField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
     * Representation of the [[RoutingDateCalculationInput.worObjAbs]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    worObjAbs: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[RoutingDateCalculationInput.worLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    worLine: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace RoutingDateCalculationInput {
    function build(json: {
        [keys: string]: FieldType;
    }): RoutingDateCalculationInput;
}
//# sourceMappingURL=RoutingDateCalculationInput.d.ts.map