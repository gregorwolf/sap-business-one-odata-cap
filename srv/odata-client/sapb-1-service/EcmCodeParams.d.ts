import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * EcmCodeParams
 */
export interface EcmCodeParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[EcmCodeParams.build]] instead.
 */
export declare function createEcmCodeParams(json: any): EcmCodeParams;
/**
 * EcmCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EcmCodeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EcmCodeParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace EcmCodeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): EcmCodeParams;
}
//# sourceMappingURL=EcmCodeParams.d.ts.map