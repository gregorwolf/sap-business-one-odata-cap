import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * RoutingDateCalculationOutput
 */
export interface RoutingDateCalculationOutput {
    /**
     * Result Date.
     * @nullable
     */
    resultDate?: Moment;
    /**
     * Proportion.
     * @nullable
     */
    proportion?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[RoutingDateCalculationOutput.build]] instead.
 */
export declare function createRoutingDateCalculationOutput(json: any): RoutingDateCalculationOutput;
/**
 * RoutingDateCalculationOutputField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class RoutingDateCalculationOutputField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[RoutingDateCalculationOutput.resultDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    resultDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[RoutingDateCalculationOutput.proportion]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    proportion: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace RoutingDateCalculationOutput {
    function build(json: {
        [keys: string]: FieldType;
    }): RoutingDateCalculationOutput;
}
//# sourceMappingURL=RoutingDateCalculationOutput.d.ts.map