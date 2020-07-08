import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CheckLineParams
 */
export interface CheckLineParams {
    /**
     * Check Key.
     * @nullable
     */
    checkKey?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[CheckLineParams.build]] instead.
 */
export declare function createCheckLineParams(json: any): CheckLineParams;
/**
 * CheckLineParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CheckLineParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CheckLineParams.checkKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkKey: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace CheckLineParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CheckLineParams;
}
//# sourceMappingURL=CheckLineParams.d.ts.map