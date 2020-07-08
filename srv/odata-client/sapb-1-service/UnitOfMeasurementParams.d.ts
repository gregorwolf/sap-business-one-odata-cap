import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UnitOfMeasurementParams
 */
export interface UnitOfMeasurementParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[UnitOfMeasurementParams.build]] instead.
 */
export declare function createUnitOfMeasurementParams(json: any): UnitOfMeasurementParams;
/**
 * UnitOfMeasurementParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UnitOfMeasurementParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UnitOfMeasurementParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UnitOfMeasurementParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace UnitOfMeasurementParams {
    function build(json: {
        [keys: string]: FieldType;
    }): UnitOfMeasurementParams;
}
//# sourceMappingURL=UnitOfMeasurementParams.d.ts.map