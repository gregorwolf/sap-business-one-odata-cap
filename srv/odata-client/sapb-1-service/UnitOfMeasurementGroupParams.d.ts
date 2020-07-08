import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UnitOfMeasurementGroupParams
 */
export interface UnitOfMeasurementGroupParams {
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
 * @deprecated Since v1.6.0. Use [[UnitOfMeasurementGroupParams.build]] instead.
 */
export declare function createUnitOfMeasurementGroupParams(json: any): UnitOfMeasurementGroupParams;
/**
 * UnitOfMeasurementGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UnitOfMeasurementGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UnitOfMeasurementGroupParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UnitOfMeasurementGroupParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace UnitOfMeasurementGroupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): UnitOfMeasurementGroupParams;
}
//# sourceMappingURL=UnitOfMeasurementGroupParams.d.ts.map