import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * AccrualTypeParams
 */
export interface AccrualTypeParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[AccrualTypeParams.build]] instead.
 */
export declare function createAccrualTypeParams(json: any): AccrualTypeParams;
/**
 * AccrualTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AccrualTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AccrualTypeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace AccrualTypeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): AccrualTypeParams;
}
//# sourceMappingURL=AccrualTypeParams.d.ts.map