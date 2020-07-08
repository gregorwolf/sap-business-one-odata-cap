import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * LengthMeasureParams
 */
export interface LengthMeasureParams {
    /**
     * Unit Code.
     * @nullable
     */
    unitCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[LengthMeasureParams.build]] instead.
 */
export declare function createLengthMeasureParams(json: any): LengthMeasureParams;
/**
 * LengthMeasureParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class LengthMeasureParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[LengthMeasureParams.unitCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    unitCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace LengthMeasureParams {
    function build(json: {
        [keys: string]: FieldType;
    }): LengthMeasureParams;
}
//# sourceMappingURL=LengthMeasureParams.d.ts.map